import React, { Component } from 'react';
import '../../static/css/login.css';
import backend from '../../config.json';
const url = String(backend.backend) + "";


export default class RegisterViceAdmin extends Component {
  state = {
    viceAdminInfo: {
      userId: "",
      password: ""
    },
    errors: {},
    registrationError:""
  }

  handleChange = (e) => {
    const viceAdminInfo = { ...this.state.viceAdminInfo };
    viceAdminInfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ viceAdminInfo });
    console.log(viceAdminInfo);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      fetch(url+"/registerViceAdmin", {
        method:"POST",
        body:JSON.stringify(this.state.viceAdminInfo),
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
          // console.log(response)
          if(response.ok)
            return response.json();
          else{
            return response.text().then(text => { throw new Error(text) })
          }
        })
        .then(data => {
          // this.setState({viceAdmins:data});
          alert("Vice admin registered successfully");
          window.location = '/admin/viewViceAdmins';
        })
        .catch(err => {
          this.setState({registrationError:err.message})
        })
    }
    else 
      return;
  }

  handleValidation() {
    let viceAdminInfo = this.state.viceAdminInfo;
    let errors = {};
    let formIsValid = true;

    //Id
    if (!viceAdminInfo["userId"]) {
      formIsValid = false;
      errors["userId"] = "Id Cannot be empty";
    }
    else if (typeof viceAdminInfo["userId"] !== "undefined") {
      if (!viceAdminInfo["userId"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["userId"] = "Id should contain only Letters and numbers";
      }
    }

    //Password
    if (!viceAdminInfo["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    } else if (typeof viceAdminInfo["password"] !== "undefined") {
      var minNumberofChars = 5;
      var maxNumberofChars = 20;
      var newPassword = viceAdminInfo["password"];
      if (
        newPassword.length < minNumberofChars ||
        newPassword.length > maxNumberofChars
      ) {
        formIsValid = false;
        errors["password"] = "Password should be between 5 to 20 char";
      }
      if (!viceAdminInfo["password"].match(/^[a-zA-Z0-9!@#$%^&*]{5,20}$/)) {
        formIsValid = false;
        errors["password"] =
          "password should contain atleast one number and one special character";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="forms">
          {/* <ul className="tab-group">
              <li className="tab active" id="loginbutton">
                <a href="#login">Log In</a>
              </li>
              <li className="tab" id="signupbutton"><a href="#signup">Sign Up</a></li>
            </ul> */}


          {/* LOGIN FORM */}
          <form id="login" onSubmit={this.handleSubmit} name="loginform" method="POST">
            <br />

           { this.state.registrationError && <div class="alert alert-danger" role="alert">
                  <center>{this.state.registrationError}</center>
            </div>}
            <div className="input-field">
              <label htmlFor="userId">UserId</label>
              <input type="text" name="userId" id="userId" onChange={this.handleChange} value={this.state.viceAdminInfo.userId} placeholder="sanyamgandhi00" />
              {this.state.errors['userId'] &&
                <div class="alert alert-danger" role="alert">
                  {this.state.errors["userId"]}
                </div>
              }

              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.viceAdminInfo.password} placeholder="******" />
              {this.state.errors['password'] &&
                <div class="alert alert-danger" role="alert">
                  {this.state.errors["password"]}
                </div>
              }

              {/* <a href="applicant/dashboard"> */}
              <input type="submit" defaultValue="Register" className="button" />
              {/* </a> */}

            </div>
          </form>
        </div>
      </div>
    );
  }
}
