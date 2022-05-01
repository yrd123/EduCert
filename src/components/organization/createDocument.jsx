import React, { Component } from 'react';
import { Progress } from "reactstrap";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from '../../config.json';
const url = String(backend.backend) + "";

class CreateVerifiedDocument extends Component {
  state = {
    data: { documentId: '', applicantId: '', applicantName: '', applicantOrganizationNumber: '', documentName: '', description: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage: '' },
    loaderData: { selectedFile: null },
    uploadError: '',
    errors: {},
    openCertificateModal : false
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });

  };

  checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = [];
    // list allow mime type
    const types = ["image/png",
      //  "image/jpeg"
    ];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + " is not a supported format\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  maxSelectFile = (event) => {
    let files = event.target.files;
    if (files.length > 1) {
      const msg = "Only 1 images can be uploaded at a time";
      event.target.value = null;
      toast.warn(msg);
      return false;
    }
    return true;
  };
  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 1000000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + " is too large, please pick a smaller file\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  onFileChangeHandler = (event) => {
    var files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      // if return true allow to setState
      this.setState({
        loaderData: {
          selectedFile: files,
          // loaded: 0,
        }
      });
    }
  };


  handleValidation() {
    let data = this.state.data;
    let errors = {};
    let formIsValid = true;

    //Id
    if (!data["documentId"]) {
      formIsValid = false;
      errors["documentId"] = "Doc Id Cannot be empty";
    }

    if (!data["applicantId"]) {
      formIsValid = false;
      errors["applicantId"] = "Applicant Id Cannot be empty";
    }

    if (!data["applicantName"]) {
      formIsValid = false;
      errors["applicantName"] = "Applicant Name Cannot be empty";
    }

    if (!data["applicantOrganizationNumber"]) {
      formIsValid = false;
      errors["applicantOrganizationNumber"] = "ApplicantOrganizationNumber Cannot be empty";
    }

    if (!data["documentName"]) {
      formIsValid = false;
      errors["documentName"] = "Document Name Cannot be empty";
    }


    if (!data["dateOfAccomplishment"]) {
      formIsValid = false;
      errors["dateOfAccomplishment"] = "Date Of Accomplishment Cannot be empty";
    }


    this.setState({ errors: errors });
    return formIsValid;
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.handleValidation())
    if (this.handleValidation()) {
      const data = new FormData();
      for (var x = 0; x < this.state.loaderData.selectedFile.length; x++) {
        data.append("file", this.state.loaderData.selectedFile[x]);
      }
      data.append('data', JSON.stringify(this.state.data));

      console.log([...data]);
      fetch(url + "/createVerifiedDocument", {
        method: "POST",
        // body: JSON.stringify({ "data": this.state.data , "file": file}),
        body: data,
        headers: { "x-auth-token": localStorage.getItem("eduCertJwtToken") }
      })
        .then(response => {
          if (response.ok)
            return response.text();
          else {
            return response.text().then(text => { throw new Error(text) })
          }
        })
        .then((res) => {
          // then print response status
          this.setState({ uploadError: '' })
          toast.success("upload success");
          window.location = '/organization/dashboard';
        })
        .catch((err) => {
          // then print response status
          toast.error("upload fail");
          this.setState({ uploadError: err.message })
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }
    else {
      return;
    }
    // this.setState({ data: { documentId: '', applicantId: '', applicantName: '', applicantOrganizationNumber: '', documentName: '', description: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage: '' } })

  }

  handleOpenCertificateModal = () => this.setState({openCertificateModal:true});
  handleCloseCertificateModal = () => this.setState({openCertificateModal:false});


  render() {
    const modalPreviewStyle = {
      position: 'absolute',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 900,
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

          <br /><center><h4>  Details </h4></center><br />
          {this.state.uploadError &&
            <div class="alert alert-danger" role="alert">
              <center>{this.state.uploadError}</center>
            </div>}
          <form onSubmit={this.handleSubmit}>
            <label>Document Id</label>
            <input className="form-control" name="documentId" id="documentId" onChange={this.handleChange} value={this.state.data.documentId} type="text" placeholder="123" />
            {this.state.errors['documentId'] &&
              <div class="alert alert-danger" role="alert">
                {this.state.errors["documentId"]}
              </div>
            }
            <label>Applicant Id</label>
            <input className="form-control" name="applicantId" id="applicantId" onChange={this.handleChange} value={this.state.data.applicantId} type="text" placeholder="1814078" />
            {this.state.errors['applicantId'] &&
              <div class="alert alert-danger" role="alert">
                {this.state.errors["applicantId"]}
              </div>
            }
            <label>Applicant Name</label>
            <input className="form-control" name="applicantName" id="applicantName" onChange={this.handleChange} value={this.state.data.applicantName} type="text" placeholder="Sanyam Gandhi" />
            {this.state.errors['applicantName'] &&
              <div class="alert alert-danger" role="alert">
                {this.state.errors["applicantName"]}
              </div>
            }
            <label>Applicant Organization Number</label>
            <input className="form-control" name="applicantOrganizationNumber" id="applicantOrganizationNumber" onChange={this.handleChange} value={this.state.data.applicantOrganizationNumber} type="text" placeholder="6QAZ" />
            {this.state.errors['applicantOrganizationNumber'] &&
              <div class="alert alert-danger" role="alert">
                {this.state.errors["applicantOrganizationNumber"]}
              </div>
            }
            <label>Document Name</label>
            <input className="form-control" name="documentName" id="documentName" onChange={this.handleChange} value={this.state.data.documentName} type="text" placeholder="Marksheet" />
            {this.state.errors['documentName'] &&
              <div class="alert alert-danger" role="alert">
                {this.state.errors["documentName"]}
              </div>
            }
            <label>Document Description</label>
            <input className="form-control" name="description" id="description" onChange={this.handleChange} value={this.state.data.description} type="text" placeholder="Marksheet of 10th std" />

            <label>Date Of Accomplishment(End Date)</label>
            <input className="form-control" name="dateOfAccomplishment" id="dateOfAccomplishment" onChange={this.handleChange} value={this.state.data.dateOfAccomplishment} type="text" placeholder="24-11-2016" />
            {this.state.errors['dateOfAccomplishment'] &&
              <div class="alert alert-danger" role="alert">
                {this.state.errors["dateOfAccomplishment"]}
              </div>
            }
            <label>Tenure(In years)</label>
            <input className="form-control" name="tenure" id="tenure" onChange={this.handleChange} value={this.state.data.tenure} type="text" placeholder="2 Year" />

            <label>Percentage/GPA</label>
            <input className="form-control" name="percentage" id="percentage" onChange={this.handleChange} value={this.state.data.percentage} type="text" placeholder="79" />

            <label>Out of Percentage/GPA</label>
            <input className="form-control" name="outOfPercentage" id="outOfPercentage" onChange={this.handleChange} value={this.state.data.outOfPercentage} type="text" placeholder="100" />

            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group files">
                    <label>Upload Your File </label>
                    <input
                      type="file"
                      class="form-control"
                      multiple
                      onChange={this.onFileChangeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
            <center><b>OR</b></center><br />
            <center>
              <input type="button" onClick={this.handleOpenCertificateModal} className="button" value="Generate Certificate And Upload" />
            </center>
            <center>
              <input type="submit" className="button" value="Submit" />
            </center>

            <Modal
              open={this.state.openCertificateModal}
              onClose={this.handleCloseCertificateModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalPreviewStyle}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="container-fluid certificate" style={{ border: '1px solid black', padding: '2%', textAlign: 'center', backgroundColor: 'white', marginTop: '5%', borderRadius: '16px' }}>
                    <h2 style={{ color: '#227093' }}>{this.state.data.documentName}</h2><br/>
                    {/* <i className="fa fa-certificate" style={{ fontSize: '150px', color: '#227093' }} /> */}
                    <center>This certificate is presented to</center>
                    <h2>
                      <span id="ddoc" /> {this.state.data.applicantName}
                    </h2>
                    <br />
                    {
                      this.state.data.description && 
                      <h4 style={{ fontSize: '20px' }}>
                          <span id="dname" /> For {this.state.data.description}
                      </h4>
                    }
                    {
                      this.state.data.percentage && this.state.data.outOfPercentage &&
                      <h4 style={{ fontSize: '20px' }}>
                          <span id="dname" /> For scoring {this.state.data.percentage}/{this.state.data.outOfPercentage}
                      </h4>
                    }
                    <h2 style={{ fontSize: '20px' }}>
                      On Date : &nbsp;<span id="ddatecreated" /> <b>{this.state.data.dateOfAccomplishment}</b>
                    </h2>
                    {
                      this.state.data.tenure && 
                      <h4 style={{ fontSize: '20px' }}>
                          <span id="dname" /> In duration of <b>{this.state.data.tenure}</b>
                      </h4>
                    }
                    <br />
                    <div style={{ fontSize: '15px' }}>
                      <i class='fa fa-check-circle' style={{color:'green'}}></i> &nbsp;Authorized by "Somaiya"
                    </div>
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

export default CreateVerifiedDocument;