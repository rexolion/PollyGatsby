/* eslint-disable react/prop-types */
import React from 'react';
import './item.css';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const ItemComponent = (props) => {
	const {price, name, itemType} = props.product;

	return (<a  href="#" className="Product-item">
		<div className="Product-image">
			{props.children}
		</div>
		<div className="Product-row">
			<div className="Product-text">
				<h2 className="Heading_sm">{name}</h2>
				<span className="Product-type">{itemType}</span>
				<h2 className="Product-categories Heading_sm ">SIZES</h2>
				<div className="Product-sizes-container">
					<span className="Product-size-item">XS</span>
					<span className="Product-size-item  _black">S</span>
					<span className="Product-size-item _black">M</span>
					<span className="Product-size-item">L</span>
					<span className="Product-size-item _black">XL</span>
					<span className="Product-size-item">XXL</span>
				</div>
				<h2 className="Product-categories Heading_sm ">COLORS</h2>
				<div className="Product-color-container">
					<div className="Product-color-item red"></div>
					<div className="Product-color-item green"></div>
					<div className="Product-color-item blue"></div>
					<div className="Product-color-item white"></div>

				</div>
			</div>
			<h2 className="Product-price Heading_sm">${price}</h2>
		</div>
	</a>);
    
};

ItemComponent.propType = {
	product: PropTypes.object
};

const Item = (props) => (
	<StaticQuery
		query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    
    `}
		render={data => 
		{
			const prod = props.product.node;
			const image = data.images.edges.find(n =>
				n.node.relativePath.includes(prod.productImg));
			if (!image) {return null;}
			
			const imageSizes = image.node.childImageSharp.sizes;
			return (
				<ItemComponent product={prod}>
					<Img sizes={imageSizes} alt={prod.name}/>
				</ItemComponent>
			);
		}
		}
	/>
);
export default Item;
