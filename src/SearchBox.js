import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input
            className="pa3 ba b--black"
            type="search"
            placeholder="Search by name"
            onChange={searchChange}
        />
    );
};

export default SearchBox;
