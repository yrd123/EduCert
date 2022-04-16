import React, { Component } from 'react';
import { getDocumentsByOrganizationId } from '../services/documentService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import CustomModal from './common/modal';
import CenteredTabs from './common/tabs';
import SearchBar from './common/searchBar';
import PreviewCertificate from './common/previewCertificate';
import { getApplicantById } from '../services/applicantService';
import { Link, useNavigate } from 'react-router-dom';

import VerifyDocument from './organization/verifyDocument';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class OrganizationDashboard extends Component {
    state = { 
        documents : getDocumentsByOrganizationId("54321"),
        documentsStatus : "All",
        currentPage : 1,
        pageSize : 2,
        sorting : { property : "documentName", order : "asc" },
        searchText  : "",
        openApplicantModal: false,
        applicant:{}
    };


    
    handleTabChange = tab =>{
        this.setState({documentsStatus : tab, searchText : ""});
    }

    handlePageChange = page => {
        this.setState({currentPage : page});
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

    getStatusClass(status){
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }
    
    search = searchText => {
        console.log(searchText);
        this.setState({searchText});
    }

    redirectToVerify = document =>{
        const navigate = useNavigate();
        navigate({pathname:'/organization/verify',state:{document}});
    }

    handleOpenApplicantModal = applicantId => this.setState({openApplicantModal:true, applicant: getApplicantById(applicantId)});
    handleCloseApplicantModal = () => this.setState({openApplicantModal:false});

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
                <div style={{margin: 10, backgroundColor: 'white', padding: 30, paddingLeft: 5, paddingRight:5}}>
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <CenteredTabs tabs={["All","Verified","Self-Uploaded"]} handleTabChange={this.handleTabChange} /><br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => this.sort("documentId")} scope="col">documentId {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantId")} scope="col">applicantId{this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantName")} scope="col">applicantName {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantOrganizationNumber")} scope="col">rollNo {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("description")} scope="col">description {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("dateOfAccomplishment")} scope="col">dateOfAccomplishment {this.renderSortIcon("documentName")}</th>

                            <th className="clickable" onClick={() => this.sort("tenure")} scope="col">tenure {this.renderSortIcon("applicantId")}</th>
                            <th className="clickable" onClick={() => this.sort("percentage")} scope="col">percentage {this.renderSortIcon("applicantName")}</th>
                            <th className="clickable" onClick={() => this.sort("updatedBy")} scope="col">updatedBy {this.renderSortIcon("typeOfDocument")}</th>
                            <th className="clickable" onClick={() => this.sort("status")} scope="col">status {this.renderSortIcon("dateOfIssue")}</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>    
                        { paginatedDocuments.map((document,index) => 
                            <tr key={document.documentId}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{document.documentId}</td>
                                <td><span style={{cursor:'pointer'}} onClick={() => this.handleOpenApplicantModal(document.applicantId)}>{document.applicantId}</span></td>
                                <td>{document.applicantName}</td>
                                <td>{document.applicantOrganizationNumber}</td>
                                <td>{document.description}</td>
                                <td>{document.dateOfAccomplishment}</td>
                                
                                <td>{document.tenure}</td>
                                <td>{document.percentage}</td>
                                <td>{document.updatedBy}</td>
                                <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
                                <td>
                                {   
                                    document.status === "Verified" ? <CustomModal modalBody={<PreviewCertificate document={document} />} modalButtonLabel="&nbsp;View&nbsp;"/> :
                                    <Link
                                    to="/organization/verify" state={{document:document}}                         
                                    >
                                    <button className="btn btn-secondary" >Verify</button>
                                    </Link>
                                }
                                </td>
                                
                                
                            </tr>
                        )}
                        </tbody>
                    </table>
                    
                    <Pagination 
                        itemsCount={filteredDocuments.length} 
                        pageSize={this.state.pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>

                    <Modal
                        open={this.state.openApplicantModal}
                        onClose={this.handleCloseApplicantModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <center><h4>Applicant Details</h4></center>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="forms" style={{margin : 0, width:'100%'}}>
                            <form> 
                            <label>Applicant Id</label>{/*autofilled*/}    
                            <input className="form-control" value={this.state.applicant._id} name="applicantId" placeholder="112345" type="number" id="applicantId" required disabled/>
                            <label>Applicant Email</label> 
                            <input className="form-control" value={this.state.applicant.email} name="applicantEmail" placeholder="a@gmail.com" type="email" id="applicantEmail" required />
                            <br />
                            </form>
                        </div>
                        </Typography>
                        </Box>
                    </Modal>
                </div>
            </>
        );
    }
}
 
export default OrganizationDashboard;