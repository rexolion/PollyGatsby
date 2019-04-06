import React from 'react';
import './sideMenu.css';
import Categories from './Categories/categories';
import BrandFilters from './BrandFilters/brandFilters';

class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		};
	}

	render() { 
		return (   <div className="Categories">
			<div className="Categories-row">
				<h2 className="Heading-side_lg">Gender</h2>
				<Categories/>
				<h2 className="Heading-side_lg" >Brands</h2>
				<BrandFilters/>
				<h2 className="Heading-side_lg">Size</h2>
				<div className="Size-row">
					<div className="Size-col">
						<div className="Size-box">
							<span className="Size-text">XS</span>
						</div>
					</div>
					<div className="Size-col">
						<div className="Size-box">
							<span className="Size-text">S</span>
						</div>
					</div>
					<div className="Size-col">
						<div className="Size-box">
							<span className="Size-text">M</span>
						</div>
					</div>
				</div>
				<div className="Size-row">
					<div className="Size-col">
						<div className="Size-box">
							<span className="Size-text">L</span>
						</div>
					</div>
					<div className="Size-col">
						<div className="Size-box">
							<span className="Size-text">XL</span>
						</div>
					</div>
					<div className="Size-col">
						<div className="Size-box">
							<span className="Size-text">XXL</span>
						</div>
					</div>
				</div>
				<h5 className="Heading_more">+ MORE SIZES</h5>
				<h2 className="Heading-side_lg">Colors</h2>
				<div className="Colors-row row">
					<div className="Colors-col col white"></div>
					<div className="Colors-col col black"></div>
					<div className="Colors-col col yellow"></div>
					<div className="Colors-col col purple"></div>
					<div className="Colors-col col magenta"></div>
				</div>
				<div className="Colors-row row">
					<div className="Colors-col col deep-blue"></div>
					<div className="Colors-col col bloody"></div>
					<div className="Colors-col col green"></div>
					<div className="Colors-col col red"></div>
					<div className="Colors-col col blue"></div>
            
				</div>
				<h5 className="Heading_more">+ MORE COLORS</h5>
			</div>
		</div>);
	}
}
 
export default SideMenu;

  