// import React, { Component } from 'react';

// class VerifyDocument extends Component {
//     state = {  } 
//     render() { 



//         return (
//             <>
//             hello
//             </>
//         );
//     }
// }

// export default VerifyDocument;

import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import CustomModal from '../common/modal';
import { Link } from 'react-router-dom';

import PreviewCertificate from '../common/previewCertificate';
import backend from '../../config.json';
const url = String(backend.backend) + "";



export default function VerifyDocument() {
  let location = useLocation();
  const { document } = location.state;
  const [verifyError, setError] = useState("");

  console.log(document);

  let handleSubmit = (e) => {
    e.preventDefault();

    console.log(document);
    fetch(url+"/verifyDocument", {
      method: "POST",
      body: JSON.stringify({ "data": { "documentId": document.documentId } }),
      headers: { "Content-Type": "application/json", "x-auth-token": localStorage.getItem("eduCertJwtToken") }
    })
    .then(response => {
      // console.log(response)
      if(response.ok)
          return response.text();
      else{
          return response.text().then(text => { throw new Error(text) })
      }
      })
      .then((data) => {
          alert(data);
          window.location = '/organization/dashboard'
      })
      .catch(err => {
          setError(err.message);
          window.scrollTo({ top: 0, behavior: 'smooth' });
      })

  }

  return (
    <React.Fragment>
      <div className="forms">
        <br />


        <form onSubmit={handleSubmit}>
                  { verifyError &&
                            <div class="alert alert-danger" role="alert">
                            <center>{verifyError}</center>
                        </div>}
          <label>Organization Id</label>
          <div className='row'>
            <div className="col-12">
              <input className="form-control" value={document.organizationId} name="organizationId" id="organizationId" placeholder="Org1MSP" disabled />
            </div>
          </div>

          <br /><center><h4> Applicant Details </h4></center><br />

          <label>Applicant Id</label>
          <div className='row'>
            <div className="col-12">
              <input className="form-control" value={document.applicantId} name="applicantId" id="applicantId" placeholder="1814078" disabled />
            </div>


          </div>

          <label>Applicant Name</label>
          <input className="form-control" value={document.applicantName} name="applicantName" type="text" id="applicantName" disabled />

          <label>Applicant Organization Identification Number</label>
          <input className="form-control" value={document.applicantOrganizationNumber} name="applicantOrganizationNumber" placeholder={"Roll No, Seat No, etc"} type="text" id="applicantOrganizationNumber" disabled />

          <br /><center><h4> Document Details </h4></center><br />

          <label>Document Name</label>
          <input className="form-control" value={document.documentName} name="documentName" type="text" placeholder="Marksheet" id="documentName" disabled />

          <label>Document Description</label>
          <input className="form-control" value={document.description} name="description" type="Text Area" placeholder="Has secured rank1 in 10th std" id="desc" disabled />

          <label>Date Of Accomplishment(End Date)</label>
          <input className="form-control" value={document.dateOfAccomplishment} name="dateOfAccomplishment" id="dateOfAccomplishment" disabled />

          <label>Tenure(In years)</label>
          <input className="form-control" value={document.tenure} name="tenure" type="number" placeholder="2" id="tenure" disabled />

          <label>Percentage/GPA</label>
          <input className="form-control" value={document.percentage} name="percentage" type="number" placeholder="90/3.8" id="percentage" />

          <label>Out of Percentage/GPA</label>
          <input className="form-control" value={document.outOfPercentage} name="outOfPercentage" type="number" placeholder="100/4" id="outOfPercentage" />

	<center>
	<Link to="/viewDocument" state={{documentUrl:document.documentUrl}}>
            <input className="button" type="button" value="view" />
        </Link>
	</center>
          
          <center>
            <input type="submit" className="button" value="Verify" />
          </center>
          <br />

        </form>
      </div>
    </React.Fragment>

  );
}
