import React, { Component } from 'react';
import '../../static/css/login.css';
import backend from '../../config.json';
const url = String(backend.backend) + "";

export default class ViewViceAdmins extends Component {
  state = {
      viceAdmins : []
  };

  componentDidMount(){
        fetch(url+"/getViceAdmins", {
        method:"POST",
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => response.json())
        .then((data) => this.setState({viceAdmins:data}))
  }

  render() {
    return (
        <>
        <br/><br/><br/>
        <h3 className='vice'> Vice Admins</h3><br/>
        <ul class="list-group"  style={{marginLeft:150, width:500}}>
            {
                this.state.viceAdmins.map(viceAdmin => 
                  <li class="list-group-item">{viceAdmin.userId}</li>

                )
            }
        </ul>
        </>
      
    );
  }
}