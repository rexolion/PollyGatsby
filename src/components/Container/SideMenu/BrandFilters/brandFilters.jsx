import React from 'react';
import { StaticQuery, graphql} from 'gatsby';
import PropTypes from 'prop-types';
import BrandCheckbox from './BrandCheckbox/brandCheckbox';
import './brandFilters.css';



class BrandFiltersComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			brandMap: {},
			loadedArr: [],
		};
	}
    
	componentDidMount() {
		this.loadMore();
	}

	handleBrandsChange(branState) {
		this.setState(prev => {
			let bran = {};
			bran[branState] = !prev.brandMap[branState];
			return {...prev, brandMap: {...prev.brandMap, ...bran}};
		});
	}

	loadMore() {
		this.props.brands.sort((a,b) => a.node.manufacturer.length - b.node.manufacturer.length).splice(0,4).map(val => {
			this.setState(prev => ({loadedArr: [...prev.loadedArr, val.node.manufacturer]}));
		});
	}
    
	render() { 

		return ( 
			<>
			<h2 className="Heading-side_lg" >Brands</h2>
			<div className="Categories-checkboxes">
				{this.state.loadedArr.map((val,ind) => {return <BrandCheckbox brand={val} key={ind} 
					changeHandler={this.handleBrandsChange} isChecked={this.state.brandMap[val]}/>;})}
				<h5 onClick={() => this.loadMore()} className="Heading_more">+ MORE BRANDS</h5>
			</div>
			</>
		);
	}
}
 
BrandFiltersComponent.propTypes = {
	brands: PropTypes.array
};

const BrandFilters = () => (
	<StaticQuery 
		query={
			graphql`
                query BrandsQuery {
                    allItemsJson {
                        edges {
                            node {
                                manufacturer
                            }
                        }
                    }
                }
            `
		}
		render={data => {
			const brandsArr = data.allItemsJson.edges;
			const filteredArr = brandsArr.filter((val,ind) => ind === brandsArr.findIndex(obj => JSON.stringify(obj) === JSON.stringify(val)));
			return (<BrandFiltersComponent brands={filteredArr}/>
			);}}
	/>
);

export default BrandFilters;