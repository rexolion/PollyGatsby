import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account/account';
import Cart from './Cart/cart';
import './headerButtons.css';


class HeaderButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		return ( 
			<div className="Header-button-container">
				<Account/>
				<Cart cartCounter={this.props.cartCounter} />
			</div>
		);
	}
}
 
HeaderButtons.propTypes = {
	cartCounter: PropTypes.number
};

export default HeaderButtons;