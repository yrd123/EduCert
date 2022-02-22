import React, { Component } from 'react';
import { getDocumentsByApplicantId } from '../services/documentService';
import Navbar from './navbar';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class ApplicantDashboard extends Component {
    state = { 
        documents : getDocumentsByApplicantId("applicantid1"),
        currentPage : 1,
        pageSize : 2
    };

    getStatusClass(status){
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }

    handlePageChange = page => {
        this.setState({currentPage : page});
    }

    render() { 

        const {currentPage, pageSize, documents} = this.state;
        const filteredDocuments = paginate(documents, currentPage, pageSize);
        return (<>
            <Navbar/>
            <div style={{margin:10, backgroundColor: 'white', padding: 10}}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Document Name</th>
                    <th scope="col">Issued by</th>
                    <th scope="col">Date of Issue</th>
                    <th scope="col">Type of Document</th>
                    <th scope="col">Status</th>
                    <th scope="col">Preview</th>
                </tr>
                </thead>
                <tbody>
                { filteredDocuments.map(document => 
                    <tr key={document._id}>
                        <th scope="row">1</th>
                        <td>{document.documentName}</td>
                        <td>{document.organizationName}</td>
                        <td>{document.dateOfIssue}</td>
                        <td>{document.typeOfCertificate}</td>
                        <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
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
                itemsCount={this.state.documents.length} 
                pageSize={pageSize} 
                currentPage={currentPage}
                onPageChange={this.handlePageChange}/>
        </>

        );
    }
}
 
export default ApplicantDashboard;