import React, { Component } from 'react';

class OrganizationUploadDocument extends Component {
    state = {  } 
    render() { 
        return (
            <div style="margin: 10px; background-color: white; padding: 10px">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="container-fluid" id="menu" style="padding-top: 3%; padding-bottom: 2%">
                        <div className="container box" style="max-width: 700px; border-radius: 6px">
                            <div id="member" className="container-fluid menu row" style="padding: 2%">
                            <br />
                            <center>
                                <h4><b>ENTER DETAILS</b></h4>
                            </center>
                            <hr style="width: 50%" />
                            <label>Applicant Name</label>
                            <input className="form-control" type="Name" name="member" placeholder="Sanyam Gandhi" onchange="change()" id="name" required />
                            <br />

                            <label>Document Name</label>
                            <input className="form-control" type="Name" name="member" placeholder="Marksheet of 10th" onchange="change()" id="doc" required />
                            <br />

                            <label>Applicant Id</label>
                            <input className="form-control" placeholder="123456789" type="number" max="75" min="10" id="applicantid" onchange="change()"
                                required />
                            <br />

                            <label>Description</label>
                            <input className="form-control" type="Text Area" name="member" onchange="change()" placeholder="Has secured rank1 in 10th std"
                                id="desc" required />
                            <br />

                            <label>Type of Document</label>
                            <input className="form-control" placeholder="123456789" type="number" max="75" min="10" onchange="change()"
                                required />
                            <br />

                            <label>Issue Date</label>
                            <input className="form-control" placeholder="12-12-21" type="date" id="datecreated" onchange="change()" required />
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

                        <div className="container-fluid certificate" style="border: 1px solid black; padding: 2%; text-align: center; background-color: white; margin-top: 5%; border-radius: 16px;">
                        <h2 style="color: #227093">EduCert Certificate</h2>
                        <i className="fa fa-certificate" style="font-size: 150px; color: #227093"></i>

                        <h2 style="text-transform: uppercase">
                            <span id="ddoc"></span>
                        </h2>
                        <br />

                        <h3 style="font-size: 25px">
                            <span id="dname"></span>
                        </h3>

                        <br />
                        <h2 style=" font-size: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                            <span id="ddesc"></span>
                        </h2>
                        <br />
                        
                        <h2 style="font-size: 20px;">
                            On Date : &nbsp;<span id="ddatecreated"></span>
                        </h2>
                        <br />
                        
                    </div><br/>
                    <center>
                        <input type="button" id="create_pdf" value="Generate PDF" />
                    </center>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default OrganizationUploadDocument;