import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const Header = ({ siteTitle }) => (
	<header className="Header-container">
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
						{siteTitle}
					</Link>
				</span>
				<li className="Header_lh ">For man</li>
				<li className="Header_lh ">For woman</li>
				<li className="Header_lh ">For other</li>
				<li className="Header_lh ">FAQ</li>
				<li className="Header_lh ">Account</li>
				<li className="Header_lh ">Cracker</li>
			</ul>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
