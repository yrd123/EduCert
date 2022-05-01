import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import CenteredTabs from '../common/tabs';
import SearchBar from '../common/searchBar';
import { Link } from 'react-router-dom';
import backend from '../../config.json';
const url = String(backend.backend) + "";


class ViewApplicants extends Component {
    state = { 
        applicants : [
        ],
        applicantsStatus : "Current",
        currentPage : 1,
        pageSize : 5,
        sorting : { property : "applicantName", order : "asc" },
        searchText  : "",
        openApplicantModal: false,
        currentApplicants:[],
        allApplicants:[],
        fetchError:""
    };


    componentDidMount() {
        fetch(url+"/getCurrentlyEnrolledApplicants", {
        method:"POST",
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
            // console.log(response)
            if(response.ok)
              return response.json();
            else{
              return response.text().then(text => { throw new Error(text) })
            }
          })
        .then((data) => this.setState({currentApplicants :data, applicants:data}))
        .catch(err => {
            this.setState({fetchError:err.message});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }) 

        fetch(url+"/getAllApplicantsOfOrganization", {
        method:"POST",
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
        })
        .then(response => {
            // console.log(response)
            if(response.ok)
              return response.json();
            else{
              return response.text().then(text => { throw new Error(text) })
            }
          })
        .then((data) => this.setState({allApplicants :data, fetchError:''}))  
        .catch(err => {
            this.setState({fetchError:err.message});
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }) 
    }

    /*redirectToViewApplicantDocuments = applicantId =>{
        console.log(applicantId)
        const navigate = useNavigate();
        navigate({pathname:'/organization/viewApplicantDocuments/',state:{applicantId}});
    }*/

    
    
    handleTabChange = tab =>{
        if(tab === 'Current')
            this.setState({applicants:this.state.currentApplicants})
        else if(tab === 'All')
            this.setState({applicants:this.state.allApplicants})
        this.setState({applicantsStatus : tab, searchText : ""});
    }

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

    getStatusClass(status){
        return status === "Verified" ? "badge badge-success" : "badge badge-warning";
    }
    
    search = searchText => {
        console.log(searchText);
        this.setState({searchText});
    }

    render() { 
        const {currentPage, pageSize, applicants, sorting, searchText} = this.state;
        console.log(this.state.allApplicants)  

        let filteredApplicants = applicants;
        filteredApplicants = filteredApplicants.filter(applicant => {
            for(let property in applicant){
                if(applicant[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedApplicants = _.orderBy(filteredApplicants,[sorting.property],[sorting.order]);
        const paginatedApplicants = paginate(sortedApplicants, currentPage, pageSize);
        
        return (
            <>
                <div style={{margin: 10, backgroundColor: 'white', padding: 30, paddingLeft: 120, paddingRight:120}}>
                { this.state.fetchError &&
                            <div class="alert alert-danger" role="alert">
                            <center>{this.state.fetchError}</center>
                        </div>}
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <CenteredTabs tabs={["Current","All"]} handleTabChange={this.handleTabChange} /><br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => this.sort("applicantId")} scope="col">ApplicantId{this.renderSortIcon("applicantId")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantName")} scope="col">Applicant Name {this.renderSortIcon("applicantName")}</th>
                            <th scope="col">View</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>    
                        { paginatedApplicants.map((applicant,index) => 
                            <tr key={applicant.applicantId}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{applicant.applicantId}</td>
                                <td>{applicant.name}</td>
                                <td><Link to="/organization/viewApplicantDocuments" state={{applicantId:applicant.applicantId}}>
                                    <button type="button" class="btn btn-success">View</button> 
                                </Link></td>
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