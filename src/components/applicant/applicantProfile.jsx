import React, { Component } from 'react';
import { getApplicantById } from '../../services/applicantService';
import '../login.css'
import { NavLink } from 'react-router-dom';

class ApplicantProfile extends Component {
    state = {
        applicant : {},
        data :{ applicantId:'', email:'', password :'' , name : '' , pin :'' , state : '', country : '', contact : '' , dtaeOfBirth :'' } 
  
    }; 

    
    handleChange = (e) => {
        const data = { ...this.state.data };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data });

    };


    componentDidMount() {

        fetch("http://localhost:4000/getMyDetails", {
        method:"POST",
        // body:JSON.stringify({"data":{"applicantId":this.state.applicantId}}),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        .then((data) => this.setState({data:data}))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data) ;

        fetch("http://localhost:4000/updateApplicantPersonalDetails", {
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
                        <input type="id" name="id"  value={this.state.data.applicantId} disabled/>
                        <label htmlFor="email">Email</label>
                        <input className="form-control"  name="email" id = "email" onChange={this.handleChange} value = {this.state.data.email} type="text" placeholder="s@a.co" required />
                        <label htmlFor="email">Password</label>
                        <input className="form-control"  name="password" id = "password" onChange={this.handleChange} value = {this.state.data.passwword} type="text" placeholder="s@a.co" required />

<label htmlFor="fullName">Name</label>
<input className="form-control"  name="name" id = "name" onChange={this.handleChange} value = {this.state.data.name} type="text" placeholder="zergande" required />
<label htmlFor="address">Address</label>
<input className="form-control"  name="address" id = "address" onChange={this.handleChange} value = {this.state.data.address} type="text" placeholder="sambhav appt" required />
<label htmlFor="pincode">Pin/Zip Code</label>
<input className="form-control"  name="pin" id = "pin" onChange={this.handleChange} value = {this.state.data.pin} type="text" placeholder="s@a.co" required />
<label htmlFor="state">State</label>

<input className="form-control"  name="state" id = "state" onChange={this.handleChange} value = {this.state.data.state} type="text" placeholder="s@a.co" required />
<label htmlFor="country">Country</label>
<input className="form-control"  name="country" id = "country" onChange={this.handleChange} value = {this.state.data.country} type="text" placeholder="s@a.co" required />
<label htmlFor="contact">Mobile Number</label>
<input className="form-control"  name="contact" id = "contact" onChange={this.handleChange} value = {this.state.data.contact} type="text" placeholder="s@a.co" required />
<label htmlFor="dob">Date of Birth</label>
                        <input type="text" name="dob" value={this.state.data.dateOfBirth}  disabled/>

                        <input type="submit" value="UPDATE" className="button" />
              
                    </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantProfile;