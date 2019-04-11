import React from 'react';
import PropTypes from 'prop-types';



class CartModalItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() { 
		const {name, itemType, quantity, price} = this.props.item;
		return ( 
			<div className="CartModal-cart-container">
				<div className="CartModal-item">
					<div className="CartModal-item-image"></div>
					<div className="CartModal-item-text">
						<h2 className="CartModal-heading_sm">{name}</h2>
						<span className="CartModal-sm">{itemType}</span>
					</div>
					<div className="CartModal-counter">
						<div className="CartModal-counter-butt">+</div>
						<div className="CartModal-counter-res">{quantity}</div>
						<div className="CartModal-counter-butt">-</div>
					</div>
					<span className="CartModal-heading_md">${price}</span>
					<div className="CartModal-item-close">
						<span className="Icon_close"></span>
					</div>
				</div>
			</div>
		);
	}
}
 

CartModalItem.propTypes = {
	item: PropTypes.object
};

export default CartModalItem;

// const ItemImage = ({productImg, name}) => (
// 	<StaticQuery
// 		query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 sizes(maxWidth: 600) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//         }
//       }
    
//     `}
// 		render={data => 
// 		{
			
// 			const image = data.images.edges.find(n =>
// 				n.node.relativePath.includes(productImg));
// 			if (!image) {return null;}
			
// 			const imageSizes = image.node.childImageSharp.sizes;
// 			return (
// 				<ItemImageComponent>
// 					<Img sizes={imageSizes} alt={name}/>
// 				</ItemImageComponent>
// 			);
// 		}
// 		}
// 	/>
// );