import React from 'react';
import PropTypes from 'prop-types';
import './filtersContainer.css';
import FilterByContainer from './FilterByContainer/filterByContainer';

class FiltersContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			toogle: false,
		};
	}
    
	render() { 
		const {sort, toogleSort} = this.props;
		return ( 
			<div className="Filters-container">
				<FilterByContainer sort={sort} toogleSort={toogleSort}/>
				
			</div> );
	}
}

FiltersContainer.propTypes = {
	toogleSort: PropTypes.func,
	sort: PropTypes.string
};
 
export default FiltersContainer;