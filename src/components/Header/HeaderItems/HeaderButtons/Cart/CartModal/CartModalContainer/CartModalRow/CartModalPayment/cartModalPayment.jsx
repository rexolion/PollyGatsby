import React from 'react';
import './cartModalPayment.css';

const CartModalPayment = () => (
	<div className="CartModal-part">
		<h2 className="CartModal-heading_lg">Payment</h2>
		<div className="CartModal-payment-image"></div>		
		<div className="CartModal-payment-ass">
			<div className="CartModal-payment-text">
				<span className="CartModal-heading_sm">Subtotal:</span>
				<span className="CartModal-heading_md">$40</span>
			</div>
			<div className="CartModal-buttons">
				<button className="Polly-button Polly-button_pri">Pay</button>
				<button className="Polly-button Polly-button_sec">Cancel</button>
			</div>
		</div>
	</div>
);

CartModalPayment.propTypes = {

};

export default CartModalPayment; 