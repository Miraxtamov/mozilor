import React from "react";
import ProductsMainImg from "../../../assets/icons/products-main.svg";
import { ProductsMainContainer } from "./style";

const ProductsMain = () => {
	return (
		<ProductsMainContainer>
			<ProductsMainContainer.Img
				src={ProductsMainImg}
				alt="Products Main Img"
			/>
			<ProductsMainContainer.Info>
				<ProductsMainContainer.InfoTitle>
					Tools that transform how businesses work
				</ProductsMainContainer.InfoTitle>
				<ProductsMainContainer.InfoDescription>
					We help manage businesses better with our applications, plugins,
					extensions and offer productive experiences for teams and customers
					alike.
				</ProductsMainContainer.InfoDescription>
			</ProductsMainContainer.Info>
		</ProductsMainContainer>
	);
};

export default ProductsMain;
