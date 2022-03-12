import React, { Component } from 'react';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import _ from 'lodash';
import SearchBar from '../common/searchBar';
import { getAllOrganizations } from '../../services/organizationService';


class ViewOrganizations extends Component {
    state = { 
        organizations : getAllOrganizations(),
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
        const {currentPage, pageSize, organizations, sorting, searchText} = this.state;
        let filteredOrganizations = organizations.filter(organization => {
            for(let property in organization){
                if(organization[property].includes(searchText)) return true;
            }
            return false;
        });
        const sortedOrganizations = _.orderBy(filteredOrganizations,[sorting.property],[sorting.order]);
        const paginatedOrganizations = paginate(sortedOrganizations, currentPage, pageSize);
          
        return (
            <>
                <div style={{margin: 10, backgroundColor: 'white', padding: 40}}>
                <SearchBar search={this.search} searchInput={searchText} />
                    <br />
                    <table className="table table-striped">
                        <thead>
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
                            <th className="clickable" onClick={() => this.sort("type")} scope="col">Type {this.renderSortIcon("type")}</th>
                        </tr>
                        </thead>
                        <tbody>    
                        { paginatedOrganizations.map((organization,index) => 
                            <tr key={organization._id}>
                                <th scope="row">{(currentPage-1)*pageSize+index+1}</th>
                                <td>{organization._id}</td>
                                <td>{organization.name}</td>
                                <td>{organization.email}</td>
                                <td>{organization.address}</td>
                                <td>{organization.pin}</td>
                                <td>{organization.state}</td>
                                <td>{organization.country}</td>
                                <td>{organization.contact}</td>
                                <td>{organization.type}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    
                    <Pagination 
                        itemsCount={filteredOrganizations.length} 
                        pageSize={this.state.pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>

            </>
        );
    }
}
 
export default ViewOrganizations;