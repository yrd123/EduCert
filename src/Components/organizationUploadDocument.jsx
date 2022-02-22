import React, { Component } from 'react';
import './organizationUploadDocument.css'
class OrganizationUploadDocument extends Component {
    state = {
       info : {name : ' ' , doc : ' ' , applicantid : ' ' , desc : ' ' , type: ' ' , datecreated : ' ' }

    } ;

    handleChange = e =>{
        const info = {...this.state.info} ;
        info[e.currentTarget.name] = e.currentTarget.value ;
        this.setState({info}) ;
        console.log(info) ;
    } ;
    render() { 
        return (
            <React.Fragment>
            
      <div style={{margin: '10px', backgroundColor: 'white', padding: '10px'}}>
        <div className="row">
          <div className="col-xs-6">
            <div className="container-fluid" id="menu" style={{paddingTop: '3%', paddingBottom: '2%'}}>
              <div className="container box" style={{maxWidth: '700px', borderRadius: '6px'}}>
                <div id="member" className="container-fluid menu row" style={{padding: '2%'}}>
                  <br />
                  <center>
                    <h4><b>ENTER DETAILS</b></h4>
                  </center>
                  <hr style={{width: '50%'}} />
                  <label>Applicant Name</label>
                  <input className="form-control" value = {this.state.info.name}  type="Name" name="name" placeholder="Sanyam Gandhi" onChange={this.handleChange} id="name" required />
                  <br />
                  <label>Document Name</label>
                  <input className="form-control" value = {this.state.info.doc} name="doc" type="Name"  placeholder="Marksheet of 10th" onChange={this.handleChange} id="doc" required />
                  <br />
                  <label>Applicant Id</label>
                  <input className="form-control" value = {this.state.info.applicantid} name="applicantid" placeholder={123456789} type="number" max={75} min={10} id="applicantid" onChange={this.handleChange} required />
                  <br />
                  <label>Description</label>
                  <input className="form-control" value = {this.state.info.desc} name="desc" type="Text Area"  onChange={this.handleChange} placeholder="Has secured rank1 in 10th std" id="desc" required />
                  <br />
                  <label>Type of Document</label>
                  <input className="form-control" value = {this.state.info.type} name="type" placeholder={123456789} type="number" max={75} min={10} onChange={this.handleChange} id="type" required />
                  <br />
                  <label>Issue Date</label>
                  <input className="form-control" value = {this.state.info.datecreated} name="datecreated" placeholder="12-12-21" type="date" id="datecreated" onChange={this.handleChange} required />
                  <br />
                  <center>
                    <button id="submitbutton">
                      Generate Certificate
                    </button>
                  </center>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="container-fluid certificate" style={{border: '1px solid black', padding: '2%', textAlign: 'center', backgroundColor: 'white', marginTop: '5%', borderRadius: '16px'}}>
              <h2 style={{color: '#227093'}}>EduCert Certificate</h2>
              <i className="fa fa-certificate" style={{fontSize: '150px', color: '#227093'}} />
              <h2 style={{textTransform: 'uppercase'}}>
                <span id="ddoc" /> {this.state.info.doc}
              </h2>
              <br />
              <h3 style={{fontSize: '25px'}}>
                <span id="dname" /> {this.state.info.name}
              </h3>
              <br />
              <h2 style={{fontSize: '20px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>
                <span id="ddesc" /> {this.state.info.desc}
              </h2>
              <br />
              <h2 style={{fontSize: '20px'}}>
                On Date : &nbsp;<span id="ddatecreated" /> {this.state.info.datecreated}
              </h2>
              <br />
            </div><br />
            <center>
              <input type="button" id="create_pdf" defaultValue="Generate PDF" />
            </center>
          </div>
        </div>
      </div>
            </React.Fragment>
        );
    }
}
 
export default OrganizationUploadDocument;