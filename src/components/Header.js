import React from 'react';
import classes from '../styles/utilities/Notification.module.scss';
import '../styles/componentsStyles/Header.scss';

const Header = () => {
	return (
		<header className="Header">
			<div className="logo">
				<img src="assets/logo.svg" alt="Sameday Custom" className="Header-logo" />
			</div>
			<form action="#" class="search">
				<button class="search__button">
					<svg class="search__icon">
						<use xlinkHref="assets/magnifying-glass.svg#search"></use>
					</svg>
				</button>
				<input type="search" class="search__input" placeholder="Search"></input>
			</form>
			<nav className="user__nav">
				<div className="user__nav-box">
					<div className="user__nav-icon__box">
						<svg class="user__nav-icon">
							<use xlinkHref="assets/mail.svg#mail"></use>
						</svg>
						<span className={`${classes.NotificationIcon} ${classes.Blue}`}>1</span>
					</div>
					<span className="user__nav-text">Messages</span>
				</div>
				<div className="user__nav-box">
					<div className="user__nav-icon__box">
						<svg class="user__nav-icon">
							<use xlinkHref="assets/icon-supply.svg#supply"></use>
						</svg>
						<span className={`${classes.NotificationIcon} ${classes.Blue}`}>1</span>
					</div>
					<span className="user__nav-text">Market Place</span>
				</div>
				<div className="user__nav-box">
					<div className="user__nav-icon__box">
						<svg class="user__nav-icon">
							<use xlinkHref="assets/icon-notification.svg#notification"></use>
						</svg>
						<span className={`${classes.NotificationIcon} ${classes.Blue}`}>1</span>
					</div>
					<span className="user__nav-text">Notification</span>
				</div>
				<div className="user__nav-user">
					<img src="assets/user.jpg" alt="User" className="user__nav-user-img" />
					<span className="user__nav-user__name">Me</span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
