import React from 'react';
// import PropTypes from 'prop-types';
import './searchCategories.css';
import Dropdown from './Dropdown/dropdown';

class SearchCategories extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			isHovering: false
		};
		this.handleMouseHover = this.handleMouseHover.bind(this);
	}

	handleMouseHover() {
		this.setState(prev => ({isHovering: !prev.isHovering}));
	}
    
	render() { 
		return ( 
			<div className="Search-dropdown-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >
				<span className="Search-dropdown-text">Categories</span>
				<span className="Icon-arrow_down"></span>
				<div className="Search-dropdown">
					{this.state.isHovering && <Dropdown/>}
				</div>
			</div>
		);
	}
}
 
export default SearchCategories;