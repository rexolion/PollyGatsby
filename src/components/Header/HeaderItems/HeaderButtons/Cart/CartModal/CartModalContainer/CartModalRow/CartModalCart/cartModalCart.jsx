import React from 'react';
import PropTypes from 'prop-types';
import CartModalContainer from './CartModalItemContainer/cartModalItemContainer';
import './cartModalCart.css';

const CartModalCart = ({inCart}) => (
	<div className="CartModal-part">
		<h2 className="CartModal-heading_lg">My cart</h2>
		<CartModalContainer inCart={inCart}/>
	</div>
);

CartModalCart.propTypes = {
	inCart: PropTypes.array
};

export default CartModalCart;