import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
    state = {
      data: {
        oldPassword: "",
        newPassword: "",
        
      },
      errors: {},
    }
    
  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
        
        console.log(data);
    } 
    else 
      return;
  }

  handleValidation() {
    let data = this.state.data;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!data["Old Password"]) {
      formIsValid = false;
      errors["Old Password"] = "Cannot be empty";
    } else if (typeof data["Old Password"] !== "undefined") {
      var minNumberofChars = 5;
      var maxNumberofChars = 20;
      var newPassword = data["Old Password"];
      if (
        newPassword.length < minNumberofChars ||
        newPassword.length > maxNumberofChars
      ) {
        formIsValid = false;
        errors["Old Password"] = "Password should be between 5 to 20 char";
      }
      if (!data["Old Password"].match(/^[a-zA-Z0-9!@#$%^&*]*$/)) {
        formIsValid = false;
        errors["Old Password"] =
          "Old Password should contain atleast one number and one special character";
      }
    }


    //Password
    if (!data["newPassword"]) {
        formIsValid = false;
        errors["newPassword"] = "Cannot be empty";
      } else if (typeof data["newPassword"] !== "undefined") {
        var minNumberofChars = 5;
        var maxNumberofChars = 20;
        var newPassword = data["newPassword"];
        if (
          newPassword.length < minNumberofChars ||
          newPassword.length > maxNumberofChars
        ) {
          formIsValid = false;
          errors["newPassword"] = "Password should be between 5 to 20 char";
        }
        if (!data["newPassword"].match(/^[a-zA-Z0-9!@#$%^&*]*$/)) {
          formIsValid = false;
          errors["newPassword"] =
            "newPassword should contain atleast one number and one special character";
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

            <div className="input-field">
            <label htmlFor="oldPassword">Old Password</label>
              <input type="oldPassword" name="oldPassword" id = "password" onChange={this.handleChange} value = {this.state.data.oldPassword}  placeholder="******" />
              { this.state.errors['oldPassword'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["oldPassword"]}
                </div>
              }

                              
              <label htmlFor="newPassword">New Password</label>
              <input type="newPassword" name="newPassword" id = "password" onChange={this.handleChange} value = {this.state.data.mewPassword}  placeholder="******" />
              { 
                this.state.errors['newPassword'] && 
                <div class="alert alert-danger" role="alert">
                {this.state.errors["newPassword"]}
                </div>
              }

              <br></br>
              <br></br>

                <input type="submit" defaultValue="Register" className="button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}



