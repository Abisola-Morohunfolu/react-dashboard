import React from 'react';
import { Link } from 'react-router-dom';
import CheckBox from '../../styles/utilities/Checkbox.module.scss';
import Buttons from '../../styles/utilities/Button.module.scss';
import cx from 'classnames';
import '../../styles/componentsStyles/SingleOrder.scss';

const SingleOrder = () => {
	return (
		<div className="single__order">
			<div className="single__order-checkbox">
				<input type="checkbox" name="Checkbox" id="Checkbox" className={CheckBox.Checkbox}></input>
				<label htmlFor="CheckBox" className={CheckBox.CheckboxLabel}>
					<span className={CheckBox.Custom}></span>
				</label>
			</div>
			<Link to="/production" className="Link">
				<ul className="single__order-details">
					<li className="single__order-items">#232JODJSDKN2</li>
					<li className="single__order-items">#232JODJSDKN2</li>
					<li className="single__order-items">
						<span className="single__order-items__details">
							<span className="single__order-items__details-img">
								<img src="assets/img1-small.png" alt="Order item" className="item-img" />
							</span>
							<span className="single__order-items__details-text">
								No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)
							</span>
						</span>
					</li>
					<li className="single__order-items">
						<button className={cx(Buttons.Button, Buttons.RoyalBtn)}>Royal</button>
					</li>
					<li className="single__order-items">L X 4</li>
					<li className="single__order-items">DTG Print</li>
					<li className="single__order-items">
						<span className="single__order-items__delivery">
							<span className="single__order-items__delivery-icon">
								<svg>
									<use xlinkHref="assets/icon-stopwatch.svg#stopwatch"></use>
								</svg>
							</span>
							<span className="single__order-items__delivery-text">Rush Shipping</span>
						</span>
					</li>
					<li className="single__order-items">23 - June - 2019</li>
					<li className="single__order-items">Running 2 of 5</li>
				</ul>
			</Link>
		</div>
	);
};

export default SingleOrder;
