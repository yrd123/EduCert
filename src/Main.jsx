import React, { Component } from 'react';
import App from './App';
import OrganizationLogin from './Components/organizationLogin';
import StudentLogin from './Components/studentLogin';
import StudentDashboard from './Components/studentDashboard';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
export default class Main extends Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<App />} />
              <Route exact path="organization/login" element={<OrganizationLogin />} />  
              <Route exact path="student/login" element={<StudentLogin />} />
              <Route exact path="student/dashboard" element={<StudentDashboard />} />
              <Route exact path="organization/dashboard" element={<StudentDashboard />} />
          </Routes>
        </BrowserRouter>
      );
    }
  }