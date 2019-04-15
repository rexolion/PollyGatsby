import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import './banner.css';

const BannerComponent = ({children}) => (
	<div className='Banner'>
		{children}
		<h2 className="Banner-heading">50% off on shirts!</h2>
	</div>
);

BannerComponent.propTypes = {
	children: PropTypes.object,
};

const Banner = () => (
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
				n.node.relativePath.includes('cabinet-clothes-clothes-hanger-996329.jpg'));
			if (!image) {return null;}
			
			const imageSizes = image.node.childImageSharp.sizes;
			return (
				<BannerComponent>
					<Img sizes={imageSizes} alt={'50% off on shirts!'}/>
				</BannerComponent>
			);
		}
		}
	/>
);

export default Banner;