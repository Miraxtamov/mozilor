import React from "react";
import productsWebtoffee from "../../../assets/imgs/products-webtoffee.png";
import webtoffee from "../../../assets/icons/webtoffee.svg";
import { ProductsWebtoffeeContainer } from "./style";

const ProductsWebtoffee = () => {
	return (
		<ProductsWebtoffeeContainer>
			<ProductsWebtoffeeContainer.Img>
				<img src={productsWebtoffee} alt="productsWebtoffee" />
			</ProductsWebtoffeeContainer.Img>
			<ProductsWebtoffeeContainer.Info>
				<ProductsWebtoffeeContainer.InfoImg src={webtoffee} alt="webtoffee" />
				<ProductsWebtoffeeContainer.InfoDesc>
					Streamline eCommerce businesses and create amazing customer
					experiences with our WordPress/WooCommerce plugins and extensions.
					Manage your day-to-day operations with extensions for product imports,
					smart coupons, payment gateways, subscriptions and more. WebToffee
					builds some of the most popular and top-rated plugins in the
					marketplace and powers over 1.3 million online stores and websites.
				</ProductsWebtoffeeContainer.InfoDesc>
				<ProductsWebtoffeeContainer.InfoBtn className="btn-outline">
					Visit Webtoffee
				</ProductsWebtoffeeContainer.InfoBtn>
			</ProductsWebtoffeeContainer.Info>
		</ProductsWebtoffeeContainer>
	);
};

export default ProductsWebtoffee;
