import React, { Component } from 'react';
import { getDocumentsByOrganizationId } from '../../services/documentService';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import SearchBar from '../common/searchBar';
import PreviewCertificate from '../common/previewCertificate';
import { getApplicantById } from '../../services/applicantService';
import { Link, useNavigate } from 'react-router-dom';

import VerifyDocument from '../organization/verifyDocument';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class ViewOrganizations extends Component {
    state = { 
        documents : [{"organizationId":"org1"},{"organizationId":"org2"}],
        sorting : { property : "documentName", order : "asc" },
        searchText  : "",
        openApplicantModal: false,
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

    hasPermission = organization => {
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
        const { documents, sorting, searchText} = this.state;
        filteredDocuments = documents.filter(document => {
            for(let property in document){
                if(document[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedDocuments = _.orderBy(filteredDocuments,[sorting.property],[sorting.order]);
          
        return (
            <>
                <div style={{margin: 10, backgroundColor: 'white', padding: 40, paddingLeft: 120, paddingRight:120}}>
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th className="clickable" onClick={() => this.sort("documentId")} scope="col">OrganizationId {this.renderSortIcon("documentName")}</th>
                            <th scope="col">Access</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <br></br>
                        <tbody>    
                        { sortedDocuments.map((document) => 
                            <tr key={document.organizationId}>
                                <td> {document.organizationId}</td>
                                <td>{ !hasPermission(document.organizationId) && 
                                    <button  type="button" onClick={this.grantPermission(document.organizationId)} class="btn btn-success">Grant</button>}
                                    { hasPermission(document.organizationId) && 
                                    <button  type="button" class="btn btn-success" disabled>Grant</button>}
                                </td>
                                <td>{ hasPermission(document.organizationId) && 
                                    <button type="button" onClick={this.revokePermission(document.organizationId)} class="btn btn-danger">Revoke</button>}
                                    { !hasPermission(document.organizationId) && 
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