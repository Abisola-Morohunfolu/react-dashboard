import React from 'react';
import '../styles/componentsStyles/Header.scss';

const Header = () => {
	return (
		<header className="Header">
			<div className="logo">
				<img src="assets/logo.svg" alt="Sameday Custom" className="header-logo" />
			</div>
		</header>
	);
};

export default Header;
