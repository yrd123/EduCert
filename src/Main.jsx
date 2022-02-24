import React, { Component } from 'react';
import {BrowserRouter, Route , Routes } from 'react-router-dom';

import App from './App';
import OrganizationLogin from './components/organizationLogin';
import OrganizationDashboard from './components/organizationDashboard';
import OrganizationUploadDocument from './components/organizationUploadDocument';

import ApplicantLogin from './components/applicantLogin';
import ApplicantDashboard from './components/applicantDashboard';
import ApplicantUploadDocument from './components/applicantUploadDocument';
import MembershipService from './components/membershipService';

export default class Main extends Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<App />} />
              <Route exact path="organization/login" element={<OrganizationLogin />} />  
              <Route exact path="organization/dashboard" element={<OrganizationDashboard />} />
              <Route exact path="organization/uploadDocument" element={<OrganizationUploadDocument />} />
              <Route exact path="applicant/login" element={<ApplicantLogin />} />
              <Route exact path="applicant/dashboard" element={<ApplicantDashboard />} />
              <Route exact path="applicant/uploadDocument" element={<ApplicantUploadDocument />} />
              
              <Route exact path="admin/membershipService" element={<MembershipService />} />
          </Routes>
        </BrowserRouter>
      );
    }
  }