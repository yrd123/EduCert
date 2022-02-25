import React, { Component } from 'react';
import './login.css';
import Navbar from './navbar';

export default class OrganizationLogin extends Component {
    render() {
      return  (
        <React.Fragment>
          <Navbar/>
          <div className="loginDiv" style={{}}>
            <div className="forms">
              {/* LOGIN FORM */}
              <form action="/login" id="login" onsubmit="return validatelogin()" name="loginform" method="POST">
                <br />
                <br />
                <br />
                <div id="loginwarning" className="warning">
                  {/* INSERT LOGIN WARNINGS HERE */}
                </div>
                <div className="input-field">
                  <label htmlFor="email">Organization Id</label>
                  <input type="text" name="email" placeholder="kjsce1221" />
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="******" />
                  <input type="submit" defaultValue="Login" className="button" />
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }