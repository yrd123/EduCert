import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import CustomModal from '../common/modal';
import CenteredTabs from '../common/tabs';
import SearchBar from '../common/searchBar';
import PreviewCertificate from '../common/previewCertificate';
import { Link } from 'react-router-dom';
import backend from '../../config.json';
const url = String(backend.backend) + "";

class OrganizationDashboard extends Component {
    state = { 
        documents : [],
        documentsStatus : "All",
        currentPage : 1,
        pageSize : 5,
        sorting : { property : "documentName", order : "asc" },
        searchText  : "",
        openApplicantModal: false,
        applicant:{},
        fetchError: ''
    };


    componentDidMount() {

        fetch(url+"/getDocumentsSignedByOrganization", {
        method:"POST",
        headers:{"Content-Type" : "application/json","x-auth-token":localStorage.getItem("eduCertJwtToken")}
    })
    .then(async response => {
        // console.log(response)
        if(response.ok)
          return response.json();
        else{
          return response.text().then(text => { throw new Error(text) })
        }
      })
      .then(data => {
          this.setState({documents:data, fetchError:''});
      })
      .catch(err => {
        this.setState({fetchError:err.message});
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
    }


    
    handleTabChange = tab =>{
        this.setState({documentsStatus : tab, searchText : ""});
    }

    handlePageChange = page => {
        this.setState({currentPage : page});
    }

    viewDocument = docUrl => {
        if(docUrl) window.open(docUrl);
        else alert("Document is either missing or is tampered");
    }

    sort(property){
        if(this.state.sorting.property === property){
            const order = (this.state.sorting.order === "asc") ? "desc" : "asc";
            this.setState({sorting : { property , order}});
        }
        else
            this.setState({sorting : { property , order : "asc"}});
    console.log(this.state.documents)

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

    /*redirectToVerify = document =>{
        const navigate = useNavigate();
        navigate({pathname:'/organization/verify',state:{document}});
    }
*/
    render() { 
        const {currentPage, documentsStatus, pageSize, documents, sorting, searchText} = this.state;
        let filteredDocuments = documents;
        if(documentsStatus !== "All")
            filteredDocuments = documents.filter(document => document.status === documentsStatus);
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
                <div style={{margin: 10, backgroundColor: 'white', padding: 30, paddingLeft: 5, paddingRight:5}}>
                {   this.state.fetchError && 
                            <div class="alert alert-danger" role="alert">
                            <center>{this.state.fetchError}</center>
                        </div>}
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <CenteredTabs tabs={["All","Verified","Self-Uploaded"]} handleTabChange={this.handleTabChange} /><br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th className="clickable" onClick={() => this.sort("documentId")} scope="col">DocumentId {this.renderSortIcon("documentId")}</th>
                            <th className="clickable" onClick={() => this.sort("documentName")} scope="col">DocumentName {this.renderSortIcon("documentName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantId")} scope="col">ApplicantId{this.renderSortIcon("applicantId")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantName")} scope="col">Applicant Name {this.renderSortIcon("applicantName")}</th>
                            <th className="clickable" onClick={() => this.sort("applicantOrganizationNumber")} scope="col">Roll No {this.renderSortIcon("applicantOrganizationNumber")}</th>
                            <th className="clickable" onClick={() => this.sort("description")} scope="col">Description {this.renderSortIcon("description")}</th>
                            <th className="clickable" onClick={() => this.sort("dateOfAccomplishment")} scope="col">Completed On{this.renderSortIcon("dateOfAccomplishment")}</th>

                            <th className="clickable" onClick={() => this.sort("tenure")} scope="col">Tenure {this.renderSortIcon("tenure")}</th>
                            <th className="clickable" onClick={() => this.sort("percentage")} scope="col">Percentage {this.renderSortIcon("percentage")}</th>
                            <th className="clickable" onClick={() => this.sort("percentage")} scope="col">Out Of {this.renderSortIcon("percentage")}</th>
                            <th className="clickable" onClick={() => this.sort("updatedBy")} scope="col">Updated By {this.renderSortIcon("updatedBy")}</th>
                            <th className="clickable" onClick={() => this.sort("status")} scope="col">Status {this.renderSortIcon("status")}</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>    
                        { paginatedDocuments.map((document,index) => 
                            <tr key={document.documentId}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{document.documentId}</td>
                                <td>{document.documentName}</td>
                                <td>{document.applicantId}</td>
                                <td>{document.applicantName}</td>
                                <td>{document.applicantOrganizationNumber}</td>
                                <td>{document.description}</td>
                                <td>{document.dateOfAccomplishment}</td>
                                
                                <td>{document.tenure}</td>
                                <td>{document.percentage}</td>
                                
                                <td>{document.outOfPercentage}</td>
                                <td>{document.updatedBy}</td>
                                <td><span className={this.getStatusClass(document.status)}>{document.status}</span></td>
                                <td>
                                {   
                                    //document.status === "Verified" ? <CustomModal modalBody={<PreviewCertificate document={document} />} modalButtonLabel="&nbsp;View&nbsp;"/> :
                                    document.status === "Verified" ?
                                    <Link
                                    to="/viewDocument" state={{documentUrl:document.documentUrl}}                         
                                    >
                                    <button className="btn btn-secondary" >View</button> 
                                    </Link>
                                    :
                                    <Link
                                    to="/organization/verify" state={{document:document}}                         
                                    >
                                    <button className="btn btn-secondary" >Verify</button>
                                    </Link>
                                }
                                </td>
                                
                                
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
 
export default OrganizationDashboard;
