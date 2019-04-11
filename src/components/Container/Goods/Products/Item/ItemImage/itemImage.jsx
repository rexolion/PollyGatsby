import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import './itemImage.css';

const ItemImageComponent = ({children}) => (
	<div className="Product-image">
		{children}
	</div>
);

ItemImageComponent.propTypes = {
	children: PropTypes.symbol
};

const ItemImage = ({productImg, name}) => (
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
			
			const image = data.images.edges.find(n =>
				n.node.relativePath.includes(productImg));
			if (!image) {return null;}
			
			const imageSizes = image.node.childImageSharp.sizes;
			return (
				<ItemImageComponent>
					<Img sizes={imageSizes} alt={name}/>
				</ItemImageComponent>
			);
		}
		}
	/>
);

ItemImage.propTypes = {
	productImg: PropTypes.string,
	name: PropTypes.string
};

export default ItemImage;