import React from 'react';
import './account.css';

const Account = () => (
	<div className="Account Header-button">
		<AccountSVG/>
	</div>
);

const AccountSVG = () => {
	return (
		<svg className="Icon-user"version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 512 512" styles="enable-background:new 0 0 512 512;" xmlSpace="preserve">
			<g>
				<g>
					<path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
c59.551,0,108,48.448,108,108S315.551,256,256,256z"/>
				</g>
			</g>
		</svg>
	);
};
 
export default Account;