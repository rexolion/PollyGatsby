import React from 'react';
import PropTypes from 'prop-types';
import './itemType_mobile.css';

const ItemType = ({itemType}) => (
	<span className="Product-type_mobile">{itemType}</span>
);

ItemType.propTypes = {
	itemType: PropTypes.string
};

export default ItemType;