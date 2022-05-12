import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import CustomModal from '../common/modal';
import CenteredTabs from '../common/tabs';
import SearchBar from '../common/searchBar';
import PreviewCertificate from '../common/previewCertificate';
//import { getOrganizationById } from '../services/organizationService';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import backend from '../../config.json';
import { Link } from 'react-router-dom';
const url = String(backend.backend) + "";


class ApplicantDashboard extends Component {
    state = { 
        documents : [],
        documentsStatus : "All",
        currentPage : 1,
        pageSize : 5,
        sorting : { property : "documentName", order : "asc" },
        searchText  : "",
        //openOrganizationModal: false,
        organization:{},
        fetchError:""
    };

    componentDidMount() {
        fetch(url+"/getMydocuments", {
        method:"POST",
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
            if(response.ok)
                return response.json();
            else{
                return response.text().then(text => { throw new Error(text) })
            }
        })
        .then((data) => this.setState({documents:data, fetchError:''}))
        .catch(err => {
            this.setState({fetchError:err.message})
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }
    
    handleTabChange = tab =>{
        this.setState({documentsStatus : tab, searchText : ""});
    }

    getStatusClass(status){
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }

    handlePageChange = page => {
        this.setState({currentPage : page});
    }

    // handleClose = () => this.setState({show:true});
    // handleShow = () => this.setState({show:false});

    sort(property){
        if(this.state.sorting.property === property){
            const order = (this.state.sorting.order === "asc") ? "desc" : "asc";
            this.setState({sorting : { property , order}});
        }
        else
            this.setState({sorting : { property , order : "asc"}});
    }

    renderSortIcon(property) {
        if(property !== this.state.sorting.property) return null;
        if(this.state.sorting.order === "asc") return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    search = searchText => {
        console.log(searchText);
        this.setState({searchText});
    }

    viewDocument = docUrl => {
        if(docUrl) window.open(docUrl);
        else alert("Document is either missing or is tampered");
    }
    // handleOpenOrganizationModal = organizationId => this.setState({openOrganizationModal:true, organization: getOrganizationById(organizationId)});
    // handleCloseOrganizationModal = () => this.setState({openOrganizationModal:false});
    
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
        })
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
        
        return (<>

            <div style={{margin:10, backgroundColor: 'white', padding: 40, paddingLeft: 10, paddingRight:10}}>
            { this.state.fetchError && <div class="alert alert-danger" role="alert">
                  <center>{this.state.fetchError}</center>
            </div>}
            <SearchBar search={this.search} searchInput={searchText} />
            <br />
            <CenteredTabs tabs={["All","Verified","Self-Uploaded"]} handleTabChange={this.handleTabChange} /><br />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th className="clickable" onClick={() => this.sort("documentId")} scope="col">Document Id {this.renderSortIcon("documentName")}</th>
                    <th className="clickable" onClick={() => this.sort("organizationId")} scope="col">Organization Id{this.renderSortIcon("documentName")}</th>
                    <th className="clickable" onClick={() => this.sort("applicantOrganizationNumber")} scope="col">Roll No {this.renderSortIcon("documentName")}</th>
                    <th className="clickable" onClick={() => this.sort("description")} scope="col">Description {this.renderSortIcon("documentName")}</th>
                    <th className="clickable" onClick={() => this.sort("dateOfAccomplishment")} scope="col">Completion Date {this.renderSortIcon("documentName")}</th>
                    <th className="clickable" onClick={() => this.sort("tenure")} scope="col">Tenure {this.renderSortIcon("applicantId")}</th>
                    <th className="clickable" onClick={() => this.sort("percentage")} scope="col">Percentage {this.renderSortIcon("applicantName")}</th>
                    <th className="clickable" onClick={() => this.sort("percentage")} scope="col">Out Of  {this.renderSortIcon("applicantName")}</th>
                    <th className="clickable" onClick={() => this.sort("updatedBy")} scope="col">Updated By {this.renderSortIcon("typeOfDocument")}</th>
                    <th className="clickable" onClick={() => this.sort("status")} scope="col">Status {this.renderSortIcon("dateOfIssue")}</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>    
                    { paginatedDocuments.map((document,index) => 
                    <tr key={document.documentId}>
                    <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                    <td>{document.documentId}</td>
                    <td><span style={{cursor:'pointer'}} onClick={() => this.handleOpenApplicantModal(document.organizationId)}>{document.applicantId}</span></td>
                    <td>{document.applicantOrganizationNumber}</td>
                    <td>{document.description}</td>
                    <td>{document.dateOfAccomplishment}</td>
                    <td>{document.tenure}</td>
                    <td>{document.percentage}</td>
                    <td>{document.outOfPercentage}</td>
                    <td>{document.updatedBy}</td>
                    <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>                                      
                    <td>
                        {/* <button className="btn btn-secondary" onClick={() => this.viewDocument(document.documentUrl)} >View</button>  */}
                        <Link to="/viewDocument" state={{documentUrl:document.documentUrl}}>
                            <button className="btn btn-secondary" >View</button> 
                        </Link>
                    </td>                    
                </tr>
                )}
                
                </tbody>
            </table>

           
            <Pagination 
                itemsCount={filteredDocuments.length} 
                pageSize={pageSize} 
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
            />   

            <Modal
                open={this.state.openOrganizationModal}
                onClose={this.handleCloseOrganizationModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <center><h4>Organization Details</h4></center>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="forms" style={{margin : 0, width:'100%'}}>
                    <form> 
                    <label>Organization Id</label>{/*autofilled*/}    
                    <input className="form-control" value={this.state.organization._id} name="organizationId" placeholder="112345" type="number" id="organizationId" required disabled/>
                    <label>Organization Email</label> 
                    <input className="form-control" value={this.state.organization.email} name="organizationEmail" placeholder="a@gmail.com" type="email" id="organizationEmail" required />
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
 
export default ApplicantDashboard;
