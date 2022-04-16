import React, { Component } from 'react';
import './login.css';
import CenteredTabs from './common/tabs';



export default class ApplicantSignUp extends Component {
    state = {
      currentTab : "Sign Up" ,
      
      applicantinfoSignup :{ applicantId:'', email :'' , fullName : '' , address :'' , pincode : '', stateOfApplicant : '', country : '', contactNumber: '' , dob :''  } ,
      errors: {},
      signupErrors :{} 
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
    } else {
      return;
    }

    console.log(this.state.errors); 
  };

  
  handleSignUpValidation() {
    let applicantinfoSignup = this.state.applicantinfoSignup;
    let signupErrors = {};
    let formIsValid = true;


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
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          applicantinfoSignup["email"].indexOf("@") === -1 &&
          lastDotPos > 2 &&
          applicantinfoSignup["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        signupErrors["email"] = "Email is not valid";
      }
    }

    //Contact 
    if (!applicantinfoSignup["contactNumber"]) {
      formIsValid = false;
      signupErrors["contactNumber"] = "Contact Cannot be empty";
    }
    else if (typeof applicantinfoSignup["contactNumber"] !== "undefined") {
      if (!applicantinfoSignup["contactNumber"].match(/^[0-9]$/)) {
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





     //Password
    if (!applicantinfoSignup["password"]) {
      formIsValid = false;
      signupErrors["password"] = "Cannot be empty";
    } else if (typeof applicantinfoSignup["password"] !== "undefined") {
      var minNumberofChars = 6;
      var maxNumberofChars = 16;
      var newPassword = applicantinfoSignup["password"];
      if (
        newPassword.length < minNumberofChars ||
        newPassword.length > maxNumberofChars
      ) {
        formIsValid = false;
        signupErrors["password"] = "Password should be between 6 to 16 char";
      }
      if (!applicantinfoSignup["password"].match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        formIsValid = false;
        signupErrors["password"] =
          "password should contain atleast one number and one special character";
      }
    }


    this.setState({ signupErrors: signupErrors });
    return formIsValid;
  } ;


    render() {
      return  (
        <div>
          <div className="forms">
            {/* <ul className="tab-group">
              <li className="tab active" id="loginbutton">
                <a href="#login">Log In</a>
              </li>
              <li className="tab" id="signupbutton"><a href="#signup">Sign Up</a></li>
            </ul> */}


            {/* SIGNUP FORM */}
            <form onSubmit={this.handleSubmitSignup} id="signup" style={{display: this.state.currentTab==='Sign Up' ? 'block' : 'none' }} onsubmit="return validatesignup()" name="signupform" method="POST">
              <div id="signupwarning" className="warning">
                {/* INSERT SIGNUP WARNINGS HERE */}
              </div>
              <div className="input-field">
              <label htmlFor="applicantId">Applicant Id</label>
                <input type="text" id="applicantId" name="applicantId" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.applicantId} placeholder="1234" />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email"name="email" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.email} placeholder="sanyamgandhi@gmail.com" />
                {
                  this.state.signupErrors["email"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["email"]}
                  </div>
                }

                <label htmlFor="password">Password</label>
                <p className="muted-text">
                  (Password Must be Atleast 6 Characters Long)
                </p>
                <input type="password" name="password" placeholder="******" />

                <label htmlFor="fullName">Name</label>
                <input type="text" id = "fullName" name="fullName" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.fullName} placeholder="John Doe" />
                {
                  this.state.signupErrors["fullName"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["fullName"]}
                  </div>
                }
                
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.address} placeholder="c8 sambhav appt" />
                {
                  this.state.signupErrors["address"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["address"]}
                  </div>
                }
                
                <label htmlFor="pincode">Pin/Zip Code</label>
                <input type="text" id="pincode" name="pincode" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.pincode} placeholder="John Doe" />
                <label htmlFor="state">State</label>
                <input type="text" id="stateOfApplicant" name="stateOfApplicant" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.stateOfApplicant} placeholder="John Doe" />
                <label htmlFor="country">Country</label>
                <input type="text" id = "country" name="country" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.country} placeholder="John Doe" />
                <label htmlFor="contactNumber">Mobile Number</label>
                <input type="number" id="contactNumber" name="contactNumber" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.contactNumber} placeholder={9876543210} />
                {
                  this.state.signupErrors["contactNumber"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.signupErrors["contactNumber"]}
                  </div>
                }
                
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" placeholder="22/12/2000" />

                <input type="submit" defaultValue="Sign up" className="button" />
              </div>
            </form>
          </div>
        </div>

      );
    }
  }