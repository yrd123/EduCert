import React, { Component } from 'react';
import { getApplicantById } from '../../services/applicantService';
import '../login.css'
import { NavLink } from 'react-router-dom';
import backend from '../../config.json';
const url = String(backend.backend) + "";

class ViewApplicantProfile extends Component {
    state = {
        applicant : getApplicantById("11111") ,
        applicantId : ''  , 
        organizationId : '' ,
    };

    
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.applicantId);

    fetch(url+"/changeCurrentOrganization", {
        method:"POST",
        body:JSON.stringify({"data":{"applicantId":this.state.applicantId , "organizationId" : this.state.organizationId } }),
        headers:{"Content-Type" : "application/json","x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ5YXJ3aXR6Iiwib3JnYW5pemF0aW9uIjoiT3JnMU1TUCIsInJvbGUiOiJ2aWNlQWRtaW4iLCJpYXQiOjE2NTAzMDkwMjB9.0M-GGJicvYNRt4JRYtzVjayIXosWkwq4D2nrySStRac"}
    })
    .then(response => response.json())
    .then((data) => this.setState({documents:data}))

  }; 

    render() {
        const { applicant } = this.state;
        return (
            <React.Fragment>
                <div className="forms">
                    <form>
                    <center><h4> Profile </h4></center><br/>
                    <div className="input-field">
                        <label htmlFor="id">Id</label>
                        <input type="id" name="id" value={applicant._id} disabled/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={applicant.email} />
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" value={applicant.name} disabled/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={""} />
                        <label htmlFor="pincode">Pin/Zip Code</label>
                        <input type="text" name="pincode" value={""} />
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" value={""} />
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={""} />
                        <label htmlFor="contactNumber">Mobile Number</label>
                        <input type="number" name="contactNumber" value={""} />
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" value={""} />
                        <label htmlFor="dob">Current Organization</label>
                        <input type="text" name="currentOrganization" value={""} />


                        <input type="submit" value="CHANGE CURRENT ORGANIZATION" className="button" />
              
                    </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ViewApplicantProfile;