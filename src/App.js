import './App.css';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import Navbar from './components/navbar';

import ViewDocuments from './components/admin/viewDocuments';
import ViewOrganizations from './components/admin/viewOrganizations';
import ViewApplicants from './components/admin/viewApplicants';
import AddOrganization from './components/admin/addOrganization';

import OrganizationLogin from './components/organizationLogin';
import OrganizationDashboard from './components/organizationDashboard';
import OrganizationProfile from './components/organization/organizationProfile';
import OrganizationUploadDocument from './components/organizationUploadDocument';

import ApplicantLogin from './components/applicantLogin';
import ApplicantDashboard from './components/applicantDashboard';
import ApplicantProfile from './components/applicant/applicantProfile';
import ApplicantUploadDocument from './components/applicantUploadDocument';
import Home from './components/home';
import VerifyDocument from './components/organization/verifyDocument';
import { getDocumentById } from './services/documentService';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Navbar/>
        <div className='content'>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="admin/viewDocuments" element={<ViewDocuments />} />
                <Route exact path="admin/viewOrganizations" element={<ViewOrganizations />} />
                <Route exact path="admin/viewApplicants" element={<ViewApplicants />} />

                <Route exact path="organization/login" element={<OrganizationLogin />} />  
                <Route exact path="organization/dashboard" element={<OrganizationDashboard />} />
                <Route exact path="organization/profile" element={<OrganizationProfile />} />
                <Route exact path="organization/uploadDocument" element={<OrganizationUploadDocument />} />
                <Route exact path="organization/verify" element={<VerifyDocument />} />

                <Route exact path="applicant/login" element={<ApplicantLogin />} />
                <Route exact path="applicant/dashboard" element={<ApplicantDashboard />} />
                <Route exact path="applicant/profile" element={<ApplicantProfile />} />
                <Route exact path="applicant/uploadDocument" element={<ApplicantUploadDocument />} />
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

export default App;
