import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input
            style = {{minWidth: 250 }}
            className="f3-m mb4 pa3 ba b--lightest-blue"
            type="search"
            placeholder="Search your friends by name"
            onChange={searchChange}
        />
    );
};

export default SearchBox;
