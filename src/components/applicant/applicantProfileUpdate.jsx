import React, { Component } from 'react';
import { getApplicantById } from '../../services/applicantService';
import '../login.css'
import { NavLink } from 'react-router-dom';

class ApplicantProfileUpdate extends Component {
    state = {
        applicant : getApplicantById("11111")
    };

    render() {
        const { applicant } = this.state;
        return (
            <React.Fragment>
                <div className="forms">
                    <form>
                    <center><h4> Profile </h4></center><br/>
                    <div className="input-field">
                        <label htmlFor="id">Id</label>
                        <input type="id" name="id" value={applicant._id} disabled/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={applicant.email} />
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" value={applicant.name} disabled/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={""} />
                        <label htmlFor="pincode">Pin/Zip Code</label>
                        <input type="text" name="pincode" value={""} />
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" value={""} />
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={""} />
                        <label htmlFor="contactNumber">Mobile Number</label>
                        <input type="number" name="contactNumber" value={""} />
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" value={""} />

                        <input type="submit" value="SUBMIT" className="button" />
              
                    </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantProfileUpdate;