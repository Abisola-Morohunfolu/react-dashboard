import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../styles/utilities/Button.module.scss';
import '../../styles/componentsStyles/ProductionTitle.scss';

const ProductionTitle = () => {
	return (
		<section className="production__info">
			<div className="production-btn">
				<Link to="/">
					<button className={Buttons.Button}>
						<span>&#8592;</span> Back
					</button>
				</Link>
			</div>
			<h2 className="production__heading">
				<span>
					<svg class="production__heading-icon">
						<use xlinkHref="assets/product.svg#product"></use>
					</svg>
				</span>
				<span className="production__heading-text">Production House</span>
			</h2>
		</section>
	);
};

export default ProductionTitle;
