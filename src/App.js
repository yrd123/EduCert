import './static/css/App.css';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Navbar from './components/navbar';

import ViewViceAdmins from './components/admin/viewViceAdmins';
import CreateVerifiedDocument from './components/organization/createDocument';
import OrganizationDashboard from './components/organization/organizationDashboard';
import ApplicantProfile from './components/applicant/applicantProfile';

import Login from './components/login';
import RegisterApplicant from './components/organization/registerApplicant'
import ApplicantDashboard from './components/applicant/applicantDashboard';
import Home from './components/home';
import VerifyDocument from './components/organization/verifyDocument';
import RegisterViceAdmin from './components/admin/registerViceAdmin';
import ViewApplicantDocuments from './components/organization/viewApplicantDocuments';
import { Component } from 'react';
import CreateSelfUploadedDocument from './components/applicant/createDocument';
import UpdatePassword from './components/applicant/updatePassword';
import ViewApplicants from './components/organization/viewApplicants';
import ViewOrganizations from './components/applicant/viewOrganizations';

import { Navigate } from "react-router-dom";
import ViceAdminProtectedRoutes from './protected routes/ViceAdminProtectedRoutes';
import AdminProtectedRoutes from './protected routes/AdminProtectedRoutes';
import ApplicantProtectedRoutes from './protected routes/ApplicantProtectedRoutes';
import ViewDocument from './components/common/viewDocument';


class App extends Component{
  state = {};

  componentDidMount(){
    try{ 
      //localStorage.removeItem('eduCertJwtToken')    
      // localStorage.setItem('eduCertJwtToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiaXN0cmlsIiwib3JnYW5pemF0aW9uIjoiT3JnMU1TUCIsInJvbGUiOiJ2aWNlQWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.gePonmyhGlFBj3lE4Bw3EuG87W2Z5f2flLEDqfYQIoU')
      //localStorage.setItem('eduCertJwtToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsIm9yZ2FuaXphdGlvbiI6Ik9yZzFNU1AiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.80mmHyTPvEISXmZ_MWW_YvRvhEsHFkT3Be9YXY35w8M')
      //localStorage.setItem('eduCertJwtToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkcmV2ZW50ZW0iLCJvcmdhbml6YXRpb24iOiJPcmcxTVNQIiwicm9sZSI6ImFwcGxpY2FudCIsImlhdCI6MTUxNjIzOTAyMn0.BAGSjcc0lBuDrX-DRrf2_NaEFK2LX8Y-H3QG00fJc5M')
      const token = localStorage.getItem('eduCertJwtToken');
      const user = jwtDecode(token);
      console.log(user);
      this.setState({user});
    }
    catch(ex){}
  }
  render(){
  const {user} = this.state;
  return (
    <BrowserRouter>
    <div>
        <Navbar user={this.state.user}/>
        <div className='content'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="login" element={<Login />} />

                {/* <Route exact path="admin/viewDocuments" element={<ViewDocuments />} />
                <Route exact path="admin/viewOrganizations" element={<ViewOrganizations />} />
                <Route exact path="admin/viewApplicants" element={<ViewApplicants />} />
                <Route exact path="organization/login" element={<OrganizationLogin />} /> 
                <Route exact path="organization/profile" element={<OrganizationProfile />} />
                <Route exact path="organization/createDocument" element={<CreateVerifiedDocument />} />
                <Route exact path="organization/viewApplicantProfile" element={<ViewApplicantProfile />} />

                */}
                <Route element={<AdminProtectedRoutes />}>
                  <Route exact path="admin/viewViceAdmins" element={<ViewViceAdmins />} />
                  <Route exact path="admin/registerViceAdmin" element={<RegisterViceAdmin />} />
                </Route>
                <Route element={<ViceAdminProtectedRoutes />}>
                  <Route exact path="organization/dashboard" element={<OrganizationDashboard />}/>
                  <Route exact path="organization/createDocument" element={<CreateVerifiedDocument />} />
                  <Route exact path="organization/verify" element={<VerifyDocument />} />
                  <Route exact path="organization/viewApplicants" element={<ViewApplicants />} />
                  <Route exact path="organization/viewApplicantDocuments" element={<ViewApplicantDocuments />} />
                  <Route exact path="organization/registerApplicant" element={<RegisterApplicant />} />
                </Route> 
                <Route element={<ApplicantProtectedRoutes/>}>
                  <Route exact path="applicant/dashboard" element={<ApplicantDashboard />} />
                  <Route exact path="applicant/profile" element={<ApplicantProfile />} />
                  <Route exact path="applicant/updatePassword" element={<UpdatePassword />} />
                  <Route exact path="applicant/createDocument" element={<CreateSelfUploadedDocument />} />
                  <Route exact path="applicant/viewOrganizations" element={<ViewOrganizations />} /> 
                </Route>
                <Route exact path="/viewDocument" element={<ViewDocument />} />

            </Routes>
        </div>
        {/* <div id="inner-div">
          <div className="grid-container">
            <div className="item1">
              <a href="organizationLogin.html">ORGANIZATION &nbsp; <i className="fa fa-building" aria-hidden="true" /></a>
            </div>
            <div className="item2">
              <a href="applicanttLogin.html">APPLICANT &nbsp;<i className="fa fa-user" aria-hidden="true" /></a>
            </div>
          </div>
        </div> */}
        {/* navbar script */}
      </div>
      </BrowserRouter>
  );
}
}
export default App;
