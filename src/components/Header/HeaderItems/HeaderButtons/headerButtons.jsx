import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account/account';
import Cart from './Cart/cart';
import './headerButtons.css';

const HeaderButtons = ({inCart, modalOpened, cartCounter}) => (
	<div className="Header-button-container">
		<Account/>
		<Cart inCart={inCart} modalOpened={modalOpened} cartCounter={cartCounter} />
	</div>
);
 
HeaderButtons.propTypes = {
	cartCounter: PropTypes.number,
	modalOpened: PropTypes.func,
	inCart: PropTypes.array
};

export default HeaderButtons;