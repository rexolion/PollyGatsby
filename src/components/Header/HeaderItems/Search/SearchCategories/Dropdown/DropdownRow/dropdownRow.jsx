import React from 'react';
import DropdownHeadingsLeft from './DropdownHeadingsLeft/dropdownHeadingsLeft';
import DropdownHeadingsShoes from './DropdownHeadingsShoes/dropdownHeadingsShoes';
import DropdownHeadingsCloAcc from './DropdownHeadingsCloAcc/dropdownHeadingsCloAcc';
import DropdownHeadingsColl from './DropdownHeadingsColl/dropdownHeadingsColl';
import './dropdownRow.css';

const DropdownRow = () => (
	<div className="Dropdown-row">
		<DropdownHeadingsLeft/>
		<DropdownHeadingsShoes/>
		<DropdownHeadingsCloAcc/>
		<DropdownHeadingsColl/>
	</div>
);

export default DropdownRow;