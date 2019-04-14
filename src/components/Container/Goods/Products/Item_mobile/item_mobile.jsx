/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ItemRow from './ItemRow/itemRow_mobile';
import ItemImage from './ItemImage/itemImage_mobile';
import './item_mobile.css';

const ItemMobile = ({product, cartCounter}) => (
	<a  className="Product-item_mobile">
		<ItemImage productImg={product.node.productImg} name={product.node.name}/>
		<ItemRow product={product} cartCounter={cartCounter}/>
	</a> 
);

ItemMobile.propTypes = {
	product: PropTypes.object,
	cartCounter: PropTypes.func
};

export default ItemMobile;
