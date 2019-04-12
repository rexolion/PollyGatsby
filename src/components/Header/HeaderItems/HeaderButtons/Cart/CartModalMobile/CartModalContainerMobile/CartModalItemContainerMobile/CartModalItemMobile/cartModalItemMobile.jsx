import React from 'react';
import PropTypes from 'prop-types';
import './cartModalItemMobile.css';

class CartModalItemMobile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		const {price, itemType, name, quantity} = this.props.item;
		return ( 
			<div className="CartModal-item_mobile">
				<div className="CartModal-item-text_mobile">
					<h2 className="CartModal-heading_sm_mobile">{name}</h2>
					<span className="CartModal-sm_mobile">{itemType}</span>
				</div>
				<div className="CartModal-counter">
					<div className="CartModal-counter-butt">+</div>
					<div className="CartModal-counter-res_mobile">{quantity}</div>
					<div className="CartModal-counter-butt">-</div>
				</div>
				<span className="CartModal-heading_md_mobile">${price}</span>
				<div className="CartModal-item-close">
					<span className="Icon_close"></span>
				</div>
			</div>
		);
	}
}

CartModalItemMobile.propTypes = {
	item: PropTypes.object
};
 
export default CartModalItemMobile;
