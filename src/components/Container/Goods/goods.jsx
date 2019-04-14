import React from 'react';
import Banner from './Banner/banner';
import Products from './Products/products';
import PropTypes from 'prop-types';
import GoodsHeading from './GoodsHeading/goodsHeading';
import FiltersContainer from './FiltersContainer/filtersContainer';
import './goods.css';

class Goods extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sort: 'Relevant'
		};
	}

	toogleSort = (sortName) =>  {
		this.setState(() => ({ sort: sortName }));
	}

	render() {
		return (
			<section className="Goods">
				<Banner />
				<GoodsHeading/>
				<FiltersContainer toogleList={this.toogleList} toogleSort={this.toogleSort} sort={this.state.sort} />
				<Products searchValue={this.props.searchValue} cartCounter={this.props.cartCounter} sort={this.state.sort} />
			</section>
		);
	}
}

Goods.propTypes = {
	cartCounter: PropTypes.func,
	searchValue: PropTypes.string
};

export default Goods;