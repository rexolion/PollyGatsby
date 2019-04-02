import React from 'react';
// import PropTypes from 'prop-types';
import SearchCategories from './SearchCategories/searchCategories';
import SearchBar from './SearchBar/searchBar';
import './search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		return ( 
			<div className="Search">
				<SearchCategories/>
				<SearchBar/>
			</div>
		);
	}
}
 
export default Search;