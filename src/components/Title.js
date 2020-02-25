import React from 'react';
import cx from 'classnames';
import Buttons from '../styles/utilities/Button.module.scss';
import '../styles/componentsStyles/Title.scss';

const Title = () => {
	return (
		<section className="product__info">
			<h2 className="product__heading">
				<span>
					<svg class="product__heading-icon">
						<use xlinkHref="assets/product.svg#product"></use>
					</svg>
				</span>
				<span className="product__heading-text">Production House</span>
			</h2>
			<button className={cx(Buttons.Button, Buttons.BlueBtn)}>Categories &#9660;</button>
			<div className="product__search">
				<input
					type="search"
					name="product__search-input"
					id="product__search-input"
					className="product__search-input"
				/>
				<label htmlFor="product__search-input" className="product__search__label">
					<span>
						<svg class="product__search__label-icon">
							<use xlinkHref="assets/magnifying-glass.svg#search"></use>
						</svg>
					</span>
					<span>X</span>
				</label>
			</div>
		</section>
	);
};

export default Title;
