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
        headers:{"Content-Type" : "application/json","x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkcmV2YW50ZW0xIiwib3JnYW5pemF0aW9uIjoiT3JnMU1TUCIsInJvbGUiOiJhcHBsaWNhbnQiLCJpYXQiOjE2NTAyOTM4MjJ9.S4wiaq_eg_ji3YRoj9ParN6TOspvSLgIWEzHvV-Ji-c"}
        })
        .then(response => response.json())
        .then((data) => this.setState({applicant:data}))
    }
    
    render() {
        const { applicant } = this.state;
        return (
            <React.Fragment>
                <div className="forms">
                    <form>
                    <center><h4> Profile </h4></center><br/>
                    <div className="input-field">
                        <label htmlFor="id">Id</label>
                        <input type="id" name="id" value={applicant.applicantId} disabled/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={applicant.email} disabled/>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" value={applicant.name} disabled/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={applicant.address} disabled/>
                        <label htmlFor="pincode">Pin/Zip Code</label>
                        <input type="text" name="pincode" value={applicant.pin} disabled/>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" value={applicant.state} disabled/>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={applicant.country} disabled/>
                        <label htmlFor="contact">Mobile Number</label>
                        <input type="text" name="contact" value={applicant.contact} disabled/>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="text" name="dob" value={applicant.dateOfBirth} disabled/>

                        <NavLink className="nav-link" to="/applicant/profileUpdate">
                        <input type="submit" value="UPDATE" className="button" /></NavLink>
              
                    </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantProfile;