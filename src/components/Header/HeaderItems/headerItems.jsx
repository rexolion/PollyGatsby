import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/logo';
import Search from './Search/search';
import HeaderButtons from './HeaderButtons/headerButtons';
import Humburger from './Humburger/humburger';
import './headerItems.css';

const HeaderItems = (props) => (
	<div className="Header-items">
		<ul className="Bullet-container">
			<Logo siteTitle={props.siteTitle} />
			<Search searchHandler={props.searchHandler} searchValue={props.searchValue}/>
			<HeaderButtons cartCounter={props.cartCounter}/>
			<Humburger/>
		</ul>
	</div>
);

HeaderItems.propTypes = {
	cartCounter: PropTypes.number,
	siteTitle: PropTypes.string,
	searchHandler: PropTypes.func,
	searchValue: PropTypes.string
};
 
export default HeaderItems;