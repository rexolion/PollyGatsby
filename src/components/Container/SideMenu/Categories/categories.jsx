import React from 'react';
import SubCategories from './SubCategories/subCategories';
import './categories.css';

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			categoriesMap: {},
		};
	}
    
	toogleAllMenu(catState) {
		this.setState(prev => {
			let cat = {};
			cat[catState] = !prev.categoriesMap[catState];
			return {...prev,categoriesMap: {...prev.categoriesMap, ...cat}};
		});
	}

	render() { 
		return ( 
            <>
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('allOpen')} >ALL</h3>
				{this.state.categoriesMap['allOpen'] && <SubCategories/>}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('menOpen')}>MEN</h3>
				{this.state.categoriesMap['menOpen'] && <SubCategories/>}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('womOpen')}>WOMEN</h3>
				{this.state.categoriesMap['womOpen'] && <SubCategories/>}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('boyOpen')}>BOYS</h3>
				{this.state.categoriesMap['boyOpen'] && <SubCategories/>}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('girOpen')}>GIRLS</h3>
				{this.state.categoriesMap['girOpen'] && <SubCategories/>}
				<h3 className="Heading-side_md" onClick={() => this.toogleAllMenu('genOpen')}>GENDER NEUTRAL</h3>
                {this.state.categoriesMap['genOpen'] && <SubCategories/>}
            </>
		);
	}
}
 

export default Categories;