import React, { Component } from 'react';
import { getDocumentsByApplicantId } from '../services/documentService';
import Navbar from './navbar';
import Pagination from './common/pagination';

class ApplicantDashboard extends Component {
    state = { 
        documents : getDocumentsByApplicantId("applicantid1"),
        pageSize : 2
    };

    getStatusClass(status){
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }

    handlePageChange = page => {
        console.log(page);
    }

    render() { 

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
                { this.state.documents.map(document => 
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
                <tr>
                    <th scope="row">1</th>
                    <td>Complete Web Developer</td>
                    <td>Udemy</td>
                    <td>23/11/2021</td>
                    <td>MOOC Certificate</td>
                    <td><p className = "badge badge-success">Verified</p></td>
                    <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                        Preview
                    </button></td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>U&I Volunteering 2021</td>
                    <td>U&I</td>
                    <td>18/09/2021</td>
                    <td>Professional Certificate</td>
                    <td><p className = "badge badge-success">Verified</p></td>
                    <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                        Preview
                    </button></td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>KJSCE Transcripts - 3rd year</td>
                    <td>K.J. Somaiya College of Engineering</td>
                    <td>02/08/2021</td>
                    <td>Transcripts</td>
                    <td><p className = "badge badge-secondary">Self-uploaded</p></td>
                    <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                        Preview
                    </button></td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>Deep Learning A-Z</td>
                    <td>Udemy</td>
                    <td>08/02/2021</td>
                    <td>MOOC Certificate</td>
                    <td><p className = "badge badge-success">Verified</p></td>
                    <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                        Preview
                    </button></td>
                </tr>

                <tr>
                    <th scope="row">5</th>
                    <td>IBM Data Scientist</td>
                    <td>IBM@Coursera</td>
                    <td>11/12/2020</td>
                    <td>Professional Certificate</td>
                    <td><p className = "badge badge-success">Verified</p></td>
                    <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                        Preview
                    </button></td>
                </tr>

                </tbody>
            </table>
            </div>
            <Pagination itemsCount={this.state.documents.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
        </>

        );
    }
}
 
export default ApplicantDashboard;