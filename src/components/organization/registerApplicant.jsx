import React, { Component } from 'react';
import '../../static/css/login.css';
import backend from '../../config.json';
const url = String(backend.backend) + "";

export default class RegisterApplicant extends Component {
    state = {
      currentTab : "Sign Up" ,
      applicantinfoSignup :{ applicantId:'', email :'' , fullName : '' , address :'' , pincode : '', stateOfApplicant : '', country : '', contactNumber: '' , dob :''  } ,
      registrationError: '',
      signupErrors :{} ,

    }
  
  handleChangeSignup = (e) => {
    const applicantinfoSignup = { ...this.state.applicantinfoSignup };
    applicantinfoSignup[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ applicantinfoSignup });
    console.log(applicantinfoSignup);
  };
  
  handleSubmitSignup = (e) => {
    e.preventDefault();

    if (this.handleSignUpValidation()) {
      fetch(url+"/registerApplicant", {
        method:"POST",
        body:JSON.stringify(this.state.applicantinfoSignup),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
          // console.log(response)
          if(response.ok)
            return response.text();
          else{
            return response.text().then(text => { throw new Error(text) })
          }
        })
        .then(data => {
          // this.setState({viceAdmins:data});
          alert(data);
          window.location = '/organization/viewApplicants';
        })
        .catch(err => {
          this.setState({registrationError:err.message});
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })

    } 
    else 
      return;
  };
  
  handleSignUpValidation() {
    let applicantinfoSignup = this.state.applicantinfoSignup;
    let signupErrors = {};
    let formIsValid = true;

    if (!applicantinfoSignup["applicantId"]) {
      formIsValid = false;
      signupErrors["applicantId"] = "Cannot be empty";
    }

    //Email
    if (!applicantinfoSignup["email"]) {
      formIsValid = false;
      signupErrors["email"] = "Cannot be empty";
    }

    else if (typeof applicantinfoSignup["email"] !== "undefined") {
      let lastAtPos = applicantinfoSignup["email"].lastIndexOf("@");
      let lastDotPos = applicantinfoSignup["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos > 0 &&
          lastDotPos > 0
        )
      ) {
        formIsValid = false;
        signupErrors["email"] = "Email is not valid";
      }
    }

    //state
    if (!applicantinfoSignup["stateOfApplicant"]) {
      formIsValid = false;
      signupErrors["stateOfApplicant"] = "Cannot be empty";
    }

    //pincode
    if (!applicantinfoSignup["pincode"]) {
      formIsValid = false;
      signupErrors["pincode"] = "Cannot be empty";
    }

    //country
    if (!applicantinfoSignup["country"]) {
      formIsValid = false;
      signupErrors["country"] = "Cannot be empty";
    }
    

    //Contact 
    if (!applicantinfoSignup["contactNumber"]) {
      formIsValid = false;
      signupErrors["contactNumber"] = "Contact Cannot be empty";
    }
    else if (typeof applicantinfoSignup["contactNumber"] !== "undefined") {
      if (!applicantinfoSignup["contactNumber"].match(/^[0-9]*$/)) {
        formIsValid = false;
        signupErrors["contactNumber"] = "Contact should be a 10 Digit No";
      }
    }



    
    //fullName
    if (!applicantinfoSignup["fullName"]) {
      formIsValid = false;
      signupErrors["fullName"] = "Name Cannot be empty";
    }
    else if (typeof applicantinfoSignup["fullName"] !== "undefined") {
      if (!applicantinfoSignup["fullName"].match(/^[a-zA-Z][a-zA-Z ]*$/)) {
        formIsValid = false;
        signupErrors["fullName"] = "Organization Name should contain only Letters and spaces";
      }
    }

    //address
    if (!applicantinfoSignup["address"]) {
      formIsValid = false;
      signupErrors["address"] = "Cannot be empty";
    }





    this.setState({ signupErrors: signupErrors });
    return formIsValid;
  } ;


    render() {
      return  (
        <div>
          <div className="forms">

            {/* SIGNUP FORM */}
            <form onSubmit={this.handleSubmitSignup} id="signup" style={{display: this.state.currentTab==='Sign Up' ? 'block' : 'none' }} name="signupform" method="POST">
              { this.state.registrationError && 
                <div class="alert alert-danger" role="alert">
                <center>{this.state.registrationError}</center>
              </div>}
              <div className="input-field">
              <label htmlFor="applicantId">Applicant Id</label>
                <input type="text" id="applicantId" name="applicantId" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.applicantId} placeholder="1814078" />
                {
                  this.state.signupErrors["applicantId"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["applicantId"]}
                  </div>
                }
                <label htmlFor="email">Email</label>
                <input type="email" id="email"name="email" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.email} placeholder="sanyamgandhi00@gmail.com" />
                {
                  this.state.signupErrors["email"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["email"]}
                  </div>
                }

                
                <label htmlFor="fullName">Name</label>
                <input type="text" id = "fullName" name="fullName" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.fullName} placeholder="Sanyam Gandhi" />
                {
                  this.state.signupErrors["fullName"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["fullName"]}
                  </div>
                }
                
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.address} placeholder="Sambhav appt" />
                {
                  this.state.signupErrors["address"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["address"]}
                  </div>
                }
                
                <label htmlFor="pincode">Pin/Zip Code</label>
                <input type="text" id="pincode" name="pincode" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.pincode} placeholder="444001" />
                {
                  this.state.signupErrors["pincode"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["pincode"]}
                  </div>
                }
                <label htmlFor="stateOfApplicant">State</label>
                <input type="text" id="stateOfApplicant" name="stateOfApplicant" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.stateOfApplicant} placeholder="Maharashtra" />
                {
                  this.state.signupErrors["stateOfApplicant"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["stateOfApplicant"]}
                  </div>
                }
                <label htmlFor="country">Country</label>
                <input type="text" id = "country" name="country" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.country} placeholder="India" />
                {
                  this.state.signupErrors["country"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["country"]}
                  </div>
                }
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="number" id="contactNumber" name="contactNumber" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.contactNumber} placeholder="9876543210" />
                {
                  this.state.signupErrors["contactNumber"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["contactNumber"]}
                  </div>
                }
                
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob"name="dob" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.dob}  placeholder="22/12/2000" />

                <input type="submit" defaultValue="Sign up" className="button" />
              </div>
            </form>
          </div>
        </div>

      );
    }
  }