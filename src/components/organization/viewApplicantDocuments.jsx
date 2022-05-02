import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import _ from 'lodash';
import CustomModal from '../common/modal';
import PreviewCertificate from '../common/previewCertificate';
import backend from '../../config.json';
const url = String(backend.backend) + "";

// /*import { getOrganizationById } from '../../services/organizationService';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';*/

// import '../../static/css/cardscss.css';

// class ViewApplicantDocuments extends Component {
//     state = {

//         applicantId: '',
//         documents: [ ],
//         sorting: { property: "documentName", order: "asc" },
//         organization: {},
//         applicant: {
//             "applicantId": "1814073",
//             "email": "yash@deorah.com",
//             "password": "Secure@2022",
//             "name": "Yash Deorah",
//             "address": "kalyan",
//             "pin": "421103",
//             "state": "Maharashtra",
//             "country": "India",
//             "contact": "1234567077",
//             "dateOfBirth": "12-11-2000",
//             "documentIds": ["docid1"],
//             "currentOrganization": "org1",
//             "organizationsEnrolledIn": ["org1" , "org2"],
//             "permissionGranted": ["org1" ],
//             "updatedBy": "initLedger"
//         }
//     };


    

//     sort(property) {
//         if (this.state.sorting.property === property) {
//             const order = (this.state.sorting.order === "asc") ? "desc" : "asc";
//             this.setState({ sorting: { property, order } });
//         }
//         else
//             this.setState({ sorting: { property, order: "asc" } });
//     }

//     renderSortIcon(property) {
//         if (property !== this.state.sorting.property) return null;
//         if (this.state.sorting.order === "asc") return <i className="fa fa-sort-asc"></i>;
//         return <i className="fa fa-sort-desc"></i>;
//     }

//     componentDidMount() {
//         console.log(this.props)
//         fetch("http://localhost:4000/getMyDetails", {
//             method: "POST",
//             // body:JSON.stringify({"data":{"applicantId":this.state.applicantId}}),
//             headers: { "Content-Type": "application/json", "x-auth-token": localStorage.getItem("eduCertJwtToken") }
//         })
//             .then(response => response.json())
//             .then((data) => this.setState({ data: data }))

//             fetch("http://localhost:4000/getDocumentsByApplicantId", {
//                 method: "POST",
//                 body: JSON.stringify({ "data": { "applicantId": this.state.applicantId } }),
//                 headers: { "Content-Type": "application/json", "x-auth-token": localStorage.getItem('eduCertJwtToken') }
//             })
//                 .then(response => response.json())
//                 .then((data) => this.setState({ documents: data }))
//     }


//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state.applicantId);
//     };

//     render() {
//         const { documents, sorting } = this.state;
//         const sortedDocuments = _.orderBy(documents, [sorting.property], [sorting.order]);
        
//         return (<>
//             <div style={{ margin: 10, backgroundColor: 'white', padding: 40, paddingLeft: 10, paddingRight: 10 }}>
//                 <br />
//                 <h3>Applicant's Personal Details</h3>
//                 <br></br>
//                 <div className="card">
//                     <div className="container">
//                         <h6><b>Applicant Id:</b> {this.state.applicant.applicantId} </h6>
//                         <h6><b>Name :</b> {this.state.applicant.name}</h6>
//                         <h6><b>Current Organization: </b> {this.state.applicant.currentOrganization}</h6>
//                         <h6><b>Email: </b>{this.state.applicant.email}</h6>
//                         <h6><b>Address: </b> {this.state.applicant.address}</h6>
//                         <h6><b>Pin: </b> {this.state.applicant.pin}</h6>
//                         <h6><b>State: </b> {this.state.applicant.state}</h6>
//                         <h6><b>Country: </b> {this.state.applicant.country}</h6>
//                         <h6><b>Date Of Birth: </b> {this.state.applicant.dateOfBirth}</h6>
                        
//                         <h6><b>Organnizations Enrolled In: </b> {this.state.applicant.organizationsEnrolledIn.map(organization => <span class="badge badge-info" style={{marginRight:5}}>{organization}  </span> )} </h6>
//                     </div>
//                     <div className="container2"><button type="button" class="btn btn-primary">Change Current Organization</button></div>
//                 </div>

//                 <br></br>

//                 <br></br>
//                 <h3>Documents</h3>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th scope="col">No.</th>
//                             <th className="clickable" onClick={() => this.sort("documentId")} scope="col">Document Id {this.renderSortIcon("documentId")}</th>
//                             <th className="clickable" onClick={() => this.sort("documentName")} scope="col">Document Name {this.renderSortIcon("documentName")}</th>
//                             <th className="clickable" onClick={() => this.sort("applicantName")} scope="col">Applicant Name{this.renderSortIcon("applicantName")}</th>
//                             <th className="clickable" onClick={() => this.sort("applicantOrganizationNumber")} scope="col">Roll No {this.renderSortIcon("applicantOrganizationNumber")}</th>
//                             <th className="clickable" onClick={() => this.sort("description")} scope="col">Description {this.renderSortIcon("description")}</th>
//                             <th className="clickable" onClick={() => this.sort("dateOfAccomplishment")} scope="col">Completion Date {this.renderSortIcon("dateOfAccomplishment")}</th>
//                             <th className="clickable" onClick={() => this.sort("tenure")} scope="col">Tenure {this.renderSortIcon("tenure")}</th>
//                             <th className="clickable" onClick={() => this.sort("percentage")} scope="col">Percentage {this.renderSortIcon("percentage")}</th>
//                             <th className="clickable" onClick={() => this.sort("outOfpercentage")} scope="col">Out Of  {this.renderSortIcon("outOfpercentage")}</th>
//                             <th className="clickable" onClick={() => this.sort("updatedBy")} scope="col">Updated By {this.renderSortIcon("updatedBy")}</th>
//                             <th className="clickable" onClick={() => this.sort("status")} scope="col">Status {this.renderSortIcon("status")}</th>
//                             <th scope="col"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {sortedDocuments.map((document, index) =>
//                             <tr key={document.documentId}>
//                                 <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
//                                 <td>{document.documentId}</td>
//                                 <td>{document.documentName}</td>
//                                 <td>{document.applicantName}</td>
//                                 <td>{document.applicantOrganizationNumber}</td>
//                                 <td>{document.description}</td>
//                                 <td>{document.dateOfAccomplishment}</td>
//                                 <td>{document.tenure}</td>
//                                 <td>{document.percentage}</td>
//                                 <td>{document.outOfPercentage}</td>
//                                 <td>{document.updatedBy}</td>
//                                 <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
//                                 <td>
//                                     <CustomModal modalBody={<PreviewCertificate document={document} />} modalButtonLabel="View" />
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//         </>

//         );
//     }
// }

// export default ViewApplicantDocuments;

   
export default function ViewApplicantDocuments(){
    let location = useLocation();
    const { applicantId } = location.state;
    const [applicant, setApplicant] = useState({});
    const [documents, setDocuments] = useState([]);
    const [updateError, setError] = useState("");

    const [sorting, setSort] = useState({ property: "documentName", order: "asc" });

    let initializeApplicant = () => {
        fetch(url+"/getPermissionedApplicant", {
            method:"POST",
            body:JSON.stringify({data: applicantId}),
            headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
            })
            .then(response => {
                // console.log(response)
                if(response.ok)
                  return response.json();
                else{
                  return response.text().then(text => { throw new Error(text) })
                }
              })
            .then(data => setApplicant(data))
            .catch(err => {
                setError(err.message);
            })
    }

    let initializeDocuments = () => {
        console.log(applicantId)
        fetch(url+"/getDocumentsByApplicantId", {
        method:"POST",
        body:JSON.stringify({data: applicantId}),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
            // console.log(response)
            if(response.ok)
              return response.json();
            else{
              return response.text().then(text => { throw new Error(text) })
            }
          })
        .then((data) => setDocuments(data))
        .catch(err => {
            setError(err.message);
        })
    }

    useEffect(() => {
        initializeApplicant()
        initializeDocuments()
    }, [])


    let changeCurrentOrganization = () => {
        fetch(url+"/changeCurrentOrganization", {
        method:"POST",
        body:JSON.stringify({data: {applicantId}}),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        // console.log(this.state.data)
        .then(response => {
        // console.log(response)
        if(response.ok)
            return response.json();
        else{
            return response.text().then(text => { throw new Error(text) })
        }
        })
        .then((data) => {
            setError('');
            alert('Current Organization Updated successfully');
            setApplicant(data)
        })
        .catch(err => {
            setError(err.message);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    
        
    }

    let sort = (property)  => {
        if (sorting.property === property) {
            const order = (sorting.order === "asc") ? "desc" : "asc";
            setSort({ property, order });
        }
        else
            setSort({ property , order: "asc" });
    }

    let renderSortIcon = (property) => {
        if (property !== sorting.property) return null;
        if (sorting.order === "asc") return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    let getStatusClass = (status) =>  {
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }

    let viewDocument = docUrl => {
        if(docUrl) window.open(docUrl);
        else alert("Document is either missing or is tampered");
    }

    const sortedDocuments = _.orderBy(documents, [sorting.property], [sorting.order]);
    
    return ( 
        <React.Fragment>
            <div style={{ margin: 10, backgroundColor: 'white', padding: 40, paddingLeft: 10, paddingRight: 10 }}>
            { updateError &&
                            <div class="alert alert-danger" role="alert">
                            <center>{updateError}</center>
            </div>}
                <br />
                <h3>Applicant's Personal Details</h3>
                <br></br>
                <div className="card">
                    <div className="container">
                        <h6><b>Applicant Id:</b> {applicant.applicantId} </h6>
                        <h6><b>Name :</b> {applicant.name}</h6>
                        <h6><b>Current Organization: </b> {applicant.currentOrganization}</h6>
                        <h6><b>Email: </b>{applicant.email}</h6>
                        <h6><b>Address: </b> {applicant.address}</h6>
                        <h6><b>Pin: </b> {applicant.pin}</h6>
                        <h6><b>State: </b> {applicant.state}</h6>
                        <h6><b>Country: </b> {applicant.country}</h6>
                        <h6><b>Date Of Birth: </b> {applicant.dateOfBirth}</h6>
                        
                        <h6><b>Organnizations Enrolled In: </b> {applicant.organizationsEnrolledIn && applicant.organizationsEnrolledIn.map(organization => <span class="badge badge-info" style={{marginRight:5}}>{organization}  </span> )} </h6>
                    </div>
                    <div className="container2"><button type="button" class="btn btn-primary" onClick={changeCurrentOrganization}>Update Current Organization</button></div>
                </div>

                <br></br>

                <br></br>
                <h3>Documents</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => sort("documentId")} scope="col">Document Id {renderSortIcon("documentId")}</th>
                            <th className="clickable" onClick={() => sort("documentName")} scope="col">Document Name {renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => sort("applicantName")} scope="col">Applicant Name{renderSortIcon("applicantName")}</th>
                            <th className="clickable" onClick={() => sort("applicantOrganizationNumber")} scope="col">Roll No {renderSortIcon("applicantOrganizationNumber")}</th>
                            <th className="clickable" onClick={() => sort("description")} scope="col">Description {renderSortIcon("description")}</th>
                            <th className="clickable" onClick={() => sort("dateOfAccomplishment")} scope="col">Completion Date {renderSortIcon("dateOfAccomplishment")}</th>
                            <th className="clickable" onClick={() => sort("tenure")} scope="col">Tenure {renderSortIcon("tenure")}</th>
                            <th className="clickable" onClick={() => sort("percentage")} scope="col">Percentage {renderSortIcon("percentage")}</th>
                            <th className="clickable" onClick={() => sort("outOfpercentage")} scope="col">Out Of  {renderSortIcon("outOfpercentage")}</th>
                            <th className="clickable" onClick={() => sort("updatedBy")} scope="col">Updated By {renderSortIcon("updatedBy")}</th>
                            <th className="clickable" onClick={() => sort("status")} scope="col">Status {renderSortIcon("status")}</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedDocuments.map((document, index) =>
                            <tr key={document.documentId}>
                                <th scope="row">{index + 1}</th>
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
                                <td><span className={getStatusClass(document.status)}>{document.status}</span></td>
                                <td>
                                    {/* <button className="btn btn-secondary" onClick={() => viewDocument(document.documentUrl)} >View</button> */}
                                    <Link to="/viewDocument" state={{documentUrl:document.documentUrl}}>
                                        <button className="btn btn-secondary" >View</button> 
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </React.Fragment>
     );
}