import React from 'react';
import './goods.css';
import Banner from './Banner/banner';
import Products from './Products/products';

const Goods = () => (
	<section className="Goods">
	<Banner/>
	<h2 class="Header_md">You like it!</h2>
	<Products/>
	</section>
);

export default Goods;