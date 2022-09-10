import React from "react";
import ProductsBuild from "./ProductsBuild";
import ProductsCookieyes from "./ProductsCookieyes";
import ProductsMain from "./ProductsMain";
import ProductsWebtoffee from "./ProductsWebtoffee";

const Products = () => {
	return (
		<div className="container">
			<ProductsMain />
			<ProductsCookieyes />
			<ProductsWebtoffee />
			<ProductsBuild />
		</div>
	);
};

export default Products;
