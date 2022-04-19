import React, { Component } from 'react';

class CreateVerifiedDocuments extends Component {
    state = {
        info: { organizationId: 123, applicantId: '', applicantEmail: '', applicantOrganizationId: '', documentName: 'yash deorah', documentDescription: '', dateOfAccomplishment: '', tenure: '', percentage: '', outOfPercentage:'' },
        openOrganizationPreviewModal : false, 
        openApplicantPreviewModal : false,
        organization : {
            _id:'', email:'', name:''
        }
    };


   

   


     render() {
      
        return (
            <React.Fragment>
                <div className="forms">
                <br/><center><h4>  Details </h4></center><br/>

       
<label>Applicant Id</label>
<input className="form-control"  name="documentName" type="text" placeholder="Marksheet" onChange={this.handleChange} id="applicantId" required />
         

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

<center>
    <input type="submit" onClick={this.handleOpenPreviewModal} className="button" value="Send For Verification" />
</center>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default CreateVerifiedDocuments;