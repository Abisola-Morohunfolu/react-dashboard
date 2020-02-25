import React from 'react';
import cx from 'classnames';
import '../../styles/componentsStyles/ProductionSummary.scss';
import Buttons from '../../styles/utilities/Button.module.scss';

const ProductionSummary = () => {
	return (
		<section className="production__summary">
			<h5 className="production-heading-1">Order: #ADJ2322434D</h5>
			<div className="production__summary-status">
				<p className="paragraph">Account Setup > Delivery Method</p>
				<h6 className="production-heading-1 production-heading-light">Production Status</h6>
				<h5 className="production-heading-2">Running 2 of 4</h5>
			</div>

			<section className="production__summary-details">
				<div className="production__summary-box">
					<h6 className="production__summary-details-heading">
						<span className="production__summary-icon">
							<svg>
								<use xlinkHref="assets/icon-supply.svg#supply"></use>
							</svg>
						</span>
						Order Value
					</h6>
					<p className="production__summary-details-text">$40,000</p>
				</div>
				<div className="production__summary-box">
					<h6 className="production__summary-details-heading">Order Date</h6>
					<p className="production__summary-details-text">25 - June - 2017</p>
				</div>
				<div className="production__summary-box">
					<h6 className="production__summary-details-heading">Delivery Method</h6>
					<p className="production__summary-details-text">
						Pickup Order
						<button className={cx(Buttons.Button, Buttons.GreenBtn)}>Can Edit &#9660;</button>
					</p>
				</div>
				<div className="production__summary-box">
					<h6 className="production__summary-details-heading">Rush Option</h6>
					<p className="production__summary-details-text">
						<span className="check">&#10003;</span>
						Rush
					</p>
				</div>
				<div className="production__summary-box">
					<h6 className="production__summary-details-heading">Status</h6>
					<p className="production__summary-details-text">Pending</p>
				</div>
				<div className="production__summary-box">
					<h6 className="production__summary-details-heading">Requested By</h6>
					<p className="production__summary-details-text">25 - June - 2017</p>
					<p className="production__summary-details-text mt-2">
						<span className="grey">Time Left </span> <span className="green">10:00:00</span>
					</p>
				</div>
				<div className="production__summary-box w-60">
					<h6 className="production__summary-details-heading ">Shipped or Picked Date</h6>
					<p className="production__summary-details-text">25 - June - 2017</p>
				</div>
			</section>
		</section>
	);
};

export default ProductionSummary;
