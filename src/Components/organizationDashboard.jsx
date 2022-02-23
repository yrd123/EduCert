import React, { Component } from 'react';
import Navbar from './navbar';
import { getDocumentsByOrganizationId } from '../services/documentService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import CustomModal from './common/modal';
import CenteredTabs from './common/tabs';

class OrganizationDashboard extends Component {
    state = { 
        documents : getDocumentsByOrganizationId("orgid1"),
        documentsStatus : "All",
        currentPage : 1,
        pageSize : 1,
        sorting : { property : "documentName", order : "asc" }
    };

    
    handleTabChange = tab =>{
        this.setState({documentsStatus : tab});
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
    

    render() { 
        const {currentPage, documentsStatus, pageSize, documents, sorting} = this.state;
        let filteredDocuments = documents;
        if(documentsStatus !== "All")
            filteredDocuments = documents.filter(document => document.status === documentsStatus);
        const sortedDocuments = _.orderBy(filteredDocuments,[sorting.property],[sorting.order]);
        const paginatedDocuments = paginate(sortedDocuments, currentPage, pageSize);
        
        return (
            <>
                <Navbar/>
                <div style={{margin: 10, backgroundColor: 'white', padding: 10}}>
                    <CenteredTabs tabs={["All","Verified","Self-Uploaded"]} handleTabChange={this.handleTabChange} /><br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => this.sort("documentName")} scope="col">Document Name {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantId")} scope="col">Applicant Id {this.renderSortIcon("applicantId")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantName")} scope="col">Applicant Name {this.renderSortIcon("applicantName")}</th>
                            <th className="clickable" onClick={() => this.sort("dateOfIssue")} scope="col">Date of Issue {this.renderSortIcon("dateOfIssue")}</th>
                            <th className="clickable" onClick={() => this.sort("typeOfDocument")} scope="col">Type of Document {this.renderSortIcon("typeOfDocument")}</th>
                            <th className="clickable" onClick={() => this.sort("status")} scope="col">Status {this.renderSortIcon("status")}</th>

                            <th scope="col">Preview</th>
                        </tr>
                        </thead>
                        <tbody>    
                        { paginatedDocuments.map((document,index) => 
                            <tr key={document._id}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{document.documentName}</td>
                                <td>{document.applicantId}</td>
                                <td>{document.applicantName}</td>
                                <td>{document.dateOfIssue}</td>
                                <td>{document.typeOfDocument}</td>
                                <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
                                <td>
                                    <CustomModal modalBody={document} /> 
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <Pagination 
                    itemsCount={filteredDocuments.length} 
                    pageSize={this.state.pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}/>
            </>
        );
    }
}
 
export default OrganizationDashboard;