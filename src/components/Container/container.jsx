import React from 'react';
import './container.css';
import Categories from './Categories/categories';
import Goods from './Goods/goods';
import PropTypes from 'prop-types';

const Container = (props) => (
	<section className='Container'>
		<Categories/>
		<Goods cartCounter={props.cartCounter}/>
	</section>
);

Container.propTypes = {
	cartCounter: PropTypes.func
};

export default Container;