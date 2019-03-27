import React from 'react';
import './goods.css';
import Banner from './Banner/banner';
import Products from './Products/products';

const Goods = () => (
	<section className="Goods">
		<Banner/>
		<h2 className="Header_md">You'll like it!</h2>
		<Products/>
	</section>
);

export default Goods;