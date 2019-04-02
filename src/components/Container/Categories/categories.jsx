import React from 'react';
import './categories.css';

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			allOpen: false,
			menOpen: false,
			genOpen: false,
			girOpen: false,
			boyOpen: false,
			womOpen: false
		};
	}

	toogleAllMenu(catState) {
		this.setState(prev => {
			let state = {};
			state[catState] = !prev[catState];
			return state;
		});
	}
    
	toogleCategories() {
		return (
			<div className="Categories_open">
				<h4 className="Heading-side_sm">Outerwear</h4>
				<h4 className="Heading-side_sm">Dresses</h4>
				<h4 className="Heading-side_sm">T-Shirts</h4>
				<h4 className="Heading-side_sm">Sweatshirts</h4>
				<h4 className="Heading-side_sm">Jeans</h4>
				<h4 className="Heading-side_sm">Shirts</h4>
				<h4 className="Heading-side_sm">Blouses</h4>
				<h4 className="Heading-side_sm">Sweaters</h4>
				<h4 className="Heading-side_sm">Trousers</h4>
				<h4 className="Heading-side_sm">Skirts</h4>
				<h4 className="Heading-side_sm">Shorts</h4>
				<h4 className="Heading-side_sm">Accessories</h4>
			</div>
		);
	}
	render() { 
		return (   <div className="Categories">
			<div className="Categories-row">
				<h2 className="Heading-side_lg">Gender</h2>
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('allOpen')} >ALL</h3>
				{this.state.allOpen && this.toogleCategories()}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('menOpen')}>MEN</h3>
				{this.state.menOpen && this.toogleCategories()}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('womOpen')}>WOMEN</h3>
				{this.state.womlOpen && this.toogleCategories()}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('boyOpen')}>BOYS</h3>
				{this.state.boyOpen && this.toogleCategories()}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('girOpen')}>GIRLS</h3>
				{this.state.girOpen && this.toogleCategories()}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('genOpen')}>GENDER NEUTRAL</h3>
				{this.state.genOpen && this.toogleCategories()}
				<h2 className="Heading-side_lg" >Brands</h2>
				<div className="Categories-checkboxes">
					<div className="Checkbox-container">Adidas
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
					<div className="Checkbox-container">Nike
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
					<div className="Checkbox-container">Rebook
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
					<div className="Checkbox-container">Converse
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
					<div className="Checkbox-container">Cat
						<input type="checkbox"  checked="checked"></input>
						<span className="Checkmark"></span>
					</div>
				</div>
				<h5 className="Heading_more">+ MORE BRANDS</h5>
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
 
export default Categories;

  