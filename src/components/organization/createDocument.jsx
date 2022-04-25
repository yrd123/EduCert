import React, { Component } from 'react';
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateVerifiedDocument extends Component {
    state = {
        data: { documentId: '', applicantId: '', applicantName: '', applicantOrganizationNumber: '',  documentName: '', description: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage: '' },
        loaderData: { selectedFile: null }
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
          const msg = "Only 3 images can be uploaded at a time";
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
          this.setState({ loaderData: {
            selectedFile: files,
            // loaded: 0,
          }});
        }
      };

    handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        for (var x = 0; x < this.state.loaderData.selectedFile.length; x++) {
          data.append("file", this.state.loaderData.selectedFile[x]);
        }
        data.append('data', JSON.stringify(this.state.data));

        console.log([...data]);
        fetch("http://localhost:4000/createVerifiedDocument", {
            method: "POST",
            // body: JSON.stringify({ "data": this.state.data , "file": file}),
            body: data,
            headers: {  "x-auth-token": localStorage.getItem("eduCertJwtToken") }
        })
        .then(response => response.json())
        .then((res) => {
            // then print response status
            toast.success("upload success");
          })
          .catch((err) => {
            // then print response status
            toast.error("upload fail");
          });
        // this.setState({ data: { documentId: '', applicantId: '', applicantName: '', applicantOrganizationNumber: '', documentName: '', description: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage: '' } })

    };

    render() {

        return (
            <React.Fragment>
              
                <div className="forms">
                  
                    <br /><center><h4>  Details </h4></center><br />
                    <div class="alert alert-danger" role="alert">
                      <center>Hello </center>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Document Id</label>
                        <input className="form-control" name="documentId" id="documentId" onChange={this.handleChange} value={this.state.data.documentId} type="text" placeholder="123" required />

                        <label>Applicant Id</label>
                        <input className="form-control" name="applicantId" id="applicantId" onChange={this.handleChange} value={this.state.data.applicantId} type="text" placeholder="1814078" required />

                        <label>Applicant Name</label>
                        <input className="form-control" name="applicantName" id="applicantName" onChange={this.handleChange} value={this.state.data.applicantName} type="text" placeholder="Sanyam Gandhi" required />

                        <label>Applicant Organization Number</label>
                        <input className="form-control" name="applicantOrganizationNumber" id="applicantOrganizationNumber" onChange={this.handleChange} value={this.state.data.applicantOrganizationNumber} type="text" placeholder="6QAZ" required />

                        <label>Document Name</label>
                        <input className="form-control" name="documentName" id="documentName" onChange={this.handleChange} value={this.state.data.documentName} type="text" placeholder="Marksheet" required />

                        <label>Document Description</label>
                        <input className="form-control" name="description" id="description" onChange={this.handleChange} value={this.state.data.description} type="text" placeholder="Marksheet of 10th std" required />

                        <label>Date Of Accomplishment(End Date)</label>
                        <input className="form-control" name="dateOfAccomplishment" id="dateOfAccomplishment" onChange={this.handleChange} value={this.state.data.dateOfAccomplishment} type="text" placeholder="24-11-2016" required />

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

                        <center>
                            <input type="submit" className="button" value="Submit" />
                        </center>
                    </form>

                </div>
            </React.Fragment>
        );
    }
}

export default CreateVerifiedDocument;