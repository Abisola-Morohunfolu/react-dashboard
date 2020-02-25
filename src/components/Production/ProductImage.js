import React from 'react';
import '../../styles/componentsStyles/ProductImage.scss';

const ProductImage = () => {
	return (
		<div className="product__image-container">
			<figure className="product__image">
				<img src="assets/front.png" alt="Front" />
				<figcaption className="caption">Front</figcaption>
			</figure>
			<figure className="product__image">
				<img src="assets/back.png" alt="Back" />
				<figcaption className="caption">Back</figcaption>
			</figure>
			<figure className="product__image">
				<img src="assets/side.png" alt="Side" />
				<figcaption className="caption">Side</figcaption>
			</figure>
			<figure className="product__image">
				<img src="assets/side.png" alt="Side" />
				<figcaption className="caption">Side</figcaption>
			</figure>
		</div>
	);
};

export default ProductImage;
