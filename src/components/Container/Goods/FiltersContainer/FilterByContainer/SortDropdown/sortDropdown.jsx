import React from 'react';
import PropTypes from 'prop-types';
import './sortDropdown.css';

const SortDropdown = ({toogleSort}) => (
	<ul className="SortDropdown-container">
		<li className="SortDropdown-item" onClick={() => toogleSort('Relevant')}>Relevant</li>
		<li className="SortDropdown-item" onClick={() => toogleSort('Price_up')}>By price up </li>
		<li className="SortDropdown-item" onClick={() => toogleSort('Price_down')}>By price down </li>
		<li className="SortDropdown-item" onClick={() => toogleSort('Rating')}>By rating</li>
	</ul>
);

SortDropdown.propTypes = {
	toogleSort: PropTypes.func
};

export default SortDropdown;