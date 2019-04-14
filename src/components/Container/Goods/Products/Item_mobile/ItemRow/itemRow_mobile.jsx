import React from 'react';
import PropTypes from 'prop-types';
import ItemText from './ItemText/itemText_mobile';
import './itemRow_mobile.css';

const ItemRow = ({product, cartCounter}) => (
	<div className="Product-row_mobile">
		<ItemText cartCounter={cartCounter} product={product}/>
	</div>
);

ItemRow.propTypes = {
	product: PropTypes.object,
	cartCounter: PropTypes.func
};

export default ItemRow;