import React from 'react';
import ProductHeading from './ProductHeading';
import ProductLine from './ProductLine';
import '../../styles/componentsStyles/Product.scss';

const Product = () => {
	return (
		<div className="product">
			<ProductHeading />
			<ProductLine />
		</div>
	);
};

export default Product;
