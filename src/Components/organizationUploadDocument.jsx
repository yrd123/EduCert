import React, { Component } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './login.css'
import { getApplicantById } from '../services/applicantService';


class OrganizationUploadDocument extends Component {
    state = {
        info: { organizationId: '', applicantId: '', applicantEmail: '', applicantOrganizationId: '', documentName: 'yash deorah', documentDescription: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage:'' },
        openOrganizationPreviewModal : false, 
        openApplicantPreviewModal : false, 
        openCertificateModal : false,
        applicant : {
          _id:'', email:'', name:''
        },
        errors : {}
    };

    handleValidation() {
      let info = this.state.info;
      let errors = {};
      let formIsValid = true;
  
  
      //applicantOrganizationId
      if (!info["applicantOrganizationId"]) {
        formIsValid = false;
        errors["applicantOrganizationId"] = "applicantOrganizationId Cannot be empty";
      }
      else if (typeof info["applicantOrganizationId"] !== "undefined") {
        if (!info["applicantOrganizationId"].match(/^[a-zA-Z0-9]*$/)) {
          formIsValid = false;
          errors["applicantOrganizationId"] = "ApplicantOrganizationId should contain only Letters and numbers";
        }
      }

      //documentName
      if (!info["documentName"]) {
        formIsValid = false;
        errors["documentName"] = "DocumentName Cannot be empty";
      }

      //applicantId
      if (!info["applicantId"]) {
        formIsValid = false;
        errors["applicantId"] = "applicantId Cannot be empty";
      }
  
      this.setState({ errors: errors });
      return formIsValid;
    };


    handleSubmit = e => {
        e.preventDefault();

        if (this.handleValidation()) {
          
      console.log("valid") ;
        } else {
          
      console.log("invalid") ;
          return;
        }

        //call the server
        console.log(this.state.info);
    };

    handleChange = e => {
        const info = { ...this.state.info };
        info[e.currentTarget.name] = e.currentTarget.value;
        if(e.currentTarget.name === "applicantId"){
          let applicant = getApplicantById(e.currentTarget.value);
          if(applicant)
              this.setState({ info , applicant });
          else
              this.setState({ info });
        }
        else{
            this.setState({ info });
        }
    };

    handleOpenOrganizationPreviewModal = () => this.setState({openOrganizationPreviewModal:true});
    handleCloseOrganizationPreviewModal = () => this.setState({openOrganizationPreviewModal:false});

    handleOpenApplicantPreviewModal = () => this.setState({openApplicantPreviewModal:true});
    handleCloseApplicantPreviewModal = () => this.setState({openApplicantPreviewModal:false});

    handleOpenCertificateModal = () => this.setState({openCertificateModal:true});
    handleCloseCertificateModal = () => this.setState({openCertificateModal:false});


    render() {
      const modalPreviewStyle = {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow:'scroll',
        height:'70%'
      };
      
        return (
            <React.Fragment>
                <div className="forms">
                    <br />
                    <form onSubmit={this.handleSubmit}>  
                        <label>Organization Id</label>{/*autofilled*/}   
                        <div className='row'> 
                          <div className="col-8">
                          <input className="form-control" value={this.state.info.organizationId} name="organizationId" placeholder="112345" id="organizationId" disabled />
                          </div>
                          <div className="col-4">
                            <button type="button" onClick={this.handleOpenOrganizationPreviewModal} className="btn btn-success">&nbsp;&nbsp;Organization Details&nbsp;&nbsp;</button>
                          </div>
                        </div>

                        <Modal
                          open={this.state.openOrganizationPreviewModal}
                          onClose={this.handleCloseOrganizationPreviewModal}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={modalPreviewStyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              <center><h4>Organization Details</h4></center>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="forms" style={{margin : 0, width:'100%'}}>
                              <form> 
                                <label>Organization Id</label>{/*autofilled*/}    
                                <input className="form-control" value={this.state.info.organizationId} name="organizationId" placeholder="112345" type="number" id="organizationId" required disabled/>
                                <label>Organization Email</label> 
                                <input className="form-control" value={this.state.info.applicantEmail} name="organizationEmail" placeholder="a@gmail.com" type="email" id="organizationEmail" required />
                                <br />
                              </form>
                            </div>
                            </Typography>
                          </Box>
                        </Modal>

                        <br/><center><h4> Applicant Details </h4></center><br/>
                      
                        <label>Applicant Id</label> 
                        <div className='row'> 
                          <div className="col-8">
                            <input className="form-control" value={this.state.info.applicantId} name="applicantId" placeholder={123456789} type="number" id="applicantId" onChange={this.handleChange} required />
                          </div>

                          <div className="col-4">
                            <button type="button" onClick={this.handleOpenApplicantPreviewModal} className="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;Applicant Details&nbsp;&nbsp;&nbsp;&nbsp;</button>
                          </div>
                        </div>
                        {
                          this.state.errors["applicantId"] &&
                          <div class="alert alert-danger" role="alert">
                            {this.state.errors["applicantId"]}
                          </div>
                        }


                        <Modal
                          open={this.state.openApplicantPreviewModal}
                          onClose={this.handleCloseApplicantPreviewModal}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                 
                 >
                          <Box sx={modalPreviewStyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              <center><h4>Applicant Details</h4></center>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="forms" style={{margin : 0, width:'100%'}}>
                                <label>Applicant Id</label> 
                                <input className="form-control" value={this.state.applicant._id} name="applicantId" type="text" id="applicantId" required disabled/>
                                <label>Applicant Email</label> 
                                <input className="form-control" value={this.state.applicant.email} name="applicantEmail" type="text" id="applicantEmail" required disabled/>
                                <label>Applicant Name</label> 
                                <input className="form-control" value={this.state.applicant.name} name="applicantName" type="text" id="applicantName" required disabled/>
                                <br />
                            </div>
                            </Typography>
                          </Box>
                        </Modal>

                        <label>Applicant Organization Identification Number</label>
                        <input className="form-control" value={this.state.info.applicantOrganizationId} name="applicantOrganizationId" placeholder={"Roll No, Seat No, etc"} type="text" id="applicantOrganizationId" onChange={this.handleChange} required />
                        {
                          this.state.errors["applicantOrganizationId"] &&
                          <div class="alert alert-danger" role="alert">
                            {this.state.errors["applicantOrganizationId"]}
                          </div>
                        }


                        <br/><center><h4> Document Details </h4></center><br/>

                        <label>Document Name</label>
                        <input className="form-control" value={this.state.info.documentName} name="documentName" type="text" placeholder="Marksheet" onChange={this.handleChange} id="documentName" required />
                        {
                          this.state.errors["documentName"] &&
                          <div class="alert alert-danger" role="alert">
                            {this.state.errors["documentName"]}
                          </div>
                        }




                        <label>Document Description</label>
                        <input className="form-control" value={this.state.info.documentDescription} name="documentDescription" type="Text Area" onChange={this.handleChange} placeholder="Has secured rank1 in 10th std" id="desc" />
                        
                        <label>Date Of Accomplishment(End Date)</label>
                        <input className="form-control" value={this.state.info.dateOfAccomplishment} name="dateOfAccomplishment" type="date" onChange={this.handleChange} id="dateOfAccomplishment" required />
                        
                        <label>Tenure(In years)</label>
                        <input className="form-control" value={this.state.info.tenure} name="tenure" type="number" placeholder="2" onChange={this.handleChange} id="tenure" required />
                                                
                        <label>Percentage/GPA</label>
                        <input className="form-control" value={this.state.info.percentage} name="percentage" type="number" placeholder="90/3.8" onChange={this.handleChange} id="percentage" />
                
                        <label>Out of Percentage/GPA</label>
                        <input className="form-control" value={this.state.info.outOfPercentage} name="outOfPercentage" type="number" placeholder="100/4" onChange={this.handleChange} id="outOfPercentage" />
                        
                        <label>Softcopy Of Document</label>
                        <input type="file" className="form-control" name="type" placeholder={'Submit Copy Of Document'} id="type" required />
                        <center><h5>OR</h5></center><br/>
                        <center>
                            <input type="button" onClick={this.handleOpenCertificateModal} className="button" value="Generate Certificate And Upload" />
                        </center>

                        <center>
                            <input type="submit" onClick={this.handleSubmit}  className="button" value="Submit" />
                        </center>

                        <Modal
                          open={this.state.openCertificateModal}
                          onClose={this.handleCloseCertificateModal}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={modalPreviewStyle}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              <center><h4>Details</h4></center>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="container-fluid certificate" style={{border: '1px solid black', padding: '2%', textAlign: 'center', backgroundColor: 'white', marginTop: '5%', borderRadius: '16px'}}>
                              <h2 style={{color: '#227093'}}>EduCert Certificate</h2>
                              <i className="fa fa-certificate" style={{fontSize: '150px', color: '#227093'}} />
                              <h2 style={{textTransform: 'uppercase'}}>
                                <span id="ddoc" /> {this.state.info.documentName}
                              </h2>
                              <br />
                              <h3 style={{fontSize: '25px'}}>
                                <span id="dname" /> {this.state.info.applicantEmail}
                              </h3>
                              <br />
                              <h2 style={{fontSize: '20px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'}}>
                                <span id="ddesc" /> {this.state.info.documentDescription}
                              </h2>
                              <br />
                              <h2 style={{fontSize: '20px'}}>
                                On Date : &nbsp;<span id="ddatecreated" /> {this.state.info.datecreated}
                              </h2>
                              <br />
                            </div>
                            </Typography>
                          </Box>
                        </Modal>
                        <br />

                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default OrganizationUploadDocument;