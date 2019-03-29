/* eslint-disable no-console */
import React, { Component } from 'react';
import './products.css';
import Item from './Item/item';
import { StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';


class ProductsComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			visible: 3
		};
		this.loadMore = this.loadMore.bind(this);
	}
    
	loadMore() {
		this.setState(prev => {return {visible: prev.visible + 3};});
	}

	render() { 
		return (  
			<div className="Goods">
				<div className="Product">
					{this.props.products.slice(0,this.state.visible).map((val, ind) =>
							
					{return(<Item key={ind} product={val}/>);}
					)}
				</div>
				{this.state.visible < this.props.products.length && <button onClick={this.loadMore}
					type="button">Load more</button> }
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