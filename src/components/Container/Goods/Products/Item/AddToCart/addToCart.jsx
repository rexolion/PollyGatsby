import React from 'react';
import PropTypes from 'prop-types';
import './addToCart.css';

const AddToCart = (props) => (
	<div className="AddToCart-container">
		<button className="AddToCart" onClick={() => props.cartCounter(props.product)}>ADD TO CART</button>
	</div>
);

AddToCart.propTypes = {
	cartCounter: PropTypes.func,
	product: PropTypes.object
};


export default AddToCart;