import React, { Component } from 'react';
import Navbar from './navbar';
import { getDocumentsByOrganizationId } from '../services/documentService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class OrganizationDashboard extends Component {
    state = { 
        documents : getDocumentsByOrganizationId("orgid1"),
        currentPage : 1,
        pageSize : 1
    };

    handlePageChange = page => {
        this.setState({currentPage : page});
    }

    render() { 
        const {currentPage, pageSize, documents} = this.state;
        const filteredDocuments = paginate(documents, currentPage, pageSize);
        return (
            <>
                
                <Navbar/>
                <div style={{margin: 10, backgroundColor: 'white', padding: 10}}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Document Name</th>
                            <th scope="col">Applicant Id</th>
                            <th scope="col">Applicant Name</th>
                            <th scope="col">Date of Issue</th>
                            <th scope="col">Type of Document</th>
                            <th scope="col">Preview</th>
                        </tr>
                        </thead>
                        <tbody>    
                        { filteredDocuments.map(document => 
                            <tr key={document._id}>
                                <th scope="row">1</th>
                                <td>{document.documentName}</td>
                                <td>{document.applicantId}</td>
                                <td>{document.applicantName}</td>
                                <td>{document.dateOfIssue}</td>
                                <td>{document.typeOfCertificate}</td>
                                <td>
                                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                    Preview
                                    </button>
                                </td>
                            </tr>
                        )}
                                                    
                        </tbody>
                    </table>
                </div>
                <Pagination 
                    itemsCount={documents.length} 
                    pageSize={pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}/>
            </>
        );
    }
}
 
export default OrganizationDashboard;