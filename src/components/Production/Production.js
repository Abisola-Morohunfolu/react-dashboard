import React from 'react';
import ProductionTitle from './ProductionTitle';
import '../../styles/componentsStyles/Production.scss';
import ProductionSummary from './ProductionSummary';
import Product from './Product';

const Production = () => {
	return (
		<section className="Production">
			<ProductionTitle />
			<ProductionSummary />
			<Product />
		</section>
	);
};

export default Production;
