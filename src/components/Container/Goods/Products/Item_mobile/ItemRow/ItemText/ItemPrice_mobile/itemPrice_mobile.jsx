import React from 'react';
import PropTypes from 'prop-types';
import './itemPrice_mobile.css';

const ItemPrice = ({price}) => (
	<h2 className="Product-price_mobile Heading_sm_mobile">${price}</h2>
);

ItemPrice.propTypes = {
	price: PropTypes.number
};

export default ItemPrice;