import React, { Component } from 'react';
//import { getDocumentsByApplicantId } from '../services/documentService';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import CustomModal from '../common/modal';
import PreviewCertificate from '../common/previewCertificate';

/*import { getOrganizationById } from '../../services/organizationService';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';*/
import '../cardscss.css';

class ViewApplicantDocuments extends Component {
    state = {

        applicantId: '',
        documents: [],
        documentsStatus: "All",
        currentPage: 1,
        pageSize: 2,
        sorting: { property: "documentName", order: "asc" },
        searchText: "",
        organization: {},
        data: {
            "applicantId": "1814073",
            "email": "yash@deorah.com",
            "password": "Secure@2022",
            "name": "Yash Deorah",
            "address": "kalyan",
            "pin": "421103",
            "state": "Maharashtra",
            "country": "India",
            "contact": "1234567077",
            "dateOfBirth": "12-11-2000",
            "documentIds": ["docid1"],
            "currentOrganization": "org1",
            "organizationsEnrolledIn": ["org1" , "org2"],
            "permissionGranted": ["org1" ],
            "updatedBy": "initLedger"
        }
    };

    getStatusClass(status) {
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

   
    sort(property) {
        if (this.state.sorting.property === property) {
            const order = (this.state.sorting.order === "asc") ? "desc" : "asc";
            this.setState({ sorting: { property, order } });
        }
        else
            this.setState({ sorting: { property, order: "asc" } });
    }

    renderSortIcon(property) {
        if (property !== this.state.sorting.property) return null;
        if (this.state.sorting.order === "asc") return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    search = searchText => {
        console.log(searchText);
        this.setState({ searchText });
    }


    handleChange = (e) => {
        let applicantId = this.state.applicantId;
        applicantId = e.currentTarget.value;
        this.setState({ applicantId });
        console.log(applicantId);
    };


    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.applicantId);

        fetch("http://localhost:4000/getDocumentsByApplicantId", {
            method: "POST",
            body: JSON.stringify({ "data": { "applicantId": this.state.applicantId } }),
            headers: { "Content-Type": "application/json", "x-auth-token": localStorage.getItem('eduCertJwtToken') }
        })
            .then(response => response.json())
            .then((data) => this.setState({ documents: data }))

    };

    render() {
        const { currentPage, documentsStatus, pageSize, documents, sorting, searchText } = this.state;
        let filteredDocuments = documents;
        filteredDocuments = filteredDocuments.filter(document => {
            for(let property in document){
                if(document[property].includes(searchText)) return true;
            }
            return false;
        })
        const sortedDocuments = _.orderBy(filteredDocuments, [sorting.property], [sorting.order]);
        const paginatedDocuments = paginate(sortedDocuments, currentPage, pageSize);

        return (<>
            <div style={{ margin: 10, backgroundColor: 'white', padding: 40, paddingLeft: 10, paddingRight: 10 }}>
                {/* <SearchBar search={this.search} searchInput={searchText} /> */}
                <br />



                <h3>Applicant's Personal Details</h3>

                <br></br>

                <div className="card">
                    <div className="container">
                        <h6><b>Applicant Id:</b> {this.state.data.applicantId} </h6>
                        <h6><b>Name :</b> {this.state.data.name}</h6>
                        <h6><b>Current Organization: </b> {this.state.data.currentOrganization}</h6>
                        <h6><b>Email: </b>{this.state.data.email}</h6>
                        <h6><b>Address: </b> {this.state.data.address}</h6>
                        <h6><b>Pin: </b> {this.state.data.pin}</h6>
                        <h6><b>State: </b> {this.state.data.state}</h6>
                        <h6><b>Country: </b> {this.state.data.country}</h6>
                        <h6><b>Date Of Birth: </b> {this.state.data.dateOfBirth}</h6>
                        
                        <h6><b>Organnizations Enrolled In: </b> {this.state.data.organizationsEnrolledIn.map(organization => <span class="badge badge-info">{organization}</span>)}</h6>
                    </div>
                    <div className="container2"><button type="button" class="btn btn-primary">Change Current Organization</button></div>
                </div>

                <br></br>

                <br></br>
                <h3>Document's Details</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => this.sort("documentId")} scope="col">Document Id {this.renderSortIcon("documentId")}</th>
                            <th className="clickable" onClick={() => this.sort("documentName")} scope="col">Document Name {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantName")} scope="col">Applicant Name{this.renderSortIcon("applicantName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantOrganizationNumber")} scope="col">Roll No {this.renderSortIcon("applicantOrganizationNumber")}</th>
                            <th className="clickable" onClick={() => this.sort("description")} scope="col">Description {this.renderSortIcon("description")}</th>
                            <th className="clickable" onClick={() => this.sort("dateOfAccomplishment")} scope="col">Completion Date {this.renderSortIcon("dateOfAccomplishment")}</th>
                            <th className="clickable" onClick={() => this.sort("tenure")} scope="col">Tenure {this.renderSortIcon("tenure")}</th>
                            <th className="clickable" onClick={() => this.sort("percentage")} scope="col">Percentage {this.renderSortIcon("percentage")}</th>
                            <th className="clickable" onClick={() => this.sort("outOfpercentage")} scope="col">Out Of  {this.renderSortIcon("outOfpercentage")}</th>
                            <th className="clickable" onClick={() => this.sort("updatedBy")} scope="col">Updated By {this.renderSortIcon("updatedBy")}</th>
                            <th className="clickable" onClick={() => this.sort("status")} scope="col">Status {this.renderSortIcon("status")}</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedDocuments.map((document, index) =>
                            <tr key={document.documentId}>
                                <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                <td>{document.documentId}</td>
                                <td>{document.documentName}</td>
                                <td>{document.applicantName}</td>
                                <td>{document.applicantOrganizationNumber}</td>
                                <td>{document.description}</td>
                                <td>{document.dateOfAccomplishment}</td>
                                <td>{document.tenure}</td>
                                <td>{document.percentage}</td>
                                <td>{document.outOfPercentage}</td>
                                <td>{document.updatedBy}</td>
                                <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
                                <td>
                                    <CustomModal modalBody={<PreviewCertificate document={document} />} modalButtonLabel="View" />
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

export default ViewApplicantDocuments;