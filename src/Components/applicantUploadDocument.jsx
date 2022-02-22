import React, { Component } from 'react';
import './organizationUploadDocument.css'


class ApplicantUploadDocument extends Component {
    state = {
        info: { name: ' ', doc: ' ', applicantid: ' ', desc: ' ', type: ' ' , organizationid: ' ' , organizationname: ' ' }

    };

    handleSubmit = e =>{
        e.preventDefault() ;

        //call the server

        console.log(this.state.info) ;


    } ;

    handleChange = e => {
        const info = { ...this.state.info };
        info[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ info });
        
    };
    render() {
        return (
            <React.Fragment>

                <div style={{ margin: '10px', backgroundColor: 'white', padding: '10px' }}>
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="container-fluid" id="menu" style={{ paddingTop: '3%', paddingBottom: '2%' }}>
                                <div className="container box" style={{ maxWidth: '700px', borderRadius: '6px' }}>
                                    <div id="member" className="container-fluid menu row" style={{ padding: '2%' }}>
                                        <br />
                                        <center>
                                            <h4><b>Applicant Upload Form</b></h4>
                                        </center>
                                        <hr style={{ width: '50%' }} />
                                        <form onSubmit={this.handleSubmit}>
                                            
                                        <center><h3> Applicant Details </h3></center>
                                        <label>Applicant Id</label>
                                        <input className="form-control" value={this.state.info.applicantid} name="applicantid" placeholder={123456789} type="number"  id="applicantid" onChange={this.handleChange} required />
                                        <br />
                                        <label>Applicant Name</label>
                                        <input className="form-control" value={this.state.info.name} type="Name" name="name" placeholder="Sanyam Gandhi" onChange={this.handleChange} id="name" required />
                                        <br />
                                        
                                        <center><h3> Organization Details </h3></center>
                                        <label>Organization Id</label>
                                        <input className="form-control" value={this.state.info.organizationid} name="organizationid" placeholder="112345" type="number" id="organizationid" onChange={this.handleChange} required />
                                        <br />
                                        <label>Organization Name</label>
                                        <input className="form-control" value={this.state.info.organizationname} name="organizationname" placeholder="KJSCE" type="text" id="organizationname" onChange={this.handleChange} required />
                                        <br />
                                    
                                        <center><h3> Document Details </h3></center>
                                        <label>Document Name</label>
                                        <input className="form-control" value={this.state.info.doc} name="doc" type="Name" placeholder="Marksheet of 10th" onChange={this.handleChange} id="doc" required />
                                        <br />

                                        <label>Description</label>
                                        <input className="form-control" value={this.state.info.desc} name="desc" type="Text Area" onChange={this.handleChange} placeholder="Has secured rank1 in 10th std" id="desc" required />
                                        <br />
                                        <label>Type of Document</label>
                                        <input className="form-control" value={this.state.info.type} name="type" placeholder={123456789} type="text"  onChange={this.handleChange} id="type" required />
                                        <br />
                                        
                                        <label>Softcopy Of Document</label>
                                        <input type="file" className="form-control"  name="type" placeholder={'Submit Copy Of Document'}    id="type" required />
                                        <br />
                                        
                                        <center>
                                            <input type="submit" value = "Send For Verification" />
                                        </center>
                                        <br />

                                        </form> 
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantUploadDocument;