import React, { Component } from 'react';
import Navbar from './navbar';

class OrganizationDashboard extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Navbar/>
                <div style={{margin: 10, backgroundColor: 'white', padding: 10}}>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Document Name</th>
                            <th scope="col">Student Id</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Date of Issue</th>
                            <th scope="col">Type of Document</th>
                            <th scope="col">Preview</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Complete Web Developer</td>
                            <td>#123</td>
                            <td>Yash Deorah</td>
                            <td>23/11/2021</td>
                            <td>MOOC Certificate</td>
                            <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                Preview
                            </button></td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>U&I Volunteering 2021</td>
                            <td>#124</td>
                            <td>Ronak Desai</td>
                            <td>18/09/2021</td>
                            <td>Professional Certificate</td>
                            <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                Preview
                            </button></td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>KJSCE Transcripts - 3rd year</td>
                            <td>#523</td>
                            <td>Sanyam Gandhi</td>
                            <td>02/08/2021</td>
                            <td>Transcripts</td>
                            <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                Preview
                            </button></td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Deep Learning A-Z</td>
                            <td>#512</td>
                            <td>Manish Parihar</td>
                            <td>08/02/2021</td>
                            <td>MOOC Certificate</td>
                            <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                Preview
                            </button></td>
                        </tr>

                        <tr>
                            <th scope="row">5</th>
                            <td>IBM Data Scientist</td>
                            <td>#881</td>
                            <td>Jay Maru</td>
                            <td>11/12/2020</td>
                            <td>Professional Certificate</td>
                            <td><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                                Preview
                            </button></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
 
export default OrganizationDashboard;