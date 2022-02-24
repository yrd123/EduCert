import React, { Component } from 'react';
import './login.css';
import Navbar from './navbar';

export default class MembershipService extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/> 
                <div className="loginDiv" style={{}}>
                    <div className="forms">
                        {/* LOGIN FORM */}
                        <form id="login" onsubmit="" name="membershipserviceform" >
                            <h1>Membership Service</h1>
                            <hr />
                            <div id="loginwarning" className="warning">
                                {/* INSERT LOGIN WARNINGS HERE */}
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Organization Name</label>
                                <input type="text" name="name" placeholder="kjsce1221" />


                                <label htmlFor="address">Organization Address</label>
                                <input type="textarea" name="address" placeholder="Vidyavihar Mumbai" />



                                <label htmlFor="type">Organization Type</label>
                                <select name="type" id="cars">
                                    <option value="School">School</option>
                                    <option value="Company">Company</option>
                                    <option value="College">College</option>
                                    <option value="Other">Other</option>
                                </select>


                                <label htmlFor="email">Organization Email</label>
                                <input type="text" name="email" placeholder="kjsce1221@somaiya.edu" />



                                <label htmlFor="password">Organization Password</label>
                                <input type="password" name="password" placeholder="********" />



                                <label htmlFor="contact">Organization Contact No</label>
                                <input type="number" name="contact" placeholder="7887779499" />


                                <input type="submit" defaultValue="Login" className="button" />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}