import React from 'react';
import PropTypes from 'prop-types';
import './itemName_mobile.css';

const ItemName = ({name}) => (
	<h2 className="Heading_sm_mobile Product-name_mobile">{name}</h2>
);

ItemName.propTypes = {
	name: PropTypes.string
};

export default ItemName;
