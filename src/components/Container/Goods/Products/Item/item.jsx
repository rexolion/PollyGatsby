/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import './item.css';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const ItemComponent = (props) => {
	const {price, name} = props.product;

	return (<div className="Product-item">
		<div className="Product-image">
			{props.children}
		</div>
		<div className="Product-text">
			<h2 className="Heading_sm">{name}</h2>
			<span className="Product-price">{price}</span>
		</div>
	</div>);
    
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
