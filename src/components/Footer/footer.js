import React from 'react';
import './footer.css';

const Footer = () => (
	<footer className="Footer">
		<div className="Footer-container">
			<div className="Footer-left">
				<div className="Footer-text-container">
					<div className="Logo">Basement</div>
					<p className="Footer-para">
            This footer really make you fuckin happy right now
					</p>
				</div>
			</div>
			<div className="Footer-right row">
				<div className="Footer-columns">
					<ul className="column">
						<li className="column-item Footer-heading_md">PRODUCT</li>
						<li className="column-item">Plans</li>
						<li className="column-item">App Directory</li>
						<li className="column-item">About us</li>
						<li className="column-item">Privacy</li>
					</ul>
					<ul className="column">
						<li className="column-item Footer-heading_md">RESOURCES</li>
						<li className="column-item">Help</li>
						<li className="column-item">FAQs</li>
						<li className="column-item">Product Hunt</li>
					</ul>
					<ul className="column">
						<li className="column-item Footer-heading_md">CONTACT</li>
						<li className="column-item">Email us</li>
						<li className="column-item">Chat on Slack</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
