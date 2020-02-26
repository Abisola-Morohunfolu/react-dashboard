import React from 'react';
import CheckBox from '../../styles/utilities/Checkbox.module.scss';
import '../../styles/componentsStyles/OrdersHeaders.scss';

const OrderHeaders = () => {
	return (
		<div className="orders-heading">
			<div className="orders-checkbox">
				<input type="checkbox" name="Checkbox" id="Checkbox" className={CheckBox.Checkbox}></input>
				<label htmlFor="CheckBox" className={CheckBox.CheckboxLabel}>
					<span className={CheckBox.Custom}></span>
				</label>
			</div>
			<h5 className="heading-5">Orders #</h5>
			<h5 className="heading-5">Item #</h5>
			<h5 className="heading-5">Details</h5>
			<h5 className="heading-5">Colors</h5>
			<h5 className="heading-5">Qty</h5>
			<h5 className="heading-5">Print Type</h5>
			<h5 className="heading-5">Delivery Method</h5>
			<h5 className="heading-5">Delivery Time</h5>
			<h5 className="heading-5">Production Status</h5>
		</div>
	);
};

export default OrderHeaders;
