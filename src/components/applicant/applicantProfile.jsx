import React, { Component } from 'react';
import { getApplicantById } from '../../services/applicantService';
import '../login.css'
import { NavLink } from 'react-router-dom';

class ApplicantProfile extends Component {
    state = {
        applicant : getApplicantById("11111") ,
        document : [] ,
    };


    componentDidMount() {

        fetch("http://localhost:4000/getApplicant/:applicantId/search", {
        body:JSON.stringify({"data":{"applicantId":this.state.applicantId}}),
        headers:{"Content-Type" : "application/json","x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ5YXJ3aXR6Iiwib3JnYW5pemF0aW9uIjoiT3JnMU1TUCIsInJvbGUiOiJ2aWNlQWRtaW4iLCJpYXQiOjE2NTAzMDkwMjB9.0M-GGJicvYNRt4JRYtzVjayIXosWkwq4D2nrySStRac"}
        })
        .then(response => response.json())
        .then((data) => this.setState({documents:data}))
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
                        <input type="id" name="id" value={document._id} disabled/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={document.email} disabled/>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" value={document.name} disabled/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={document.address} disabled/>
                        <label htmlFor="pincode">Pin/Zip Code</label>
                        <input type="text" name="pincode" value={document.pin} disabled/>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" value={document.state} disabled/>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={document.country} disabled/>
                        <label htmlFor="contactNumber">Mobile Number</label>
                        <input type="number" name="contactNumber" value={document.contactNumber} disabled/>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" value={document.dateOfBirth} disabled/>

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