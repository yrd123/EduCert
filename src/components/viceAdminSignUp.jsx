import React, { Component } from 'react';
import './login.css';



export default class ViceAdminSignUp extends Component {
  state = {
    applicantinfo: {
      organization: "",
      id: "",
      password: "",
      role: "viceAdmin"
    },
    errors: {},
  }

  handleChange = (e) => {
    const applicantinfo = { ...this.state.applicantinfo };
    applicantinfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ applicantinfo });
    console.log(applicantinfo);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      const base_url = "http://127.0.0.1:4000/createApplicant"
      const data = { applicantinfoSignup: this.state.applicantinfoSignup }


    } else {
      return;
    }

    console.log(this.state.errors);
  }

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
            <div id="loginwarning" className="warning">
              {/* INSERT LOGIN WARNINGS HERE */}
            </div>
            <div className="input-field">
              <label htmlFor="id">UserId</label>
              <input type="text" name="id" id="id" onChange={this.handleChange} value={this.state.applicantinfo.id} placeholder="sanyamgandhi00" />
              {this.state.errors['id'] &&
                <div class="alert alert-danger" role="alert">
                  {this.state.errors["id"]}
                </div>
              }

              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.applicantinfo.password} placeholder="******" />
              {this.state.errors['password'] &&
                <div class="alert alert-danger" role="alert">
                  {this.state.errors["password"]}
                </div>
              }

              <label htmlFor="id">Organization</label>
              <input type="text" name="organization" id="organization" onChange={this.handleChange} value={this.state.applicantinfo.id} placeholder="Org1" />
              {this.state.errors['organization'] &&
                <div class="alert alert-danger" role="alert">
                  {this.state.errors["organization"]}
                </div>
              }

              {/* <a href="applicant/dashboard"> */}
              <input type="submit" defaultValue="Login" className="button" />
              {/* </a> */}

            </div>
          </form>
        </div>
      </div>
    );
  }
}
