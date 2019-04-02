import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/logo';
import Search from './Search/search';
import HeaderButtons from './HeaderButtons/headerButtons';
import Humburger from './Humburger/humburger';
import './headerItems.css';


class HeaderItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		return ( 
			<div className="Header-items">
				<ul className="Bullet-container">
					<Logo siteTitle={this.props.siteTitle} />
					<Search/>
					<HeaderButtons cartCounter={this.props.cartCounter}/>
					<Humburger/>
				</ul>
			</div>
		);
	}
}

HeaderItems.propTypes = {
	cartCounter: PropTypes.number,
	siteTitle: PropTypes.string
};
 
export default HeaderItems;