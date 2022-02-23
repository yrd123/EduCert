import React, { Component } from 'react';

const SearchBar = ({ searchInput, search }) => {
    return ( 
        <div className="input-group">
                <input type="search" 
                    id="form1" 
                    className="form-control"
                    value={searchInput || ""} 
                    onChange={e => search(e.target.value)}
                    placeholder="Search" />
        </div>
     );
}
 
export default SearchBar;