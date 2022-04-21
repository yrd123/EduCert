import './App.css';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Navbar from './components/navbar';

import ViewDocuments from './components/admin/viewDocuments';
import ViewApplicants from './components/admin/viewApplicants';
import AddOrganization from './components/admin/addOrganization';
import ViewViceAdmins from './components/admin/viewViceAdmins';
import OrganizationLogin from './components/organizationLogin';
import ViewApplicantProfile from './components/organization/getPermissionedApplicant';
import CreateVerifiedDocument from './components/organization/createDocument';
import OrganizationDashboard from './components/organization/organizationDashboard';
import OrganizationProfile from './components/organization/organizationProfile';
import OrganizationUploadDocument from './components/organizationUploadDocument';
import ApplicantProfile from './components/applicant/applicantProfile';
import ViewOrganizations from './components/applicant/viewOrganizations';

import Login from './components/login';
import ApplicantSignUp from './components/organization/applicantSignUp'
import ApplicantDashboard from './components/applicantDashboard';
import Home from './components/home';
import VerifyDocument from './components/organization/verifyDocument';
import { getDocumentById } from './services/documentService';
import ViceAdminSignUp from './components/viceAdminSignUp';
import ViewApplicantDocuments from './components/viewApplicantDocuments';
import { Component } from 'react';
import CreateSelfUploadedDocument from './components/applicant/createDocument';

class App extends Component{
  state = {};

  componentDidMount(){
    try{
    
    //localStorage.removeItem('eduCertJwtToken')
    // localStorage.setItem('eduCertJwtToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiaXN0cmlsIiwib3JnYW5pemF0aW9uIjoiT3JnMU1TUCIsInJvbGUiOiJ2aWNlQWRtaW4iLCJpYXQiOjE1MTYyMzkwMjJ9.gePonmyhGlFBj3lE4Bw3EuG87W2Z5f2flLEDqfYQIoU')
    const token = localStorage.getItem('eduCertJwtToken');
    const user = jwtDecode(token);
    console.log(user);
    this.setState({user});
    }
    catch(ex){}
  }
  render(){
  return (
    <BrowserRouter>
    <div>
        <Navbar user={this.state.user}/>
        <div className='content'>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="admin/viewDocuments" element={<ViewDocuments />} />
                <Route exact path="admin/viewOrganizations" element={<ViewOrganizations />} />
                <Route exact path="admin/viewApplicants" element={<ViewApplicants />} />
                <Route exact path="applicant/viewOrganizations" element={<ViewOrganizations />} />
                <Route exact path="admin/viewViceAdmins" element={<ViewViceAdmins />} />
              
                <Route exact path="organization/login" element={<OrganizationLogin />} />  
                <Route exact path="organization/dashboard" element={<OrganizationDashboard />} />
                <Route exact path="organization/profile" element={<OrganizationProfile />} />
                <Route exact path="organization/viewApplicantProfile" element={<ViewApplicantProfile />} />
                <Route exact path="organization/addDocument" element={<CreateVerifiedDocument />} />
                <Route exact path="organization/createDocument" element={<CreateVerifiedDocument />} />
                <Route exact path="organization/verify" element={<VerifyDocument />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="viceAdminSignUp" element={<ViceAdminSignUp />} />
                
                <Route exact path="organization/viewApplicantDocuments" element={<ViewApplicantDocuments />} />
                <Route exact path="organization/applicantSignUp" element={<ApplicantSignUp />} />
                <Route exact path="applicant/dashboard" element={<ApplicantDashboard />} />
                <Route exact path="applicant/profile" element={<ApplicantProfile />} />
                <Route exact path="applicant/createDocument" element={<CreateSelfUploadedDocument />} />
                <Route exact path="admin/addOrganization" element={<AddOrganization />} />
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
