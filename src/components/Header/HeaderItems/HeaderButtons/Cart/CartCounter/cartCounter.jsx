import React from 'react';
import PropTypes from 'prop-types';
import './cartCounter.css';

const CartCounter = ({cartCounter}) => (
	<div className="Cart-counter-container">
		<div className="Cart-counter">{cartCounter}</div>
	</div>
);

CartCounter.propTypes = {
	cartCounter: PropTypes.number
};

export default CartCounter;