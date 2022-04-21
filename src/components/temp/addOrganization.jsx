import React, { Component } from 'react';
import '../login.css';

export default class AddOrganization extends Component {
  state = {
    orginfo: { name: '', address: '', email: '', password: '', type: '', contact: '' },
    errors: {}
  };

  handleValidation() {
    let orginfo = this.state.orginfo;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!orginfo["name"]) {
      formIsValid = false;
      errors["name"] = "Name Cannot be empty";
    }

    else if (typeof orginfo["name"] !== "undefined") {
      if (!orginfo["name"].match(/^[a-zA-Z][a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "Organization Name should contain only Letters and spaces";
      }
    }

    //Address
    if (!orginfo["address"]) {
      formIsValid = false;
      errors["address"] = "Address Cannot be empty";
    }
    else if (typeof orginfo["address"] !== "undefined") {
      if (!orginfo["address"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["address"] = "Organization Address should contain only Letters and spaces and numbers";
      }
    }


    //Email
    if (!orginfo["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    else if (typeof orginfo["email"] !== "undefined") {
      let lastAtPos = orginfo["email"].lastIndexOf("@");
      let lastDotPos = orginfo["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          orginfo["email"].indexOf("@") === -1 &&
          lastDotPos > 2 &&
          orginfo["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }


    //Password 
    if (!orginfo["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    else if (typeof orginfo["password"] !== "undefined") {
      var minNumberofChars = 6;
      var maxNumberofChars = 16;
      var newPassword = orginfo["password"];
      if (newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars) {
        formIsValid = false;
        errors["password"] = "Password should be between 6 to 16 char";
      }
      if (!orginfo["password"].match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        formIsValid = false;
        errors["password"] = "password should contain atleast one number and one special character";
      }
    }

    //Contact 
    if (!orginfo["contact"]) {
      formIsValid = false;
      errors["contact"] = "Contact Cannot be empty";
    }

    else if (typeof orginfo["contact"] !== "undefined") {
      if (!orginfo["contact"].match(/^[0-9]$/)) {
        formIsValid = false;
        errors["contact"] = "Organization Contact should be a 10 Digit No";
      }
    }



    this.setState({ errors: errors });
    return formIsValid;
  };






  handleChange = e => {
    const orginfo = { ...this.state.orginfo };
    orginfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ orginfo });
    console.log(orginfo);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.handleValidation()) {
        console.log("valid")
    } else {
      console.log("invalid");
      return;
    }

    console.log(this.state.errors);

  };

  render() {
    return (
      <React.Fragment>
        <div className="loginDiv" style={{}}>
          <div className="forms">
            {/* LOGIN FORM */}
            <form id="login" onSubmit={this.handleSubmit} name="membershipserviceform" >
              <center><h4> Add Organization </h4></center><br/>
              <div id="loginwarning" className="warning">
                {/* INSERT LOGIN WARNINGS HERE */}
              </div>
              <div className="input-field">

                <label htmlFor="email">Email</label>
                <input type="text" onChange={this.handleChange} value={this.state.orginfo.email} id="email" name="email" placeholder="kjsce1221@somaiya.edu" />
                {
                  this.state.errors["email"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["email"]}
                  </div>
                }

                <label htmlFor="name">Name</label>
                <input type="text" onChange={this.handleChange} value={this.state.orginfo.name} id="name" name="name" placeholder="kjsce1221" />
                {
                  this.state.errors['name'] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["name"]}
                  </div>
                }

                <label htmlFor="address">Address</label>
                <input type="textarea" onChange={this.handleChange} value={this.state.orginfo.address} id="address" name="address" placeholder="Vidyavihar Mumbai" />
                {
                  this.state.errors["address"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["address"]}
                  </div>
                }

                <label htmlFor="pincode">Pin/Zip Code</label>
                <input type="text" name="pincode" placeholder="John Doe" />

                <label htmlFor="state">State</label>
                <input type="text" name="state" placeholder="John Doe" />

                <label htmlFor="country">Country</label>
                <input type="text" name="country" placeholder="John Doe" />

                <label htmlFor="type">Type</label>
                <select className="custom-select" onChange={this.handleChange} value={this.state.orginfo.type} id="type" name="type">
                  <option value="School">School</option>
                  <option value="School">Jr College</option>
                  <option value="College">College</option>
                  <option value="Company">Company</option>
                  <option value="Other">Other</option>
                </select>
                <br /><br /><br />

                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleChange} value={this.state.orginfo.password} id="password" name="password" placeholder="********" />
                {
                  this.state.errors["password"] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["password"]}
                  </div>
                }

                <label htmlFor="contact">Contact No</label>
                <input type="number" onChange={this.handleChange} value={this.state.orginfo.contact} id="contact" name="contact" placeholder="7887779499" />
                {
                  this.state.errors['contact'] &&
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["contact"]}
                  </div>
                }

                <input type="submit" value="ADD ORGANIZATION" defaultValue="ADD ORGANIZATION" className="button" />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}