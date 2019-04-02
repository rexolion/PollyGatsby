import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import './cartModal.css';

const modal = () => {
	return (
		<div className="CartModal-container">
			<div className="CartModal">
				CartModal
				<div className="block"></div>
			</div>
		</div>
	);
};
const CartModal = () =>  {
	return ReactDOM.createPortal(modal, document.querySelector('#modal'));
};
 
export default CartModal;