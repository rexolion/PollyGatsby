import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account/account';
import Cart from './Cart/cart';
import './headerButtons.css';

const HeaderButtons = ({inCart, cartModalOpened, cartCounter}) => (
	<div className="Header-button-container">
		<Account/>
		<Cart inCart={inCart} cartModalOpened={cartModalOpened} cartCounter={cartCounter} />
	</div>
);
 
HeaderButtons.propTypes = {
	cartCounter: PropTypes.number,
	cartModalOpened: PropTypes.func,
	inCart: PropTypes.array
};

export default HeaderButtons;