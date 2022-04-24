import React, { Component } from "react";

class CreateSelfUploadedDocument extends Component {
    state = {
        data: {
            documentId: "",
            applicantName: "",
            applicantOrganizationNumber: "",
            organizationId: "",
            documentName: "",
            description: "",
            dateOfAccomplishment: "",
            tenure: "",
            percentage: "",
            outOfPercentage: ""
        },
    };

    handleChange = (e) => {
        const data = { ...this.state.data };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data);

        fetch("http://localhost:4000/createSelfUploadedDocument", {
            method: "POST",
            body: JSON.stringify({ data: this.state.data }),
            headers: {
                "Content-Type": "application/json",
                "x-auth-token":localStorage.getItem("eduCertJwtToken"),
            },
        }).then((response) => response.json());
    };

    render() {
        return (
            <React.Fragment>

                <div class="alert alert-danger" role="alert">
                <center>Hello </center>
                </div>
                <div className="forms">
                    <br />
                    <center>
                        <h4> Details </h4>
                    </center>
                    <br />

                    <form onSubmit={this.handleSubmit}>
                        <label>Document Id</label>
                        <input
                            className="form-control"
                            name="documentId"
                            id="documentId"
                            onChange={this.handleChange}
                            value={this.state.data.documentId}
                            type="text"
                            placeholder="123"
                            required
                        />

                        <label>Applicant Name</label>
                        <input
                            className="form-control"
                            name="applicantName"
                            id="applicantName"
                            onChange={this.handleChange}
                            value={this.state.data.applicantName}
                            type="text"
                            placeholder="Sanyam Gandhi"
                            required
                        />

                        <label>Applicant Organization Number</label>
                        <input
                            className="form-control"
                            name="applicantOrganizationNumber"
                            id="applicantOrganizationNumber"
                            onChange={this.handleChange}
                            value={this.state.data.applicantOrganizationNumber}
                            type="text"
                            placeholder="AB123"
                            required
                        />

                        <label>OrganizationId</label>
                        <input
                            className="form-control"
                            name="organizationId"
                            id="organizationId"
                            onChange={this.handleChange}
                            value={this.state.data.organizationId}
                            type="text"
                            placeholder="org1"
                            required
                        />

                        <label>Document Name</label>
                        <input
                            className="form-control"
                            name="documentName"
                            id="documentName"
                            onChange={this.handleChange}
                            value={this.state.data.documentName}
                            type="text"
                            placeholder="marksheet"
                            required
                        />

                        <label>Document Description</label>
                        <input
                            className="form-control"
                            name="description"
                            id="description"
                            onChange={this.handleChange}
                            value={this.state.data.description}
                            type="text"
                            placeholder="Marksheet of 10th std"
                            required
                        />

                        <label>Date Of Accomplishment(End Date)</label>
                        <input
                            className="form-control"
                            name="dateOfAccomplishment"
                            id="dateOfAccomplishment"
                            onChange={this.handleChange}
                            value={this.state.data.dateOfAccomplishment}
                            type="text"
                            placeholder="24-02-2016"
                            required
                        />

                        <label>Tenure(In years)</label>
                        <input
                            className="form-control"
                            name="tenure"
                            id="tenure"
                            onChange={this.handleChange}
                            value={this.state.data.tenure}
                            type="text"
                            placeholder="2 Year"
                        />

                        <label>Percentage/GPA</label>
                        <input
                            className="form-control"
                            name="percentage"
                            id="percentage"
                            onChange={this.handleChange}
                            value={this.state.data.percentage}
                            type="text"
                            placeholder="79"
                        />

                        <label>Out of Percentage/GPA</label>
                        <input
                            className="form-control"
                            name="outOfPercentage"
                            id="outOfPercentage"
                            onChange={this.handleChange}
                            value={this.state.data.outOfPercentage}
                            type="text"
                            placeholder="100"
                        />

                        <center>
                            <input type="submit" className="button" value="Submit" />
                        </center>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateSelfUploadedDocument;
