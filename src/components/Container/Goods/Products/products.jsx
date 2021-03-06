import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql} from 'gatsby';
import InfiniteScroll from 'react-infinite-scroller';

import Item from './Item/item';
import ItemMobile from './Item_mobile/item_mobile';
import './products.css';

class ProductsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			loadedArr: [],
			sortedArr: [],
			foundArr: [],
			hasMore: true,
			loadedSearchValue: '',
			currentSort: '',


		};
	}
	
	componentDidMount() {
		this.loadSorted();
	}

	componentDidUpdate(prev) {
		if(prev.searchValue !== this.props.searchValue || this.props.sort !== this.state.currentSort) {
			this.loadSorted();
		}
	}

	findProducts(arr, searchValue) {
		const found = arr
			.filter(val => val.node.name
				.split(' ')
				.some(val => val.substring(0,searchValue.length).toLowerCase() === searchValue.toLowerCase()));

		return found;
	}

	sortByType(arr, sortType) {
		const sorted = [];

		switch(sortType) {
		case 'Relevant':
			arr.map(val => sorted.push(val));
			break;
		case 'Price_up':
			arr.sort((a,b) => b.node.price - a.node.price ).map(val => sorted.push(val));
			break;
		case 'Price_down':
			arr.sort((a,b) => a.node.price - b.node.price ).map(val => sorted.push(val));
			break;
		}

		return sorted;
	}

	loadSorted() {
		const sortType = this.props.sort;
		const prodArr = this.props.products;
		const searchValue = this.props.searchValue;

		if (this.props.searchValue !== '') {
			const found = this.findProducts(prodArr, searchValue);
			const sorted = this.sortByType(found, sortType);
			
			this.setState({sortedArr: sorted, loadedArr: [], currentSort: sortType});
		}else {
			const sorted = this.sortByType(prodArr, sortType);

			this.setState({sortedArr: sorted, loadedArr: [], currentSort: sortType});
		}
	}

	loadMoreInfinite() {
		this.state.sortedArr.splice(0,9).map(val => {
			val ? this.setState(prev => ({loadedArr: [...prev.loadedArr, val]})) : this.setState({hasMore: false});
		}
		);
		
	}

	render() { 
		const {cartCounter} = this.props;
		const items = [];

		this.state.loadedArr.map((val,ind) => items.push(isMobile() ? <ItemMobile key={ind} cartCounter={cartCounter} product={val}/> 
			:<Item key={ind} cartCounter={cartCounter} product={val}/>));

		return (  
			<div className="Goods-products">
				<InfiniteScroll
					pageStart={0}
					loadMore={this.loadMoreInfinite.bind(this)}
					hasMore={this.state.hasMore}
					className="Product">
					{items}
				</InfiniteScroll>
			</div>
		);
	}
}

ProductsComponent.propTypes = {
	products: PropTypes.array,
	sort: PropTypes.string,
	cartCounter: PropTypes.func,
	searchValue: PropTypes.string,
};

const Products = (props) => (
	<StaticQuery 
		query={
			graphql`
                query ItemsQuery {
                    allItemsJson {
                        edges {
                            node {
                                productImg
                                price
                                name
								description
								itemType
                            }
                        }
                    }
                }
            `
		}
		render={data => (
			<ProductsComponent searchValue={props.searchValue} cartCounter={props.cartCounter} sort={props.sort} products={data.allItemsJson.edges}/>
		)}
	/>
);

Products.propTypes = {
	sort: PropTypes.string,
	cartCounter: PropTypes.func,
	searchValue: PropTypes.string,
};

function isMobile() {
	if (typeof window !== 'undefined') {
		let mq = window.matchMedia('(max-width: 700px)');
	
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && mq.matches) {
			return true;
		}
		return false;
	}

}

export default Products;