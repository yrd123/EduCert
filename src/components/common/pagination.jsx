import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() { 
        const { pageSize , itemsCount, onPageChange, currentPage } = this.props;

        const pagesCount = Math.ceil(itemsCount/pageSize);
        if(pagesCount === 1) return null;
        const pages = _.range(1, pagesCount+1);
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={() => onPageChange(currentPage - 1)}>Previous</a></li>
                    {pages.map(page => <li key={page} className={ page === currentPage ? "page-item active":"page-item" }><a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>)}
                    <li className="page-item"><a className="page-link" onClick={() => onPageChange(currentPage + 1)}>Next</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;