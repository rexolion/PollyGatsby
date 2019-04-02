import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './logo.css';


class Logo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		return ( 
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
						
		);
	}
}

Logo.propTypes = {
	siteTitle: PropTypes.string
};
 
export default Logo;