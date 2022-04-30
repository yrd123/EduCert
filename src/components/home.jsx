import React, { Component } from 'react';
import backend from '../config.json';
const url = String(backend.backend) + "";

class Home extends Component {
    state = { 
      applicant:{}
     } 
    componentDidMount(){
      /*fetch("http://localhost:4000/getApplicant/1814073/search?org=Org1MSP&userId=bistril")
      .then(response => response.json()).then((data)=>console.log(data.email));
*/
     // .then((applicant) => this.setState({applicant}));
    }

    verifyDocument = () =>{
      fetch(url+"/verifyDocument", {
            method:"POST",
            body:JSON.stringify({
              "org":"Org1MSP",
              "userId":"panchute",
              "data":{"documentId":"docid1"}
            }),
            headers:{"Content-Type" : "application/json"}
        })
      .then(response => response.json()).then((data)=>console.log(data));
        
    }
    
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
          <button onClick={this.verifyDocument} className="btn-primary">Post request</button>
        </div>
        );
    }
}
 
export default Home;