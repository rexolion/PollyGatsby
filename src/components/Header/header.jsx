import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from './Dropdown/dropdown';
import Cart from './Cart/cart';
import './header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.state = {
			isHovering: false
		};
	}

	handleMouseHover() {
		this.setState(prev => ({isHovering: !prev.isHovering}));
	}


	render() {
		return (
			<header className="Header">
				<div className="Header-items">
					<ul className="Bullet-container">
						<span className="Logo">
							<Link
								to="/"
								style={{
									color: 'white',
									textDecoration: 'none',
								}}
							>
								{this.props.siteTitle}
							</Link>
						</span>
						<div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className="Bullet-item">
							<li className="Header_lh ">MAN</li>
							{this.state.isHovering && <Dropdown/>}
        
						</div>
						<div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className="Bullet-item">
							<li className="Header_lh ">WOMEN</li>
							{this.state.isHovering && <Dropdown/>}
        
						</div>
						<div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className="Bullet-item">
							<li className="Header_lh ">OTHER</li>
							{this.isHovering && <Dropdown/>}
        
						</div>
						
						<li className="Header_lh ">FAQ</li>
						<li className="Header_lh ">ACCOUNT</li>
						<li className="Header_lh ">CRACKER</li>
						<Cart cartCounter={this.props.cartCounter} />
						<div className="Icon_menu"></div>
					</ul>
				</div>
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





































