import React from 'react';
import PropTypes from 'prop-types';
import './itemRow.css';
import ItemText from './ItemText/itemText';
import ItemPrice from './ItemPrice/itemPrice';

const ItemRow = ({product, cartCounter}) => (
	<div className="Product-row">
		<ItemText cartCounter={cartCounter} product={product}/>
		<ItemPrice price={product.node.price}/>
	</div>
);

ItemRow.propTypes = {
	product: PropTypes.object,
	cartCounter: PropTypes.func
};

export default ItemRow;