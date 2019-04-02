import React from 'react';
import Banner from './Banner/banner';
import Products from './Products/products';
import PropTypes from 'prop-types';
import './goods.css';

class Goods extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			toogle: false,
			sort: 'Relevant'
		};
	}

	toogleList() {
		this.setState(prev => ({toogle: !prev.toogle}));
	}

	toogleSort(sortName) {
		this.setState(() => ({sort: sortName}));
	}

	showList() {
		return (
			<ul className="Filter-list">
				<li className="Filter-list-item" onClick={() => this.toogleSort('Relevant')}>Relevant</li>
				<li className="Filter-list-item" onClick={() => this.toogleSort('Price_up')}>By price up </li>
				<li className="Filter-list-item" onClick={() => this.toogleSort('Price_down')}>By price down </li>
				<li className="Filter-list-item" onClick={() => this.toogleSort('Rating')}>By rating</li>
			</ul>
		);
	}

	render() { 
		return ( 
			<section className="Goods">
				<Banner/>
				<h2 className="Header_md">
		You&apos;ll like it!
				</h2>
				<div className="Filters-container">
					<div className="Filter_by" onClick={() => this.toogleList()} >
						<span className="Filter-text">{this.state.sort}</span>
						<div className="Arrow Arrow_down"></div>
					</div>
					{this.state.toogle && this.showList()}
					<div className="Checkbox-container Checkbox-container_filt">Adidas
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
					<div className="Checkbox-container Checkbox-container_filt">Adidas
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
				</div>
				<Products cartCounter={this.props.cartCounter} sort={this.state.sort}/>
			</section>
		);
	}
}
 
Goods.propTypes = {
	cartCounter: PropTypes.func
};

export default Goods;