import React from 'react';
import PropTypes from 'prop-types';
import CartModalRow from './CartModalRow/cartModalRow';
import CartModalClose from './CartModalClose/cartModalClose';
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
					<CartModalRow inCart={inCart}/>
					<CartModalClose/>
				</div>
			</div>
		);
	}
}

CartModalContainer.propTypes = {
	inCart: PropTypes.array
};
 
export default CartModalContainer;