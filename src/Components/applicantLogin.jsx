import React, { Component } from 'react';
import './login.css';
import CenteredTabs from './common/tabs';



export default class ApplicantLogin extends Component {
    state = {
      currentTab : "Log In" ,
      applicantinfo: {
        id: "",
        password: "",
        
      },
      applicantinfoSignup :{ email :'' , fullName : '' , address :'' , pincode : '', stateOfApplicant : '', country : '', contactNumber: '' , dob :''  } ,
      errors: {},
      signupErrors :{} 
    }

    handleTabChange = tab =>{
      this.setState({currentTab : tab});
    }

    
  handleChange = (e) => {
    const applicantinfo = { ...this.state.applicantinfo };
    applicantinfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ applicantinfo });
    console.log(applicantinfo);
  };

  handleChangeSignup = (e) => {
    const applicantinfoSignup = { ...this.state.applicantinfoSignup };
    applicantinfoSignup[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ applicantinfoSignup });
    console.log(applicantinfoSignup);
  };
  
  handleSubmitSignup = (e) => {
    e.preventDefault();

    if (this.handleValidationSignup()) {
    } else {
      return;
    }

    console.log(this.state.errors);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
    } else {
      return;
    }

    console.log(this.state.errors);
  };

  handleValidation() {
    let applicantinfo = this.state.applicantinfo;
    let errors = {};
    let formIsValid = true;

    //Id
    if (!applicantinfo["id"]) {
      formIsValid = false;
      errors["id"] = "Id Cannot be empty";
    }
    else if (typeof applicantinfo["id"] !== "undefined") {
      if (!applicantinfo["id"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["id"] = "Id should contain only Letters and numbers";
      }
    }



        //Password
    if (!applicantinfo["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    } else if (typeof applicantinfo["password"] !== "undefined") {
      var minNumberofChars = 6;
      var maxNumberofChars = 16;
      var newPassword = applicantinfo["password"];
      if (
        newPassword.length < minNumberofChars ||
        newPassword.length > maxNumberofChars
      ) {
        formIsValid = false;
        errors["password"] = "Password should be between 6 to 16 char";
      }
      if (!applicantinfo["password"].match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        formIsValid = false;
        errors["password"] =
          "password should contain atleast one number and one special character";
      }
    }


    this.setState({ errors: errors });
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

            <CenteredTabs tabs={["Log In","Sign Up"]} handleTabChange={this.handleTabChange} /><br />

            {/* LOGIN FORM */}
            <form  id="login" style={{display: this.state.currentTab==='Log In' ? 'block' : 'none' }} onSubmit={this.handleSubmit} name="loginform" method="POST">
              <br/>
              <div id="loginwarning" className="warning">
                {/* INSERT LOGIN WARNINGS HERE */}
              </div>
              <div className="input-field">
                <label htmlFor="id">UserId</label>
                <input type="text" name="id" id = "id" onChange={this.handleChange} value = {this.state.applicantinfo.id} placeholder="sanyamgandhi00" />
                { this.state.errors['id'] && 
                                <div class="alert alert-danger" role="alert">
                                {  this.state.errors["id"]}
                                </div>
                                }
                                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id = "password" onChange={this.handleChange} value = {this.state.applicantinfo.password}  placeholder="******" />
                { this.state.errors['password'] && 
                                <div class="alert alert-danger" role="alert">
                                {  this.state.errors["password"]}
                                </div>
                                }
                                
                {/* <a href="applicant/dashboard"> */}
                  <input type="submit" defaultValue="Login" className="button" />
                  {/* </a> */}
                <p className="text-p">
                  Not Yet Registered? <a href="#signup" id="tosignup">Sign Up</a>
                </p>
              </div>
            </form>
            {/* SIGNUP FORM */}
            <form action="/signup" id="signup" style={{display: this.state.currentTab==='Sign Up' ? 'block' : 'none' }} onsubmit="return validatesignup()" name="signupform" method="POST">
              <div id="signupwarning" className="warning">
                {/* INSERT SIGNUP WARNINGS HERE */}
              </div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"name="email" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.email} placeholder="sanyamgandhi@gmail.com" />
                <label htmlFor="fullName">Name</label>
                <input type="text" id = "fullName" name="fullName" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.fullName} placeholder="John Doe" />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.address} placeholder="c8 sambhav appt" />
                <label htmlFor="pincode">Pin/Zip Code</label>
                <input type="text" id="pincode" name="pincode" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.pincode} placeholder="John Doe" />
                <label htmlFor="state">State</label>
                <input type="text" id="stateOfApplicant" name="stateOfApplicant" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.stateOfApplicant} placeholder="John Doe" />
                <label htmlFor="country">Country</label>
                <input type="text" id = "country" name="country" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.country} placeholder="John Doe" />
                <label htmlFor="contactNumber">Mobile Number</label>
                <input type="number" id="contactNumber" name="contactNumber" onChange={this.handleChangeSignup} value = {this.state.applicantinfoSignup.contactNumber} placeholder={9876543210} />
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" placeholder="22/12/2000" />
                
                <label htmlFor="password">Password</label>
                <p className="muted-text">
                  (Password Must be Atleast 6 Characters Long)
                </p>
                <input type="password" name="password" placeholder="******" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <p className="muted-text">
                  (Password and Confirm Password Fields Must Match)
                </p>
                <input type="password" name="confirmPassword" placeholder="******" />
                <input type="submit" defaultValue="Sign up" className="button" />
              </div>
            </form>
          </div>
        </div>

      );
    }
  }