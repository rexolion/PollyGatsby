import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './logo.css';

const Logo = (props) => (
	<span className="Logo">
		<Link
			to="/"
			style={{
				color: 'white',
				textDecoration: 'none',
			}}
		>
			{props.siteTitle}
		</Link>
	</span>
);

Logo.propTypes = {
	siteTitle: PropTypes.string
};
 
export default Logo;