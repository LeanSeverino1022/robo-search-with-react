import './SearchBox.css';
import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <React.Fragment>
            <div class="search-wrapper pa3">
                <input                
                    className="f3-m pa1 b--black-05"
                    style = {{"min-width": 250 }}
                    type="search"
                    placeholder="Search"
                    onChange={searchChange}
                />            
            </div>
            <p class="description mb4"> Start by typing in the search box</p>
        </React.Fragment>
    );
};

export default SearchBox;
