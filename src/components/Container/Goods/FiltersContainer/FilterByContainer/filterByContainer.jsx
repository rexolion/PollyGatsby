import React from 'react';
import PropTypes from 'prop-types';
import FilterBy from './FilterBy/filterBy';
import SortDropdown from './SortDropdown/sortDropdown';
import './filterByContainer.css';

class FilterByContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toogle: false
		};
	}

	toogleList = () => {
		this.setState(prev => ({ toogle: !prev.toogle }));
	}

	render() {
		const { sort, toogleSort } = this.props;
		return (
			<div className='FilterBy-container'>
				<FilterBy toogle={this.state.toogle} sort={sort} toogleList={this.toogleList} />
				{this.state.toogle && <SortDropdown toogleSort={toogleSort} />}
			</div>
		);
	}
}

FilterByContainer.propTypes = {
	sort: PropTypes.string,
	toogleSort: PropTypes.func

};


export default FilterByContainer;