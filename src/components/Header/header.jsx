import PropTypes from 'prop-types';
import React from 'react';
import './header.css';
import HeaderItems from './HeaderItems/headerItems';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<header className="Header">
				<HeaderItems siteTitle={this.props.siteTitle} cartCounter={this.props.cartCounter} />
			</header>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
	cartCounter: PropTypes.number
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;





































