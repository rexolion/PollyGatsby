/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ItemRow from './ItemRow/itemRow';
import ItemImage from './ItemImage/itemImage';
import './item.css';

const Item = ({product, cartCounter}) => (
	<a  className="Product-item">
		<ItemImage productImg={product.node.productImg} name={product.node.name}/>
		<ItemRow product={product} cartCounter={cartCounter}/>
	</a> 
);

Item.propTypes = {
	product: PropTypes.object,
	cartCounter: PropTypes.func
};

export default Item;
