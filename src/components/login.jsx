import React, { Component } from 'react';
import { login } from '../services/authService';
import '../static/css/login.css';

export default class Login extends Component {
    state = {
      loginCredentials: {
        userId: "",
        password: "",
        organization:""
      },
      errors: {},
      loginError:""
    }
    
  handleChange = (e) => {
    const loginCredentials = { ...this.state.loginCredentials };
    loginCredentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ loginCredentials });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
        let response = await login(this.state.loginCredentials);
        if(response.ok){
          localStorage.setItem('eduCertJwtToken', response.token);
          window.location = '/';
        }
        else{
          this.setState({loginError :  response.error})
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
      var minNumberofChars = 2;
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

    this.setState({ errors: errors });
    return formIsValid;
  } 


  
  render() {
    return  (
      <div>
        <div className="forms">
          {/* LOGIN FORM */}
          <form  id="login" onSubmit={this.handleSubmit} name="loginform" method="POST">
          { this.state.loginError && 
          <div class="alert alert-danger" role="alert">
            <center>{this.state.loginError}</center>
          </div>}
            <br/>
            <div id="loginwarning" className="warning">
              {/* INSERT LOGIN WARNINGS HERE */}
            </div>
            <div className="input-field">
              <label htmlFor="userId">UserId</label>
              <input type="text" name="userId" id = "userId" onChange={this.handleChange} value = {this.state.loginCredentials.id} placeholder="1814078" />
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

              <label htmlFor="organization">Organization Id <span style={{color:'gray', fontWeight:400}}>(- if applicant)</span></label>
              <input type="text" name="organization" id = "organization" onChange={this.handleChange} value = {this.state.loginCredentials.id} placeholder="Org1MSP" />
              { this.state.errors['organization'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["organization"]}
                </div>
              }
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
