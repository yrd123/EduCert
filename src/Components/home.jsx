import React, { Component } from 'react';
class Home extends Component {
    state = {  } 
    render() { 
        return (
        <div id="inner-div">
          <div className="grid-container">
            <div className="item1">
              <a href="organizationLogin.html">ORGANIZATION &nbsp; <i className="fa fa-building" aria-hidden="true" /></a>
            </div>
            <div className="item2">
              <a href="applicanttLogin.html">APPLICANT &nbsp;<i className="fa fa-user" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        );
    }
}
 
export default Home;