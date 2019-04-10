import React from 'react';
import PropTypes from 'prop-types';
import CartModalItem from './CartModalItem/cartModalItem';
import './cartModalContainer.css';

class CartModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		const {inCart} = this.props;
        
		return ( 
			<div className="CartModal-container">
				<div className="CartModal">
					<div className="CartModal-row">
						<div className="CartModal-part">
							<h2 className="CartModal-heading_lg">Payment</h2>
							<div className="CartModal-payment-image"></div>
							<div className="CartModal-payment-text">
								<span className="CartModal-heading_sm">Subtotal:</span>
								<span className="CartModal-heading_md">$40</span>
							</div>
							<div className="CartModal-buttons">
								<button className="Polly-button Polly-button_pri">Pay</button>
								<button className="Polly-button Polly-button_sec">Cancel</button>
							</div>
						</div>
						<div className="CartModal-part">
							<h2 className="CartModal-heading_lg">My cart</h2>
							{inCart.map((val, ind) => <CartModalItem item={val} key={ind}/> )}
						</div>
					</div>
					<div className="CartModal-close"></div>
				</div>
			</div>
		);
	}
}

CartModalContainer.propTypes = {
	inCart: PropTypes.array
};
 
export default CartModalContainer;