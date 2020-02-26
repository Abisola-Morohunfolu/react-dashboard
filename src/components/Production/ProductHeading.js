import React from 'react';
import cx from 'classnames';
import Buttons from '../../styles/utilities/Button.module.scss';
import '../../styles/componentsStyles/ProductHeader.scss';

const ProductHeading = () => {
	return (
		<div className="product__header">
			<h5 className="product-heading">Product Details</h5>
			<h5 className="product-heading">History / Notes</h5>
			<button className={cx(Buttons.Button, Buttons.GreenBtn)}>Worksheet</button>
			<button className={cx(Buttons.Button, Buttons.GreyBtn)}>Print</button>
			<button className={cx(Buttons.Button, Buttons.OutlineGrey)}>Add Note</button>
			<button className={cx(Buttons.Button, Buttons.BlueBtn)}>Complete Production</button>
		</div>
	);
};

export default ProductHeading;
