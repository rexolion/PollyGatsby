import React from 'react';
import PropTypes from 'prop-types';
import './cartModalContainerMobile.css';

class CartModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		const {inCart} = this.props;
        
		return ( 
			<div className="CartModal-container_mobile">
				<div className="CartModal_mobile">
					<h2 className="CartModal-heading_lg">My cart</h2>
				</div>
			</div>
		);
	}
}

CartModalContainer.propTypes = {
	inCart: PropTypes.array
};
 
export default CartModalContainer;