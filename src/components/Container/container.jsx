import React from 'react';
import './container.css';
import SideMenu from './SideMenu/sideMenu';
import Goods from './Goods/goods';
import PropTypes from 'prop-types';

const Container = (props) => (
	<section className='Container'>
		<SideMenu/>
		<Goods searchValue={props.searchValue} cartCounter={props.cartCounter}/>
	</section>
);

Container.propTypes = {
	cartCounter: PropTypes.func,
	searchValue: PropTypes.string
};

export default Container;