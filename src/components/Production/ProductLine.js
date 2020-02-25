import React from 'react';
import cx from 'classnames';
import Buttons from '../../styles/utilities/Button.module.scss';
import '../../styles/componentsStyles/ProductLine.scss';
import ProductImage from './ProductImage';

const ProductLine = () => {
	return (
		<div className="product__line">
			<div className="product__line-heading-box">
				<h5 className="product__line-heading">Product</h5>
				<button className={cx(Buttons.Button, Buttons.OutlineBlue)}>Download Artwork</button>
			</div>
			<ProductImage />
		</div>
	);
};

export default ProductLine;
