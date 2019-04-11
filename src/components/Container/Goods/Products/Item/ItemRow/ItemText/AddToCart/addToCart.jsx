import React from 'react';
import PropTypes from 'prop-types';
import './addToCart.css';

class AddToCart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			pressed: false,
		};
	}

	handleClick = () => {
		this.props.cartCounter(this.props.product.node);
		this.setState(prev => ({pressed: !prev.pressed}));
	}

	render() { 

		return ( 
			<div className="AddToCart-container">
				<button className={this.state.pressed ? 'AddToCart AddToCart_pressed' : 'AddToCart'} onClick={this.handleClick}>ADD TO CART</button>
			</div>
		);
	}
}
 
AddToCart.propTypes = {
	cartCounter: PropTypes.func,
	product: PropTypes.object
};


export default AddToCart;