import React, { Component } from 'react';
import '../login.css';

export default class ViewViceAdmins extends Component {
  state = {
      viceAdmins : ['v1', 'v2','v4']
  };

//   componentDidMount(){
//         fetch("http://localhost:4000/getViceAdmins", {
//         method:"POST",
//         headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
//         })
//         .then(response => response.json())
//         .then((data) => this.setState({viceAdmins:data}))
//   }

  render() {
    return (
        <>
        <h1 className='vice'> Vice Admins</h1>
        <div className="container">
            {
                this.state.viceAdmins.map(viceAdmin => 
                    <div className="row" id="rowId">
                        <h3>{viceAdmin}</h3>
                    </div>
                )
            }
        </div>
        </>
      
    );
  }
}