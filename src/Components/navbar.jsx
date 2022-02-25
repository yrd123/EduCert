import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() { 
        return (
        /*<nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggler" data-toggle="open-navbar1">
                <span />
                <span />
                <span />
              </button>
              <a href="#">
                <h4>Block<span>CERT</span></h4>
              </a>
            </div>
            <div className="navbar-menu" id="open-navbar1">
              <ul className="navbar-nav">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li><a href="/organization/login">Organization</a></li>
                <li className="navbar-dropdown">
                  <a href="/applicant/login" className="dropdown-toggler" data-dropdown="my-dropdown-id">
                  Applicant
                  </a>
                </li>
                <li><a href="{% url 'profile' %}">About Us</a></li>
                <li><a href="/applicant/dashboard">Applicant Dashboard</a></li>
                <li><a href="/organization/dashboard">Organization Dashboard</a></li>
              </ul>
            </div>
          </div>
        </nav>*/

        <header>
          <h1><img src="https://www.formationsco.com/wp-content/uploads/2017/12/certificate_icon.png" class="logoImg" /> EduCert</h1>
          <div class="nav-div">
          <NavLink to="/"> <button class="navBtn active">Home</button> </NavLink>
            <NavLink to="/applicant/login"><button class="navBtn">Applicant</button></NavLink>
            <NavLink to="/organization/login"><button class="navBtn">Organization</button></NavLink>
            <NavLink to="/applicant/dashboard"><button class="navBtn">Applicant Dashboard</button></NavLink>
            <NavLink to="/organization/dashboard"><button class="navBtn">Organization Dashboard</button></NavLink>
           </div> 
        </header>
                
        );
    }
}
 
export default Navbar;