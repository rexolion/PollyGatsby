import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CartModalContainerMobile from './CartModalContainerMobile/cartModalContainerMobile';
import './cartModalMobile.css';

const CartModalMobile = ({open,onClose, inCart}) => 
	open 
		? ReactDOM.createPortal(
			<CartModalContainerMobile onClose={onClose} inCart={inCart}/>,
			document.body)
		: null;


CartModalMobile.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	inCart: PropTypes.array
};

export default CartModalMobile;