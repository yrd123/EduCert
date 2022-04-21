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
        documentsStatus : "All",
        currentPage : 1,
        pageSize : 2,
        sorting : { property : "documentName", order : "asc" },
        searchText  : "",
        openApplicantModal: false,
        applicant:{},
        organizationId:''
    };

    grantPermission = name =>{

        fetch("http://localhost:4000/grantAccessToOrganization", {
        method:"POST",
        body:JSON.stringify({
            "data":{
                "organizationId":name
            }
        }),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        alert(`Granted ${name}`);
    };

    revokePermission = name => {
        fetch("http://localhost:4000/revokeAccessFromOrganization", {
            method:"POST",
            body:JSON.stringify({
                "data":{
                    "organizationId":name
                }
            }),
            headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        alert(`Revoked ${name}`);
    };

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
        const {currentPage, documentsStatus, pageSize, documents, sorting, searchText} = this.state;
        let filteredDocuments = documents;
        if(documentsStatus !== "All")
            filteredDocuments = documents.filter(document => document.status === documentsStatus);
        filteredDocuments = filteredDocuments.filter(document => {
            for(let property in document){
                if(document[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedDocuments = _.orderBy(filteredDocuments,[sorting.property],[sorting.order]);
        const paginatedDocuments = paginate(sortedDocuments, currentPage, pageSize);
        
        const modalStyle = {
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflow:'scroll',
            height:'70%'
        };
          
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
                        { paginatedDocuments.map((document) => 
                            <tr key={document.organizationId}>
                                <td> {document.organizationId}</td>
                                <td><button  type="button" onClick={this.grantPermission(document.organizationId)} class="btn btn-success">Grant</button></td>
                                <td><button type="button" onClick={this.revokePermission(document.organizationId)} class="btn btn-danger">Revoke</button></td>
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