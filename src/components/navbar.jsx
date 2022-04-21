import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    let user = this.props.user;
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
        <h1><img src="https://www.formationsco.com/wp-content/uploads/2017/12/certificate_icon.png" className="logoImg" /> EduCert</h1>
        <div className="nav-div">
          <NavLink to="/"> <button className="navBtn ">Home</button></NavLink>
          
          {/* user && user.role === 'viceAdmin' &&
            <button className="navBtn dropdown">Organization <i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <NavLink className="nav-link" to="/organization/dashboard">Dashboard</NavLink>
              <NavLink className="nav-link" to="/organization/uploadDocument">Send for Verification</NavLink>
              <NavLink className="nav-link" to="/organization/profile">Profile</NavLink>
              <NavLink className="nav-link" to="/organization/login">Requests</NavLink>
              <NavLink className="nav-link" to="/organization/login">Log Out</NavLink>
            </ul>
        </button>*/}
          {/* user && user.role === 'applicant' &&
            <button className="navBtn dropdown">Applicant <i className="fa fa-angle-down"></i>
            <ul className="dropdown-menu">
              <NavLink className="nav-link" to="/applicant/dashboard">Dashboard</NavLink>
              <NavLink className="nav-link" to="/applicant/uploadDocument">Send for Verification</NavLink>
              <NavLink className="nav-link" to="/applicant/profile">Profile</NavLink>
              <NavLink className="nav-link" to="/applicant/login">Log Out</NavLink>
            </ul>
      </button> */}
          { user && user.role === 'admin' && 
            <>
              <NavLink to="/organization/dashboard"><button className="navBtn">Dashboard</button></NavLink>
              <NavLink to="/organization/dashboard"><button className="navBtn">View Applicants</button></NavLink>
              <NavLink to="/organization/uploadDocument"><button className="navBtn">Create Document</button></NavLink>
              <NavLink to="/organization/login"><button className="navBtn">Requests</button></NavLink>
            </>
          }

          { user && user.role === 'viceAdmin' && 
            <>
              <NavLink to="/organization/dashboard"><button className="navBtn">Dashboard</button></NavLink>
              <NavLink to="/organization/createDocument"><button className="navBtn">Create Document</button></NavLink>
              <NavLink to="/organization/dashboard"><button className="navBtn">View Applicants</button></NavLink>
              <NavLink to="/organization/applicantSignUp"><button className="navBtn">Create Applicant</button></NavLink>
            </>
          }

          { user && user.role === 'applicant' && 
            <>
              <NavLink to="/applicant/dashboard"><button className="navBtn">Dashboard</button></NavLink>
              <NavLink to="/applicant/profile"><button className="navBtn">Profile</button></NavLink>
              <NavLink to="/applicant/createDocument"><button className="navBtn">Create Document</button></NavLink>
              <NavLink to="/applicant/viewOrganizations"><button className="navBtn">View Organizations</button></NavLink>
            </>
          }


          { !user &&
          <NavLink to="/login"><button className="navBtn">Log In</button></NavLink>
          }
          { user &&
          <NavLink to="/logout"><button className="navBtn">Log Out</button></NavLink>
          }
        </div>
      </header>

    );
  }
}

export default Navbar;