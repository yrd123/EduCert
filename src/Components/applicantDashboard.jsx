import React, { Component } from 'react';
import { getDocumentsByApplicantId } from '../services/documentService';
import Navbar from './navbar';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import CustomModal from './common/modal';
import CenteredTabs from './common/tabs';
import SearchBar from './common/searchBar';
import PreviewCertificate from './common/previewCertificate';

class ApplicantDashboard extends Component {
    state = { 
        documents : getDocumentsByApplicantId("applicantid1"),
        documentsStatus : "All",
        currentPage : 1,
        pageSize : 2,
        sorting : { property : "documentName", order : "asc" },
        searchText  : ""
    };
    
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
        
        return (<>
            <Navbar/>
            <div style={{margin:10, backgroundColor: 'white', padding: 10}}>
            <SearchBar search={this.search} searchInput={searchText} />
            <br />
            <CenteredTabs tabs={["All","Verified","Self-Uploaded"]} handleTabChange={this.handleTabChange} /><br />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th className="clickable" onClick={() => this.sort("documentName")}  scope="col">Document Name {this.renderSortIcon("documentName")}</th>
                    <th className="clickable" onClick={() => this.sort("organizationName")}  scope="col">Issued by {this.renderSortIcon("organizationName")}</th>
                    <th className="clickable" onClick={() => this.sort("dateOfIssue")}  scope="col">Date of Issue {this.renderSortIcon("dateOfIssue")}</th>
                    <th className="clickable" onClick={() => this.sort("typeOfDocument")}  scope="col">Type of Document {this.renderSortIcon("typeOfDocument")}</th>
                    <th  className="clickable" onClick={() => this.sort("status")} scope="col">Status {this.renderSortIcon("status")}</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                { paginatedDocuments.map((document,index) => 
                    <tr key={document._id}>
                        <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                        <td>{document.documentName}</td>
                        <td>{document.organizationName}</td>
                        <td>{document.dateOfIssue}</td>
                        <td>{document.typeOfDocument}</td>
                        <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
                        <td>
                            <CustomModal modalBody={<PreviewCertificate document={document} />} modalButtonLabel="View"/> 
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
            </div>
                     
        </>

        );
    }
}
 
export default ApplicantDashboard;