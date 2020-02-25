import React from 'react';
import SingleOrder from './SingleOrder';
import OrdersNav from './OrdersNav';
import Title from '../Title';
import '../../styles/componentsStyles/Orders.scss';
import OrderHeaders from './OrdersHeader';

const Orders = () => {
	return (
		<div className="Orders">
			<Title />
			<OrdersNav />
			<OrderHeaders />
			<SingleOrder />
			<SingleOrder />
		</div>
	);
};

export default Orders;
