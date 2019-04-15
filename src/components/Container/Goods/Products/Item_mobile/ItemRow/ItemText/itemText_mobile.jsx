import React from 'react';
import PropTypes from 'prop-types';

import ItemType from './ItemType/itemType_mobile';
import ItemName from './ItemName/itemName_mobile';
import ItemPrice from './ItemPrice_mobile/itemPrice_mobile';
import './itemText_mobile.css';

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