import React from 'react';
import PropTypes from 'prop-types';
import './filterBy.css';

const FilterBy = ({ toogle, sort, toogleList }) => (
	<div className={toogle ? 'Filter_by_pressed' : 'Filter_by'} onClick={toogleList} >
		<span className="Filter-text">{sort}</span>
		<div className={toogle ? 'Arrow Arrow_right' : 'Arrow Arrow_down'}></div>
	</div>

);

FilterBy.propTypes = {
	sort: PropTypes.string,
	toogleList: PropTypes.func,
	toogle: PropTypes.bool
};

export default FilterBy;