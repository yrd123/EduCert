import React, { Component } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './login.css'
import Navbar from './navbar';
import { getOrganizationById } from '../services/organizationService';



class ApplicantUploadDocument extends Component {
    state = {
        info: { organizationId: 123, applicantId: '', applicantEmail: '', applicantOrganizationId: '', documentName: 'yash deorah', documentDescription: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage:'' },
        openOrganizationPreviewModal : false, 
        openApplicantPreviewModal : false,
        organization : {
            _id:'', email:'', name:''
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        //call the server
        console.log(this.state.info);
    };

    handleChange = e => {
        const info = { ...this.state.info };
        info[e.currentTarget.name] = e.currentTarget.value;
        if(e.currentTarget.name === "organizationId"){
            let organization = getOrganizationById(e.currentTarget.value);
            if(organization)
                this.setState({ info , organization });
            else
                this.setState({ info });
        }
        else{
            this.setState({ info });
        }
       
    };

    handleOrganizationDetails() {
        // if(e.currentTarget.name === "organizationId"){
        //     let organization = getOrganizationById(e.currentTarget.value);
        //     if(organization)
        //     this.setState({ info , organization });
        // }
    }

    handleOpenOrganizationPreviewModal = () => this.setState({openOrganizationPreviewModal:true});
    handleCloseOrganizationPreviewModal = () => this.setState({openOrganizationPreviewModal:false});

    handleOpenApplicantPreviewModal = () => this.setState({openApplicantPreviewModal:true});
    handleCloseApplicantPreviewModal = () => this.setState({openApplicantPreviewModal:false});

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
                <Navbar />
                <div className="forms">
                    <br />
                    <form onSubmit={this.handleSubmit}> 
                      
                        <label>Applicant Id</label> 
                        <div className='row'> 
                          <div className="col-8">
                            <input className="form-control" value={this.state.info.applicantId} name="applicantId" placeholder={123456789} type="number" id="applicantId" required disabled/>
                          </div>
                          <div className="col-4">
                            <button type="button" onClick={this.handleOpenApplicantPreviewModal} className="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;Applicant Details&nbsp;&nbsp;&nbsp;&nbsp;</button>
                          </div>
                        </div>
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
                              <form onSubmit={this.handleSubmit}> 
                                <label>Applicant Id</label> 
                                <input className="form-control" value={this.state.info.applicantId} name="applicantId" placeholder={123456789} type="number" id="applicantId" required />
                                <label>Applicant Email</label> 
                                <input className="form-control" value={this.state.info.applicantEmail} name="applicantEmail" placeholder="a@email.com" type="email" id="applicantEmail" required />
                                <br />
                              </form>
                            </div>
                            </Typography>
                          </Box>
                        </Modal>

                        <label>Applicant Organization Identification Number</label>
                        <input className="form-control" value={this.state.info.applicantOrganizationId} name="applicantOrganizationId" placeholder={"Roll No, Seat No, etc"} type="text" id="applicantOrganizationId" onChange={this.handleChange} required />
                        
                        <br/><center><h4> Organization Details </h4></center><br/>
                        
                        <label>Organization Id</label>
                        <div className='row'> 
                          <div className="col-8">
                            <input className="form-control" value={this.state.info.organizationId} name="organizationId" type="number" onChange={this.handleChange} id="organizationId" required />
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
                              
                                <label>Organization Id</label>{/*autofilled*/}    
                                <input className="form-control" value={this.state.organization._id} name="organizationId" placeholder="112345" type="number" id="organizationId" required disabled/>
                                <label>Organization Email</label> 
                                <input className="form-control" value={this.state.organization.email} name="organizationEmail" placeholder="a@gmail.com" type="text" id="organizationEmail" required disabled/>
                                <label>Organization Name</label> 
                                <input className="form-control" value={this.state.organization.name} name="organizationName" placeholder="a@gmail.com" type="text" id="organizationName" required disabled/>
                                <br />
                            </div>
                            </Typography>
                          </Box>
                        </Modal>

                        <br/><center><h4> Document Details </h4></center><br/>

                        <label>Document Name</label>
                        <input className="form-control" value={this.state.info.documentName} name="documentName" type="text" placeholder="Marksheet" onChange={this.handleChange} id="documentName" required />

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

                        <center>
                            <input type="submit" onClick={this.handleOpenPreviewModal} className="button" value="Send For Verification" />
                        </center>

                        <br />

                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantUploadDocument;