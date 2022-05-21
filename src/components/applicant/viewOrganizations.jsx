import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from '../common/searchBar';
import backend from '../../config.json';
const url = String(backend.backend) + "";

class ViewOrganizations extends Component {
    state = { 
        organizations : [{"organizationId":"org1", "hasPermission":true},{"organizationId":"org2", "hasPermission":true}],
        sorting : { property : "organizationId", order : "asc" },
        searchText  : "",
        organizationId:'',
        error:''
    };

    async componentDidMount(){
        await this.setPermissions();
    }

    grantPermission = organization =>{

        fetch(url+"/grantAccessToOrganization", {
        method:"POST",
        body:JSON.stringify({
            "data":{
                "organizationId":organization
            }
        }),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })        
        .then(response => {
            if(response.ok)
                return response.text();
            else
                return response.text().then(text => { throw new Error(text) })
        })
        .then(data => {
            alert(data + ` to ${organization}`);
            window.location.reload(false);
        })
        .catch(err => {
            this.setState({error:err.message});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    };

    revokePermission = organization => {
        fetch(url+"/revokeAccessFromOrganization", {
            method:"POST",
            body:JSON.stringify({
                "data":{
                    "organizationId":organization
                }
            }),
            headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
            if(response.ok)
                return response.text();
            else
                return response.text().then(text => { throw new Error(text) })
        })
        .then(data => {
            alert(data + ` for ${organization}`);
            window.location.reload(false);
        })
        .catch(err => {
            this.setState({error:err.message});
        })
    
        
    };

    setPermissions = async() => {
        let organizations = this.state.organizations;
        for(let org of organizations){
        await fetch(url+"/hasMyPermission", {
            method:"POST",
            body:JSON.stringify({
                "data":{
                    "organizationId":org["organizationId"]
                }
            }),
            headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        }).then(response => {
            if(response.ok)
                return response.json();
            else
                return response.text().then(text => { throw new Error(text) })
        })
        .then(data => {
            org["hasPermission"] = data;
            console.log(org["organizationId"])
            console.log(org["hasPermission"]);
            console.log(data);
        })
        .catch(err => {
            this.setState({error:err.message});
        })
    }
            
        this.setState(organizations)
        console.log(this.state.organizations);
        //return await promise.json();

    }

    hasRevokePermission = organizationId => {
        if(organizationId == 'org1')
            return true;
        return false;
    }

    sort(property){
        if(this.state.sorting.property === property){
            const order = (this.state.sorting.order === "asc") ? "desc" : "asc";
            this.setState({sorting : { property , order}});
        }
        else
            this.setState({sorting : { property , order : "asc"}});
    }

    renderSortIcon = property => {
        if(property !== this.state.sorting.property) return null;
        if(this.state.sorting.order === "asc") return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    search = searchText => {
        console.log(searchText);
        this.setState({searchText});
    }

    render() { 
        const { organizations, sorting, searchText} = this.state;
        let filteredOrganizations = organizations.filter(organization => {
            for(let property in organization){
                if(organization[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedOrganizations = _.orderBy(filteredOrganizations,[sorting.property],[sorting.order]);
          
        return (
            <>
                <div style={{margin: 10, backgroundColor: 'white', padding: 40, paddingLeft: 120, paddingRight:120}}>
                { this.state.error &&
                    <div class="alert alert-danger" role="alert">
                        <center>{this.state.error}</center>
                    </div>}
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th className="clickable" onClick={() => this.sort("organizationId")} scope="col">OrganizationId {this.renderSortIcon("organizationName")}</th>
                            <th scope="col">Access</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <br></br>
                        <tbody>    
                        { sortedOrganizations.map((organization) => 
                            <tr key={organization.organizationId}>
                                <td> {organization.organizationId} {organization.hasPermission}</td>
                                <td>{ !organization.hasPermission && 
                                    <button  type="button" onClick={()=>this.grantPermission(organization.organizationId)} class="btn btn-success">Grant</button>}
                                    { organization.hasPermission && 
                                    <button  type="button" class="btn btn-success" disabled>Grant</button>}
                                </td>
                                <td>{ organization.hasPermission && this.hasRevokePermission(organization.organizationId) &&
                                    <button type="button" onClick={()=>this.revokePermission(organization.organizationId)} class="btn btn-danger">Revoke</button>}
                                    { !organization.hasPermission && 
                                    <button type="button" class="btn btn-danger" disabled>Revoke</button>}
                                    
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
 
export default ViewOrganizations;
