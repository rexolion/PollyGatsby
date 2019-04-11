import React from 'react';
import PropTypes from 'prop-types';
import CartModalCart from './CartModalCart/cartModalCart';
import CartModalPayment from './CartModalPayment/cartModalPayment';
import './cartModalRow.css';

const CartModalRow = ({inCart}) => (
	<div className="CartModal-row">
		<CartModalPayment/>
		<CartModalCart inCart={inCart}/>
	</div>
);

CartModalRow.propTypes = {
	inCart: PropTypes.array
};

export default CartModalRow;