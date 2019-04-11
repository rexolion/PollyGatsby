import React from 'react';
import PropTypes from 'prop-types';
import './itemType.css';

const ItemType = ({itemType}) => (
	<span className="Product-type">{itemType}</span>
);

ItemType.propTypes = {
	itemType: PropTypes.string
};

export default ItemType;