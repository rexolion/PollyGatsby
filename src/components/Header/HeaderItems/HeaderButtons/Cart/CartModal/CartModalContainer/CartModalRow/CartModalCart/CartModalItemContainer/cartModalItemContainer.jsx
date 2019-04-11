import React from 'react';
import PropTypes from 'prop-types';
import CartModalItem from './CartModalItem/cartModalItem';
import './cartModalItemContainer.css';

class CartModalItemContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		const {inCart} = this.props;
		const inCartQuantity = countQuantity(inCart);
		return ( 
			<div className="CartModal-item-container">
				{inCartQuantity.map((val, ind) => <CartModalItem item={val} key={ind}/> )}
			</div>
		);
	}
}
 

const countQuantity = (arr) =>  {
	arr.forEach(val => val['quantity'] = arr.filter(valu => val.name === valu.name).length);
	
	return arr.filter((val,ind,self) => self.findIndex(t => t.place === val.place && t.name === val.name) === ind);
};


CartModalItemContainer.propTypes = {
	inCart: PropTypes.array
};

export default CartModalItemContainer;