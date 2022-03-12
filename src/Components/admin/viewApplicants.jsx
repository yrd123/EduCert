import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import SearchBar from '../common/searchBar';
import { getAllApplicants } from '../../services/applicantService';


class ViewApplicants extends Component {
    state = { 
        applicants : getAllApplicants(),
        currentPage : 1,
        pageSize : 4,
        sorting : { property : "name", order : "asc" },
        searchText  : ""
    };

    handlePageChange = page => {
        this.setState({currentPage : page});
    }

    sort(property){
        if(this.state.sorting.property === property){
            const order = (this.state.sorting.order === "asc") ? "desc" : "asc";
            this.setState({sorting : { property , order}});
        }
        else
            this.setState({sorting : { property , order : "asc"}});
    }

    renderSortIcon = property => {
        if(property !== this.state.sorting.property) return null;
        if(this.state.sorting.order === "asc") return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }
    
    search = searchText => {
        console.log(searchText);
        this.setState({searchText});
    }

    render() { 
        const {currentPage, pageSize, applicants, sorting, searchText} = this.state;
        let filteredApplicants = applicants.filter(applicant => {
            for(let property in applicant){
                console.log(property);
                if(applicant[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedApplicants = _.orderBy(filteredApplicants,[sorting.property],[sorting.order]);
        const paginatedApplicants = paginate(sortedApplicants, currentPage, pageSize);
        
          
        return (
            <>
                <div style={{margin: 10, backgroundColor: 'white', padding: 40}}>
                <center><h4> Applicants</h4></center><br/>

                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <table className="table table-striped">
                        <thead className=''>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => this.sort("_id")} scope="col">Document Id {this.renderSortIcon("_id")}</th>
                            <th className="clickable" onClick={() => this.sort("name")} scope="col">Name {this.renderSortIcon("name")}</th>
                            <th className="clickable" onClick={() => this.sort("email")} scope="col">Email {this.renderSortIcon("email")}</th>
                            <th className="clickable" onClick={() => this.sort("address")} scope="col">Address {this.renderSortIcon("address")}</th>
                            <th className="clickable" onClick={() => this.sort("pin")} scope="col">Pin/Zip Code {this.renderSortIcon("pin")}</th>
                            <th className="clickable" onClick={() => this.sort("state")} scope="col">State {this.renderSortIcon("state")}</th>
                            <th className="clickable" onClick={() => this.sort("country")} scope="col">Country {this.renderSortIcon("country")}</th>
                            <th className="clickable" onClick={() => this.sort("contact")} scope="col">Contact No. {this.renderSortIcon("contact")}</th>
                            <th className="clickable" onClick={() => this.sort("dateOfBirth")} scope="col">Date Of Birth {this.renderSortIcon("dateOfBirth")}</th>
                        </tr>
                        </thead>
                        <tbody>    
                        { paginatedApplicants.map((applicant,index) => 
                            <tr key={applicant._id}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{applicant._id}</td>
                                <td>{applicant.name}</td>
                                <td>{applicant.email}</td>
                                <td>{applicant.address}</td>
                                <td>{applicant.pin}</td>
                                <td>{applicant.state}</td>
                                <td>{applicant.country}</td>
                                <td>{applicant.contact}</td>
                                <td>{applicant.dateOfBirth}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    
                    <Pagination 
                        itemsCount={filteredApplicants.length} 
                        pageSize={this.state.pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>

            </>
        );
    }
}
 
export default ViewApplicants;