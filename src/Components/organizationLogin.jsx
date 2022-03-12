import React, { Component } from "react";
import "./login.css";

export default class OrganizationLogin extends Component {
  state = {
    orginfo: {
      email: "",
      password: "",
      
    },
    errors: {},
  };

  handleChange = (e) => {
    const orginfo = { ...this.state.orginfo };
    orginfo[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ orginfo });
    console.log(orginfo);
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
    let orginfo = this.state.orginfo;
    let errors = {};
    let formIsValid = true;


    //Email
    if (!orginfo["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (typeof orginfo["email"] !== "undefined") {
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
    } else if (typeof orginfo["password"] !== "undefined") {
      var minNumberofChars = 6;
      var maxNumberofChars = 16;
      var newPassword = orginfo["password"];
      if (
        newPassword.length < minNumberofChars ||
        newPassword.length > maxNumberofChars
      ) {
        formIsValid = false;
        errors["password"] = "Password should be between 6 to 16 char";
      }
      if (!orginfo["password"].match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
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
      <React.Fragment>
        <div className="loginDiv" style={{}}>
          <div className="forms">
            {/* LOGIN FORM */}
            <form id="login" onSubmit={this.handleSubmit} name="loginform">
              <br />
              <br />
              <br />
              <div id="loginwarning" className="warning">
                {/* INSERT LOGIN WARNINGS HERE */}
              </div>
              <div className="input-field">
                <label htmlFor="email">Organization Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  placeholder="kjsce1221"
                />

                {this.state.errors["email"] && (
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["email"]}
                  </div>
                )}

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  name="password"
                  placeholder="******"
                />

                {this.state.errors["password"] && (
                  <div class="alert alert-danger" role="alert">
                    {this.state.errors["password"]}
                  </div>
                )}

                <input type="submit" defaultValue="Login" className="button" />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
