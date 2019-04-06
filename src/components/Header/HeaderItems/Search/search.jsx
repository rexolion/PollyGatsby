import React from 'react';
import PropTypes from 'prop-types';
import SearchCategories from './SearchCategories/searchCategories';
import SearchBar from './SearchBar/searchBar';
import './search.css';

const Search = (props) => (
	<div className="Search">
		<SearchCategories/>
		<SearchBar searchHandler={props.searchHandler} searchValue={props.searchValue}/>
	</div>
);

Search.propTypes = {
	searchHandler: PropTypes.func,
	searchValue: PropTypes.string
};

export default Search;