import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo/logo';
import Search from './Search/search';
import HeaderButtons from './HeaderButtons/headerButtons';
import Humburger from './Humburger/humburger';
import './headerItems.css';


class HeaderItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			searchIconPressed: false,
		};
	}

	handleSearchIconPressed = () => {
		this.setState(prev => ({searchIconPressed: !prev.searchIconPressed}));
	}

	showButtons = () => (
		<>
		<HeaderButtons inCart={this.props.inCart} cartModalOpened={this.props.cartModalOpened} searchIconPressed={this.state.searchIconPressed}  cartCounter={this.props.cartCounter}/> 
		<Humburger/>
		</>
	);

	render() { 
		return ( 
			<div className="Header-items">
				<ul className="Bullet-container">
					<Logo siteTitle={this.props.siteTitle} />
					<Search handleSearchIconPressed={this.handleSearchIconPressed} searchHandler={this.props.searchHandler} searchValue={this.props.searchValue}/>
					{!this.state.searchIconPressed && this.showButtons()}
				</ul>
			</div>
		);
	}
}

HeaderItems.propTypes = {
	cartCounter: PropTypes.number,
	siteTitle: PropTypes.string,
	searchHandler: PropTypes.func,
	searchValue: PropTypes.string,
	cartModalOpened: PropTypes.func,
	inCart: PropTypes.array
};
 
export default HeaderItems;