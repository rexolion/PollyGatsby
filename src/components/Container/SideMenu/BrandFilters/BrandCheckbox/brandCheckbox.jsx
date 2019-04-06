import React from 'react';
import PropTypes from 'prop-types';
import './brandCheckbox.css';

class BrandCheckbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		 };
	}
    
	
    
	render() { 
        
		return ( 
			<div className="Checkbox-container">{this.props.brand}
				<input type="checkbox" onChange={() => this.props.changeHandler(this.props.brand)} checked={this.props.isChecked}></input>
				<span className="Checkmark"></span>
			</div>
		);
	}
}

BrandCheckbox.propTypes = {
	brand: PropTypes.string,
	changeHandler: PropTypes.func,
	isChecked: PropTypes.bool
};
 
export default BrandCheckbox;