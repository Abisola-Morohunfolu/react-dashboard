import React, { useState } from 'react';
import '../styles/componentsStyles/SideNav.scss';

const SideNav = () => {
	const [menuState, setMenuState] = useState({ isOpen: false });

	const toggleMenuOpen = () => {
		let tempState = menuState.isOpen;

		setMenuState({
			isOpen: !tempState
		});
	};

	return (
		<nav className="SideNav">
			<div className="nav-toggle" onClick={toggleMenuOpen}>
				<span className={`${menuState.isOpen ? 'inactive' : 'active'}`}>&#x2630;</span>
				<span className={`${menuState.isOpen ? 'active' : 'inactive'}`}>&#10006;</span>
			</div>

			<div className="nav-container">
				<ul className="nav__list">
					<li className="nav__item">
						<svg className="nav-icon">
							<use xlinkHref="assets/icon-dashboard.svg#dashboard"></use>
						</svg>
						<span className={`${menuState.isOpen ? 'nav__link nav__link-open' : 'nav__link'}`}>
							Dashboard
						</span>
					</li>
					<li
						className={`${
							menuState.isOpen ? 'nav__item nav__item-open' : 'nav__item nav__item-active'
						}`}
					>
						<svg className="nav-icon nav-icon-active">
							<use xlinkHref="assets/icon-operations.svg#operations"></use>
						</svg>
						<span
							className={`${
								menuState.isOpen ? 'nav__link nav__link-open nav__link-active' : 'nav__link'
							}`}
						>
							Operations
						</span>
					</li>
					<li className="nav__item">
						<svg className="nav-icon">
							<use xlinkHref="assets/icon-records.svg#records"></use>
						</svg>
						<span className={`${menuState.isOpen ? 'nav__link nav__link-open' : 'nav__link'}`}>
							Records
						</span>
					</li>
					<li className="nav__item">
						<svg className="nav-icon">
							<use xlinkHref="assets/icon-supply.svg#supply"></use>
						</svg>
						<span className={`${menuState.isOpen ? 'nav__link nav__link-open' : 'nav__link'}`}>
							Supply Store
						</span>
					</li>
					<li className="nav__item">
						<svg className="nav-icon">
							<use xlinkHref="assets/icon-marketplace.svg#marketplace"></use>
						</svg>
						<span className={`${menuState.isOpen ? 'nav__link nav__link-open' : 'nav__link'}`}>
							Market Place
						</span>
					</li>
					<li className="nav__item">
						<svg className="nav-icon">
							<use xlinkHref="assets/icon-forum.svg#forum"></use>
						</svg>
						<span className={`${menuState.isOpen ? 'nav__link nav__link-open' : 'nav__link'}`}>
							Forum
						</span>
					</li>
					<li className="nav__item">
						<svg className="nav-icon">
							<use xlinkHref="assets/icon-settings.svg#settings"></use>
						</svg>
						<span className={`${menuState.isOpen ? 'nav__link nav__link-open' : 'nav__link'}`}>
							Settings
						</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default SideNav;
