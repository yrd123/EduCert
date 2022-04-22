import React, { Component } from 'react';
import '../login.css';

export default class UpdatePassword extends Component {
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

  handleSubmit = (e) => {
    console.log("hi")
    e.preventDefault();
    if (this.handleValidation()) {
        console.log(this.state.data);
    } 
    else 
      return;
  }

  handleValidation() {
    let data = this.state.data;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!data["oldPassword"]) {
      formIsValid = false;
      errors["oldPassword"] = "Cannot be empty";
    }
    //Password
    if (!data["newPassword"]) {
        formIsValid = false;
        errors["newPassword"] = "Cannot be empty";
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
              <input type="oldPassword" name="oldPassword" id = "oldPassword" onChange={this.handleChange} value = {this.state.data.oldPassword}  placeholder="******" />
              { this.state.errors['oldPassword'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["oldPassword"]}
                </div>
              }
               
              <label htmlFor="newPassword">New Password</label>
              <input type="newPassword" name="newPassword" id = "newPassword" onChange={this.handleChange} value = {this.state.data.newPassword}  placeholder="******" />
              { this.state.errors['newPassword'] && 
                <div class="alert alert-danger" role="alert">
                {  this.state.errors["newPassword"]}
                </div>
              }
              <br></br>
              <br></br>
                <input type="submit" defaultValue="login" className="button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
