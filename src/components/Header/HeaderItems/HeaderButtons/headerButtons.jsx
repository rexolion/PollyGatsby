import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account/account';
import Cart from './Cart/cart';
import './headerButtons.css';

const HeaderButtons = (props) => (
	<div className="Header-button-container">
		<Account/>
		<Cart cartCounter={props.cartCounter} />
	</div>
);
 
HeaderButtons.propTypes = {
	cartCounter: PropTypes.number
};

export default HeaderButtons;