import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from '../common/searchBar';

class ViewOrganizations extends Component {
    state = { 
        organizations : [{"organizationId":"org1"},{"organizationId":"org2"}],
        sorting : { property : "organizationId", order : "asc" },
        searchText  : "",
        organizationId:''
    };

    grantPermission = organization =>{

        fetch("http://localhost:4000/grantAccessToOrganization", {
        method:"POST",
        body:JSON.stringify({
            "data":{
                "organizationId":organization
            }
        }),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        alert(`Granted ${organization}`);
    };

    revokePermission = organization => {
        fetch("http://localhost:4000/revokeAccessFromOrganization", {
            method:"POST",
            body:JSON.stringify({
                "data":{
                    "organizationId":organization
                }
            }),
            headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        alert(`Revoked ${organization}`);
    };

    hasPermission = async organization => {
        let promise = await fetch("http://localhost:4000/hasMyPermission", {
            method:"POST",
            body:JSON.stringify({
                "data":{
                    "organizationId":organization
                }
            }),
            headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        return await promise.json();

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
                                <td> {organization.organizationId}</td>
                                <td>{ !this.hasPermission(organization.organizationId) && 
                                    <button  type="button" onClick={()=>this.grantPermission(organization.organizationId)} class="btn btn-success">Grant</button>}
                                    { this.hasPermission(organization.organizationId) && 
                                    <button  type="button" class="btn btn-success" disabled>Grant</button>}
                                </td>
                                <td>{ this.hasPermission(organization.organizationId) && 
                                    <button type="button" onClick={()=>this.revokePermission(organization.organizationId)} class="btn btn-danger">Revoke</button>}
                                    { !this.hasPermission(organization.organizationId) && 
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