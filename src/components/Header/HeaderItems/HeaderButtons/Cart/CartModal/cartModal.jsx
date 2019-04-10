import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CartModalContainer from './CartModalContainer/cartModalContainer';
import './cartModal.css';
// onClick={onClose}

const CartModal = ({open,onClose, inCart}) => 
	open 
		? ReactDOM.createPortal(
			<CartModalContainer inCart={inCart}/>,
			document.body)
		: null;


CartModal.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	inCart: PropTypes.array
};

export default CartModal;