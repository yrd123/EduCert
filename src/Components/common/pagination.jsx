import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() { 
        const { pageSize , itemsCount } = this.props;
        const pagesCount = Math.ceil(itemsCount/pageSize);
        if(pagesCount === 1) return null;
        const pages = _.range(1, pagesCount+1);
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    {pages.map(page => <li key={page} className="page-item"><a className="page-link" onClick={() => this.props.onPageChange(page)}>{page}</a></li>)}
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;