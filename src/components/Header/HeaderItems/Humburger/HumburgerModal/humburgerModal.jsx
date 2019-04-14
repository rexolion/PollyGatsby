import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import HumburgerModalContainer from './HumburgerModalContainer/humburgerModalContainer';
import './humburgerModal.css';

const HumburgerModal = ({open,onClose}) => 
	open 
		? ReactDOM.createPortal(
			<HumburgerModalContainer onClose={onClose} />,
			document.body)
		: null;


HumburgerModal.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

export default HumburgerModal;