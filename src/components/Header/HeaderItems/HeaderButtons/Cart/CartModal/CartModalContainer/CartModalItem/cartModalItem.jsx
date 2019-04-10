import React from 'react';
import PropTypes from 'prop-types';

const CartModalItem = ({item}) => (
	<div className="CartModal-cart-container">
		<div className="CartModal-item">
			<div className="CartModal-item-image"></div>
			<div className="CartModal-item-text">
				<h2 className="CartModal-heading_sm">{item.name}</h2>
				<span className="CartModal-sm">{item.itemType}</span>
			</div>
			<div className="CartModal-counter">
				<div className="CartModal-counter-butt">+</div>
				<div className="CartModal-counter-res">0</div>
				<div className="CartModal-counter-butt">-</div>
			</div>
			<span className="CartModal-heading_md">${item.price}</span>
			<div className="CartModal-item-close">
				<span className="Icon_close"></span>
			</div>
		</div>
	</div>
);

CartModalItem.propTypes = {
	item: PropTypes.object
};

export default CartModalItem;