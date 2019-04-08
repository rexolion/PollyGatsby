import React from 'react';
import PropTypes from 'prop-types';
import './searchBarMobileInput.css';

const SearchBarMobileInput = (props) => (
	<input type="text" value={props.searchValue} onChange={props.searchHandler}  className="Search-bar_mobile" placeholder="Search..."></input>
);

SearchBarMobileInput.propTypes = {
	searchValue: PropTypes.string,
	searchHandler: PropTypes.func
};

export default SearchBarMobileInput;