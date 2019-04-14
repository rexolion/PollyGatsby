import React from 'react';
import PropTypes from 'prop-types';
import ItemName from './ItemName/itemName_mobile';
import ItemType from './ItemType/itemType_mobile';
import './itemText_mobile.css';
import ItemPrice from './ItemPrice_mobile/itemPrice_mobile';

const ItemText = ({product}) => (
	<div className="Product-text_mobile">
		<ItemName name={product.node.name}/>
		<ItemType itemType={product.node.itemType}/>
		<ItemPrice price={product.node.price}/>
	</div>
);

ItemText.propTypes = {
	product: PropTypes.object,
};

export default ItemText;