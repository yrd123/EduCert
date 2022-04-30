import React, { Component } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './login.css'
import { getOrganizationById } from '../services/organizationService';
import backend from '../../config.json';
const url = String(backend.backend) + "";



class ApplicantUploadDocument extends Component {
  state = {
       
    data :{ documentId:'', applicantId :'' , applicantName : '' , applicantOrganizationNumber :'' , organizationId : '', documentName : '', description : '', dateOfAccomplishment: '' , tenure :'' , percentage :'' , outOfPercentage : '' , documentUrl :''  } 
  
};

handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });

};

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data) ;

    fetch(url+"/createSelfUploadedDocument", {
    method:"POST",
    body:JSON.stringify({"data": this.state.data }),
    headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}})
    .then(response => response.json())
    
};

render() {
  
    return (
        <React.Fragment>
            <div className="forms">
            <br/><center><h4>  Details </h4></center><br/>

    
<form onSubmit={this.handleSubmit}>
<label>Document Id</label>
<input className="form-control"  name="documentId" id = "documentId" onChange={this.handleChange} value = {this.state.data.documentId} type="text" placeholder="123" required />


<label>Applicant Id</label>
<input className="form-control"  name="applicantId" id = "applicantId" onChange={this.handleChange} value = {this.state.data.applicantId} type="text" placeholder="1814078" required />


<label>Applicant Name</label>
<input className="form-control"  name="applicantName" id = "applicantName" onChange={this.handleChange} value = {this.state.data.applicantName} type="text" placeholder="Sanyam" required />
    

<label>Applicant Organization Number</label>
<input className="form-control"  name="applicantOrganizationNumber" id = "applicantOrganizationNumber" onChange={this.handleChange} value = {this.state.data.applicantOrganizationNumber} type="text" placeholder="6qaz" required />
     
<label>OrganizationId</label>
<input className="form-control"  name="organizationId" id = "organizationId" onChange={this.handleChange} value = {this.state.data.organizationId} type="text" placeholder="org1" required />

<label>Document Name</label>
<input className="form-control"  name="documentName" id = "documentName" onChange={this.handleChange} value = {this.state.data.documentName} type="text" placeholder="org1" required />
   

<label>Document Description</label>
<input className="form-control"  name="description" id = "description" onChange={this.handleChange} value = {this.state.data.description} type="text" placeholder="Marksheet of 10th std" required />
  
<label>Date Of Accomplishment(End Date)</label>
<input className="form-control"  name="dateOfAccomplishment" id = "dateOfAccomplishment" onChange={this.handleChange} value = {this.state.data.dateOfAccomplishment} type="text" placeholder="Marksheet of 10th std" required />

<label>Tenure(In years)</label>
<input className="form-control"  name="tenure" id = "tenure" onChange={this.handleChange} value = {this.state.data.tenure} type="text" placeholder="2 Year"  />
                    
<label>Percentage/GPA</label>
<input className="form-control"  name="percentage" id = "percentage" onChange={this.handleChange} value = {this.state.data.percentage} type="text" placeholder="69"  />

<label>Out of Percentage/GPA</label>
<input className="form-control"  name="outOfPercentage" id = "outOfPercentage" onChange={this.handleChange} value = {this.state.data.outOfPercentage} type="text" placeholder="100"  />

<label>Document URL</label>
<input className="form-control"  name="documentUrl" id = "documentUrl" onChange={this.handleChange} value = {this.state.data.documentUrl} type="text" placeholder="100"  />

<center>
<input type="submit" className="button" value="Submit" />
</center>
</form>
                
            </div>
        </React.Fragment>
    );
}
}

export default ApplicantUploadDocument;