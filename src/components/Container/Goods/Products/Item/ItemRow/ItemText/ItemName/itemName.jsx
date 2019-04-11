import React from 'react';
import PropTypes from 'prop-types';
import './itemName.css';

const ItemName = ({name}) => (
	<h2 className="Heading_sm">{name}</h2>
);

ItemName.propTypes = {
	name: PropTypes.string
};

export default ItemName;
