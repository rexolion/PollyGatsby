import PropTypes from 'prop-types';
import React from 'react';
import './header.css';
import HeaderItems from './HeaderItems/headerItems';

const Header = (props) => (
	<header className="Header">
		<HeaderItems inCart={props.inCart} cartModalOpened={props.cartModalOpened} searchHandler={props.searchHandler} searchValue={props.searchValue} siteTitle={props.siteTitle} cartCounter={props.cartCounter} />
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
	cartCounter: PropTypes.number,
	searchHandler: PropTypes.func,
	searchValue: PropTypes.string,
	cartModalOpened: PropTypes.func,
	inCart: PropTypes.array
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;





































