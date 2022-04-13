// import React, { Component } from 'react';

// class VerifyDocument extends Component {
//     state = {  } 
//     render() { 

        

//         return (
//             <>
//             hello
//             </>
//         );
//     }
// }
 
// export default VerifyDocument;

import {useLocation} from 'react-router-dom'
import Modal from '@mui/material/Modal';
import React from 'react';

export default function VerifyDocument() {
    let location = useLocation();
    const { document } = location.state;
    console.log(document);
    return (
        <React.Fragment>
            <div className="forms">
                    <br />
                    <form>  
                        <label>Organization Id</label> 
                        <div className='row'> 
                          <div className="col-12">
                            <input className="form-control" value={document.organizationId} name="organizationId" placeholder="112345" type="number" id="organizationId" disabled />
                          </div>
                          {/* <div className="col-4">
                            <button type="button" onClick={this.handleOpenOrganizationPreviewModal} className="btn btn-success">&nbsp;&nbsp;Organization Details&nbsp;&nbsp;</button>
                          </div> */}
                        </div>

                        <br/><center><h4> Applicant Details </h4></center><br/>
                      
                        <label>Applicant Id</label> 
                        <div className='row'> 
                          <div className="col-12">
                            <input className="form-control" value={document.applicantId} name="applicantId" id="applicantId"  disabled />
                          </div>

                          {/* <div className="col-4">
                            <button type="button" onClick={this.handleOpenApplicantPreviewModal} className="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;Applicant Details&nbsp;&nbsp;&nbsp;&nbsp;</button>
                          </div> */}
                        </div>

                        <label>Applicant Organization Identification Number</label>
                        <input className="form-control" value={document.applicantOrganizationId} name="applicantOrganizationId" placeholder={"Roll No, Seat No, etc"} type="text" id="applicantOrganizationId"  disabled />

                        <br/><center><h4> Document Details </h4></center><br/>

                        <label>Document Name</label>
                        <input className="form-control" value={document.documentName} name="documentName" type="text" placeholder="Marksheet"  id="documentName" disabled />

                        <label>Document Description</label>
                        <input className="form-control" value={document.documentDescription} name="documentDescription" type="Text Area"  placeholder="Has secured rank1 in 10th std" id="desc" />
                        
                        <label>Date Of Accomplishment(End Date)</label>
                        <input className="form-control" value={document.dateOfAccomplishment} name="dateOfAccomplishment" type="date"  id="dateOfAccomplishment" disabled />
                        
                        <label>Tenure(In years)</label>
                        <input className="form-control" value={document.tenure} name="tenure" type="number" placeholder="2"  id="tenure" disabled />
                                                
                        <label>Percentage/GPA</label>
                        <input className="form-control" value={document.percentage} name="percentage" type="number" placeholder="90/3.8"  id="percentage" />
                
                        <label>Out of Percentage/GPA</label>
                        <input className="form-control" value={document.outOfPercentage} name="outOfPercentage" type="number" placeholder="100/4"  id="outOfPercentage" />
                        
                        <label>Softcopy Of Document</label>
                        <input type="file" className="form-control" name="type" placeholder={'Submit Copy Of Document'} id="type" disabled />
                        
                        <center>
                            <input type="submit"  className="button" value="Verify" />
                        </center>
                        <br />

                    </form>
                </div>
            </React.Fragment>

    );
}