import React, { Component } from 'react';
import { getOrganizationById } from '../../services/organizationService';
import '../login.css'

class OrganizationProfile extends Component {
    state = {
        organization : getOrganizationById("54321")
    };

    render() {
        const { organization } = this.state;
        return (
            <React.Fragment>
                <div className="forms">
                    <form>
                    <center><h4> Profile </h4></center><br/>
                    <div className="input-field">
                        <label htmlFor="id">Id</label>
                        <input type="id" name="id" value={organization._id} disabled/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={organization.email} disabled/>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name="fullName" value={organization.name} disabled/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={""} disabled/>
                        <label htmlFor="pincode">Pin/Zip Code</label>
                        <input type="text" name="pincode" value={""} disabled/>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" value={""} disabled/>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={""} disabled/>
                        <label htmlFor="type">Type</label>
                        <input type="text" name="type" value={""} disabled/>
                        <label htmlFor="contactNumber">Mobile Number</label>
                        <input type="number" name="contactNumber" value={""} disabled/>
                    </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default OrganizationProfile;