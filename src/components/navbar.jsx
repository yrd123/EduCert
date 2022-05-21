import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {logout} from '../services/authService';

import '../static/css/navbar.css';



export default function Navbar(props)  {
const navigate = useNavigate();

  function logoutAndNavigate(){
    logout();
    navigate('/login');
    window.location.reload(false);
  }
  
    let user = props.user;
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
        <h1><img src="https://www.formationsco.com/wp-content/uploads/2017/12/certificate_icon.png" className="logoImg" /> DocdInBlocks</h1>
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
              <NavLink to="/admin/registerViceAdmin"><button className="navBtn">Register Vice Admin</button></NavLink>
              <NavLink to="/admin/viewViceAdmins"><button className="navBtn">View Vice Admins</button></NavLink>
            </>
          }

          { user && user.role === 'viceAdmin' && 
            <>
              <NavLink to="/organization/dashboard"><button className="navBtn">Dashboard</button></NavLink>
              <NavLink to="/organization/viewApplicants"><button className="navBtn">View Applicants</button></NavLink>
              <NavLink to="/organization/registerApplicant"><button className="navBtn">Register Applicant</button></NavLink>
              <NavLink to="/organization/createDocument"><button className="navBtn">Create Document</button></NavLink>
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
          <button className="navBtn" onClick={logoutAndNavigate}>Log Out</button>
          }
        </div>
      </header>

    );
}
