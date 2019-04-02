import React, { Component } from 'react';
import './products.css';
import Item from './Item/item';
import { StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';


class ProductsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			loadedArr: [],
			sortedArr: [],
			hasMore: true,
			currentSort: '',


		};
	}
	
	loadSorted() {
		const sortType = this.props.sort;
		const prodArr = this.props.products;
		const sorted = [];

		switch(sortType) {
		case 'Relevant':
			prodArr.map(val => sorted.push(val));
			break;
		case 'Price_up':
			prodArr.sort((a,b) => b.node.price - a.node.price ).map(val => sorted.push(val));
			break;
		case 'Price_down':
			prodArr.sort((a,b) => a.node.price - b.node.price ).map(val => sorted.push(val));
			break;
		}

		this.setState({sortedArr: sorted, loadedArr: [], currentSort: sortType});
		
	}
	

	loadMoreInfinite() {
		this.state.sortedArr.splice(0,9).map(val => {
			val ? this.setState(prev => ({loadedArr: [...prev.loadedArr, val]})) : this.setState({hasMore: false});
		}
		);
		
	}

	render() { 
		let items = [];
		
		if(this.state.currentSort !== this.props.sort ) {
			this.loadSorted();
			items = [];
		}

		this.state.loadedArr.map((val,ind) => items.push(<Item key={ind} cartCounter={this.props.cartCounter} product={val}/>));

		return (  
			<div className="Goods">
				<InfiniteScroll
					pageStart={0}
					loadMore={this.loadMoreInfinite.bind(this)}
					hasMore={this.state.hasMore}
					className="Product"
				>
				
					{items}
				</InfiniteScroll>
			</div>

				
		);
	}
}

ProductsComponent.propTypes = {
	products: PropTypes.array,
	sort: PropTypes.string,
	cartCounter: PropTypes.func
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
			<ProductsComponent cartCounter={props.cartCounter} sort={props.sort} products={data.allItemsJson.edges}/>
		)}
	/>
);

Products.propTypes = {
	sort: PropTypes.string,
	cartCounter: PropTypes.func
};
export default Products;