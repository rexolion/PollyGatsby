import React from 'react';
import PropTypes from 'prop-types';
import SearchCategories from './SearchCategories/searchCategories';
import SearchBar from './SearchBar/searchBar';
import SearchBarMobile from './SearchBarMobile/searchBarMobile';
import './search.css';

function isMobile() {
	let mq = window.matchMedia('(max-width: 700px)');

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && mq.matches) {
		return true;
	}
	return false;
}

const Search = (props) => (
	<div className="Search">
		<SearchCategories/>
		{isMobile() ? <SearchBarMobile handleSearchIconPressed={props.handleSearchIconPressed} searchHandler={props.searchHandler} searchValue={props.searchValue}/> 
			: <SearchBar searchHandler={props.searchHandler} searchValue={props.searchValue} />}
	</div>
);

Search.propTypes = {
	searchHandler: PropTypes.func,
	handleSearchIconPressed: PropTypes.func,
	searchValue: PropTypes.string,
};

export default Search;