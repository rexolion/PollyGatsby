/* eslint-disable no-console */
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
			hasMore: true


		};
	}
	

	loadMoreInfinite(page) {
		let loaded = this.state.loadedArr;
		this.props.products.splice(0,10).map(val => {
				val ? loaded.push(val) : this.state.hasMore = false;
			}
		);
		this.setState({loadedArr: loaded});
	}

	render() { 
		const loader = <h2>Loading</h2>;
		let items = [];
		this.state.loadedArr.map((val,ind) => items.push(<Item key={ind} product={val}/>))
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
	products: PropTypes.array
};
 

const Products = () => (
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
			<ProductsComponent products={data.allItemsJson.edges}/>
		)}
	/>
);

export default Products;