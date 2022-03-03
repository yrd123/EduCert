import React, { Component } from 'react';
import {BrowserRouter, Route , Routes } from 'react-router-dom';

import App from './App';

import ViewDocuments from './components/admin/viewDocuments';
import ViewOrganizations from './components/admin/viewOrganizations';
import ViewApplicants from './components/admin/viewApplicants';


import OrganizationLogin from './components/organizationLogin';
import OrganizationDashboard from './components/organizationDashboard';
import OrganizationProfile from './components/organization/organizationProfile';
import OrganizationUploadDocument from './components/organizationUploadDocument';

import ApplicantLogin from './components/applicantLogin';
import ApplicantDashboard from './components/applicantDashboard';
import ApplicantProfile from './components/applicant/applicantProfile';
import ApplicantUploadDocument from './components/applicantUploadDocument';

import AddOrganization from './components/admin/addOrganization';

export default class Main extends Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<App />} />

              <Route exact path="admin/viewDocuments" element={<ViewDocuments />} />
              <Route exact path="admin/viewOrganizations" element={<ViewOrganizations />} />
              <Route exact path="admin/viewApplicants" element={<ViewApplicants />} />

              <Route exact path="organization/login" element={<OrganizationLogin />} />  
              <Route exact path="organization/dashboard" element={<OrganizationDashboard />} />
              <Route exact path="organization/profile" element={<OrganizationProfile />} />
              <Route exact path="organization/uploadDocument" element={<OrganizationUploadDocument />} />

              <Route exact path="applicant/login" element={<ApplicantLogin />} />
              <Route exact path="applicant/dashboard" element={<ApplicantDashboard />} />
              <Route exact path="applicant/profile" element={<ApplicantProfile />} />
              <Route exact path="applicant/uploadDocument" element={<ApplicantUploadDocument />} />
              <Route exact path="admin/addOrganization" element={<AddOrganization />} />
          </Routes>
        </BrowserRouter>
      );
    }
  }