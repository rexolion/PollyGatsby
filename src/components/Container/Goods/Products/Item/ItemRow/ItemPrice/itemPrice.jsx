import React from 'react'
import PropTypes from 'prop-types';
import './itemPrice.css';

const ItemPrice = ({price}) => (
    <h2 className="Product-price Heading_sm">${price}</h2>
);

ItemPrice.propTypes = {
    price: PropTypes.number
};

export default ItemPrice;