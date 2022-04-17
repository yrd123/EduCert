import React, { Component } from 'react';
import '../login.css';

export default class ViewViceAdmins extends Component {
  state = {
  };


  render() {
    return (
        <>
        <h1 className='vice'> Vice Admins</h1>
        
        <div className="container" >
            <div className="row" id = "rowId">
                <h3>One of three columns</h3>
            </div>
            <div className="row" id = "rowId">
                <h3>One of three columns</h3>
            </div><div className="row" id = "rowId">
                <h3>One of three columns</h3>
            </div><div className="row" id = "rowId">
                <h3>One of three columns</h3>
            </div>
        </div>
        </>
      
    );
  }
}