import React from 'react';
import './container.css';
import Categories from './Categories/categories';
import Goods from './Goods/goods';

const Container = () => (
    <section className='Container'>
        <Categories/>
        <Goods/>
    </section>
);

export default Container;