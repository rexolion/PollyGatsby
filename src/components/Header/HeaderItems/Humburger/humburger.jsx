import React from 'react';
import PropTypes from 'prop-types';
import HumburgerModal from './HumburgerModal/humburgerModal';
import './humburger.css';


class Humburger extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			isOpened: false
		};
	}

	handleHumClick = () => {
		this.props.modalOpened();
		this.setState(prev => ({isOpened: !prev.isOpened}));
	}

	render() { 
		return ( 
			<div className="Icon_menu" onClick={this.handleHumClick}>
				<HumburgerSVG/>
				{this.state.isOpened && <HumburgerModal open={this.state.isOpened}/>}
			</div>
		);
	}
}
 

const HumburgerSVG = () => {
	return (
		<svg className="Icon_menu" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 512 512" fill="#ffffff" styles="enable-background:new 0 0 512 512; fill: #ffffff;" xmlSpace="preserve" >
			<g>
				<g>
					<path d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z"/>
				</g>
			</g>
			<g>
				<g>
					<path d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636
			c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z"/>
				</g>
			</g>
		</svg>

	);
};

Humburger.propTypes = {
	modalOpened: PropTypes.func
};
 
export default Humburger;