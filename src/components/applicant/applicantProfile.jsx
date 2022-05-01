import React, { Component } from 'react';
import '../../static/css/login.css';
import { NavLink } from 'react-router-dom';
import backend from '../../config.json';
const url = String(backend.backend) + "";

class ApplicantProfile extends Component {
    state = {
        applicant: {},
        data: { applicantId: '', email: '', name: '', pin: '', state: '', country: '', contact: '', dateOfBirth: '', currentOrganization:'' },
        updateError:""
    };


    handleChange = (e) => {
        const data = { ...this.state.data };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data });

    };


    componentDidMount() {

        fetch(url+"/getMyDetails", {
            method: "POST",
            // body:JSON.stringify({"data":{"applicantId":this.state.applicantId}}),
            headers: { "Content-Type": "application/json", "x-auth-token": localStorage.getItem("eduCertJwtToken") }
        })
        .then(response => {
            if(response.ok)
                return response.json();
            else{
                return response.text().then(text => { throw new Error(text) })
            }
        })
        .then((data) => this.setState({ data: data, updateError:'' }))
        .catch(err => {
            this.setState({updateError:"Fetch Error: "+err.message});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data);

        fetch(url+"/updateMyPersonalDetails", {
            method: "POST",
            body: JSON.stringify({ "data": this.state.data }),
            headers: { "Content-Type": "application/json", "x-auth-token": localStorage.getItem("eduCertJwtToken") }
        })
        .then(response => {
            // console.log(response)
            if(response.ok)
              return response.text(); //Update Successful
            else{
              return response.text().then(text => { throw new Error(text) })
            }
          })
          .then(data => {
            // this.setState({viceAdmins:data});
            this.setState({ updateError:'' })
            alert(data);
          })
          .catch(err => {
            this.setState({updateError:err.message});
          })
    };

    render() {
        return (
            <React.Fragment>
                <div className="forms">
                    <form onSubmit={this.handleSubmit} >
                        <center><h4> Profile </h4></center><br />
                        {   this.state.updateError && 
                            <div class="alert alert-danger" role="alert">
                            <center>{this.state.updateError}</center>
                        </div>}
                        <div className="input-field">
                            <label htmlFor="id">Id</label>
                            <input type="id" name="id" value={this.state.data.applicantId} placeholder="1814078" disabled />
                            <label htmlFor="email">Email</label>
                            <input className="form-control" name="email" id="email" onChange={this.handleChange} value={this.state.data.email} type="text" placeholder="sanyamgandhi00@gmail.com" required />
                            <label htmlFor="fullName">Name</label>
                            <input className="form-control" name="name" id="name" onChange={this.handleChange} value={this.state.data.name} type="text" placeholder="Sanyam Gandhi" required />
                            <label htmlFor="address">Address</label>
                            <input className="form-control" name="address" id="address" onChange={this.handleChange} value={this.state.data.address} type="text" placeholder="Sambhav Appt , Rajputpura , Akola " required />
                            <label htmlFor="pincode">Pin/Zip Code</label>
                            <input className="form-control" name="pin" id="pin" onChange={this.handleChange} value={this.state.data.pin} type="text" placeholder="444001" required />
                            <label htmlFor="state">State</label>
                            <input className="form-control" name="state" id="state" onChange={this.handleChange} value={this.state.data.state} type="text" placeholder="Maharashtra" required />
                            <label htmlFor="country">Country</label>
                            <input className="form-control" name="country" id="country" onChange={this.handleChange} value={this.state.data.country} type="text" placeholder="India" required />
                            <label htmlFor="contact">Mobile Number</label>
                            <input className="form-control" name="contact" id="contact" onChange={this.handleChange} value={this.state.data.contact} type="text" placeholder="7887779499" required />
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="text" name="dob" value={this.state.data.dateOfBirth} placeholder="24-11-2000" disabled />
                            <label htmlFor="currentOrganization">Current Organization</label>
                            <input type="text" name="currentOrganization" value={this.state.data.currentOrganization} placeholder="24-11-2000" disabled />
                            <input type="submit" value="UPDATE" className="button" />
                            <NavLink to="/applicant/updatePassword"><center>Update Your Password</center> </NavLink>

                            

                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantProfile;