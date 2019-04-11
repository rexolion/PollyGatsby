import React from 'react';
import PropTypes from 'prop-types';
import ItemName from './ItemName/itemName';
import ItemType from './ItemType/itemType';
import ItemSizes from './ItemSizes/itemSizes';
import ItemColors from './ItemColors/itemColors';
import AddToCart from './AddToCart/addToCart';
import './itemText.css';

const ItemText = ({product, cartCounter}) => (
	<div className="Product-text">
		<ItemName name={product.node.name}/>
		<ItemType itemType={product.node.itemType}/>
		<ItemSizes />
		<ItemColors/>
		<AddToCart product={product} cartCounter={cartCounter}/>
	</div>
);

ItemText.propTypes = {
	product: PropTypes.object,
	cartCounter: PropTypes.func
};

export default ItemText;