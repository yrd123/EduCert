import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import CenteredTabs from '../common/tabs';
import SearchBar from '../common/searchBar';
import { Link, useNavigate } from 'react-router-dom';


class ViewApplicants extends Component {
    state = { 
        applicants : [],
        applicantsStatus : "All",
        currentPage : 1,
        pageSize : 2,
        sorting : { property : "documentName", order : "asc" },
        searchText  : "",
        openApplicantModal: false
    };


    componentDidMount() {

        fetch("http://localhost:4000/getDocumentsSignedByOrganization", {
        method:"POST",
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
    })
    .then(response => response.json())
    .then((data) => this.setState({applicants:data}))
  
    
    }


    
    handleTabChange = tab =>{
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

    redirectToVerify = document =>{
        const navigate = useNavigate();
        navigate({pathname:'/organization/verify',state:{document}});
    }


    render() { 
        const {currentPage, applicantsStatus, pageSize, applicants, sorting, searchText} = this.state;
        let filteredDocuments = applicants;
        if(applicantsStatus !== "All")
            filteredDocuments = applicants.filter(document => document.status === applicantsStatus);
        filteredDocuments = filteredDocuments.filter(document => {
            for(let property in document){
                if(document[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedDocuments = _.orderBy(filteredDocuments,[sorting.property],[sorting.order]);
        const paginatedDocuments = paginate(sortedDocuments, currentPage, pageSize);
        
        return (
            <>
                <div style={{margin: 10, backgroundColor: 'white', padding: 30, paddingLeft: 120, paddingRight:120}}>
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <CenteredTabs tabs={["CurrentlyEnrolled","All"]} handleTabChange={this.handleTabChange} /><br />
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
                        { paginatedDocuments.map((document,index) => 
                            <tr key={document.documentId}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{document.applicantId}</td>
                                <td>{document.name}</td>
                                <td><button type="button" class="btn btn-success">View</button></td>   
                            </tr>
                        )}
                        </tbody>
                    </table>
                    
                    <Pagination 
                        itemsCount={filteredDocuments.length} 
                        pageSize={this.state.pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>

                    
                </div>
            </>
        );
    }
}
 
export default ViewApplicants;