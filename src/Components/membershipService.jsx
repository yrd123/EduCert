import React, { Component } from 'react';
import './login.css';
import Navbar from './navbar';

export default class MembershipService extends Component {
    state = {
        orginfo: { name: '', address: '', email: '', password: '', type: '', contact: '' }
    };

           

 

    handleChange = e =>{
        const orginfo = {...this.state.orginfo} ;
        orginfo[e.currentTarget.name] = e.currentTarget.value ;
        this.setState({orginfo}) ;
        console.log(orginfo) ;
    } ;

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="loginDiv" style={{}}>
                    <div className="forms">
                        {/* LOGIN FORM */}
                        <form id="login" onsubmit="" name="membershipserviceform" >
                            <br />
                            <div id="loginwarning" className="warning">
                                {/* INSERT LOGIN WARNINGS HERE */}
                            </div>
                            <div className="input-field">
                                <label htmlFor="name">Organization Name</label>
                                <input type="text" onChange = {this.handleChange} value = {this.state.orginfo.name} id="name"  name="name" placeholder="kjsce1221" />


                                <label htmlFor="address">Organization Address</label>
                                <input type="textarea" onChange = {this.handleChange} value = {this.state.orginfo.address} id="address" name="address" placeholder="Vidyavihar Mumbai" />



                                <label htmlFor="type">Organization Type</label>
                                <select className="custom-select" onChange = {this.handleChange} value = {this.state.orginfo.type} id="type"  name="type" id="cars">
                                    <option value="School">School</option>
                                    <option value="Company">Company</option>
                                    <option value="College">College</option>
                                    <option value="Other">Other</option>
                                </select>
                                <br></br>
                                <br></br>
                                <br></br>

                                <label htmlFor="email">Organization Email</label>
                                <input type="text" onChange = {this.handleChange} value = {this.state.orginfo.email} id="email" name="email" placeholder="kjsce1221@somaiya.edu" />



                                <label htmlFor="password">Organization Password</label>
                                <input type="password" onChange = {this.handleChange} value = {this.state.orginfo.password} id="password"  name="password" placeholder="********" />



                                <label htmlFor="contact">Organization Contact No</label>
                                <input type="number" onChange = {this.handleChange} value = {this.state.orginfo.contact} id="contact" name="contact" placeholder="7887779499" />


                                <input type="submit" value="ADD ORGANIZATION" defaultValue="ADD ORGANIZATION" className="button" />
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}