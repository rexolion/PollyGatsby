import React from 'react';
import CartModalItemMobile from './CartModalItemMobile/cartModalItemMobile';
import PropTypes from 'prop-types';
import './cartModalItemContainerMobile.css';

class CartModalItemContainerMobile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		const {inCart} = this.props;
		const inCartQuantity = countQuantity(inCart);
        
		return ( 
			<div className="CartModal-cart-container_mobile">
				{inCartQuantity.map((val,key) => <CartModalItemMobile key={key} item={val}/>)}
			</div>
		);
	}
}

const countQuantity = (arr) =>  {
	arr.forEach(val => val['quantity'] = arr.filter(valu => val.name === valu.name).length);
	
	return arr.filter((val,ind,self) => self.findIndex(t => t.place === val.place && t.name === val.name) === ind);
};

CartModalItemContainerMobile.propTypes = {
	inCart: PropTypes.array,
};
 
export default CartModalItemContainerMobile;