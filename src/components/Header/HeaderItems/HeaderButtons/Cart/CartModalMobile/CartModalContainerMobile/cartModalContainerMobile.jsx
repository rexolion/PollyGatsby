import React from 'react';
import PropTypes from 'prop-types';
import CartModalButtonsMobile from './CartModalButtonsMobile/cartModalButtonsMobile';
import CartModalHeadingMobile from './CartModalHeadingMobile/cartModalHeadingMobile';
import CartModalItemContainerMobile from './CartModalItemContainerMobile/cartModalItemContainerMobile';
import CartModalSubtotalMobile from './CartModalSubtotalMobile/cartModalSubtotalMobile';
import './cartModalContainerMobile.css';

class CartModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		const {onClose, inCart} = this.props;

		return ( 
			<div className="CartModal-container_mobile">
				<div className="CartModal_mobile">
					<CartModalHeadingMobile/>
					<CartModalItemContainerMobile onClose={onClose} inCart={inCart}/>
					<CartModalSubtotalMobile/>
					<CartModalButtonsMobile/>

				</div>
			</div>
		);
	}
}

CartModalContainer.propTypes = {
	inCart: PropTypes.array,
	onClose: PropTypes.func
};
 
export default CartModalContainer;