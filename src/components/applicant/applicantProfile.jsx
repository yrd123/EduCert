import React, { Component } from 'react';
import { getApplicantById } from '../../services/applicantService';
import '../login.css'
import { NavLink } from 'react-router-dom';

class ApplicantProfile extends Component {
    state = {
        applicant : {},
        applicant : [] ,
    };


    componentDidMount() {

        fetch("http://localhost:4000/getMyDetails", {
        method:"POST",
        // body:JSON.stringify({"data":{"applicantId":this.state.applicantId}}),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        .then((data) => this.setState({applicant:data}))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data) ;

        fetch("http://localhost:4000/updatApplicantPersonalDetails", {
        method:"POST",
        body:JSON.stringify({"data": this.state.data }),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}})
        .then(response => response.json())
        
    };
    
    render() {
        const { applicant } = this.state;
        return (
            <React.Fragment>
                <div className="forms">
                    <form onSubmit = {this.handleSubmit} >
                    <center><h4> Profile </h4></center><br/>
                    <div className="input-field">
                        <label htmlFor="id">Id</label>
                        <input type="id" name="id" value={applicant.applicantId} disabled/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={applicant.email}/>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" value={applicant.name}/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={applicant.address}/>
                        <label htmlFor="pincode">Pin/Zip Code</label>
                        <input type="text" name="pincode" value={applicant.pin}/>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" value={applicant.state}/>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={applicant.country}/>
                        <label htmlFor="contact">Mobile Number</label>
                        <input type="text" name="contact" value={applicant.contact}/>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="text" name="dob" value={applicant.dateOfBirth} disabled/>

                        <input type="submit" value="UPDATE" className="button" />
              
                    </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantProfile;