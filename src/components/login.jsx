import React, { Component } from 'react';
import { login } from '../services/authService';
import './login.css';

export default class Login extends Component {
    state = {
      loginCredentials: {
        userId: "",
        password: "",
        organization:"",
        role:"viceAdmin"
      },
      errors: {},
    }
    
  handleChange = (e) => {
    const loginCredentials = { ...this.state.loginCredentials };
    loginCredentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ loginCredentials });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
        let token = login(this.state.loginCredentials);
        localStorage.setItem('eduCertJwtToken', token);
        // console.log(localStorage.getItem('eduCertJwtToken'));
    } 
    else 
      return;
  }

  handleValidation() {
    let loginCredentials = this.state.loginCredentials;
    let errors = {};
    let formIsValid = true;

    //Id
    if (!loginCredentials["userId"]) {
      formIsValid = false;
      errors["userId"] = "Id Cannot be empty";
    }
    else if (typeof loginCredentials["userId"] !== "undefined") {
      if (!loginCredentials["userId"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["userId"] = "Id should contain only Letters and numbers";
      }
    }

    //Password
    if (!loginCredentials["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    } else if (typeof loginCredentials["password"] !== "undefined") {
      var minNumberofChars = 5;
      var maxNumberofChars = 20;
      var newPassword = loginCredentials["password"];
      if (
        newPassword.length < minNumberofChars ||
        newPassword.length > maxNumberofChars
      ) {
        formIsValid = false;
        errors["password"] = "Password should be between 5 to 20 char";
      }
      if (!loginCredentials["password"].match(/^[a-zA-Z0-9!@#$%^&*]*$/)) {
        formIsValid = false;
        errors["password"] =
          "password should contain atleast one number and one special character";
      }
    }

    if (!loginCredentials["organization"]) {
      formIsValid = false;
      errors["organization"] = "Organization Id Cannot be empty";
    }
    else if (typeof loginCredentials["organization"] !== "undefined") {
      if (!loginCredentials["organization"].match(/^[a-zA-Z0-9]*$/)) {
        formIsValid = false;
        errors["organization"] = "Organization Id should contain only Letters and numbers";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  } 


  
  render() {
    return  (
      <div>
        <div className="forms">
          {/* LOGIN FORM */}
          <form  id="login" onSubmit={this.handleSubmit} name="loginform" method="POST">
            <br/>
            <div id="loginwarning" className="warning">
              {/* INSERT LOGIN WARNINGS HERE */}
            </div>
            <div className="input-field">
              <label htmlFor="userId">UserId</label>
              <input type="text" name="userId" id = "userId" onChange={this.handleChange} value = {this.state.loginCredentials.id} placeholder="sanyamgandhi00" />
              { this.state.errors['userId'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["userId"]}
                </div>
              }
                              
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id = "password" onChange={this.handleChange} value = {this.state.loginCredentials.password}  placeholder="******" />
              { this.state.errors['password'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["password"]}
                </div>
              }

              <label htmlFor="organization">Organization Id</label>
              <input type="text" name="organization" id = "organization" onChange={this.handleChange} value = {this.state.loginCredentials.id} placeholder="sanyamgandhi00" />
              { this.state.errors['organization'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["organization"]}
                </div>
              }

              <label for="role">Choose a Role:</label>
              <select name="role" id="role" onChange={this.handleChange} value = {this.state.loginCredentials.role}>
                <option value="admin">admin</option>
                <option value="viceAdmin">viceAdmin</option>
                <option value="applicant">applicant</option>
              </select>
              <br></br>
              <br></br>
              <br></br>

                <input type="submit" defaultValue="Login" className="button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
