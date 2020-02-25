import React from 'react';
import Buttons from '../../styles/utilities/Button.module.scss';
import Notifications from '../../styles/utilities/Notification.module.scss';
import '../../styles/componentsStyles/OrderNav.scss';
import cx from 'classnames';

const OrdersHeader = () => {
	return (
		<div className="orders-nav">
			<h3 className="heading-3 heading-3--active">
				<span className="heading-3--main">All Production </span>
				<span className={cx(Notifications.NotificationIcon, Notifications.Grey)}>192</span>
			</h3>
			<h3 className="heading-3">
				<span className="heading-3--main">Awaiting Production </span>
				<span className={cx(Notifications.NotificationIcon, Notifications.Red)}>19</span>
			</h3>
			<h3 className="heading-3">Completed</h3>
			<button className={cx(Buttons.Button, Buttons.OutlineGrey)}>Print worksheet</button>
			<h3 className="heading-3 ml-sm">Mark As Complete &#9660;</h3>
			<button className={cx(Buttons.Button, Buttons.GreyBtn)}>Save</button>
		</div>
	);
};

export default OrdersHeader;
