import React from "react";
import cookieyes from "../../../assets/icons/cookieyes.svg";
import productsCookieyes from "../../../assets/imgs/products-cookieyes.png";
import { ProductsCookieyesContainer } from "./style";

const ProductsCookieyes = () => {
	return (
		<ProductsCookieyesContainer>
			<ProductsCookieyesContainer.Info>
				<ProductsCookieyesContainer.InfoImg src={cookieyes} />
				<ProductsCookieyesContainer.InfoDesc>
					Build brand trust and minimize legal risks with the market-leading
					consent management platform that helps businesses comply with global
					privacy regulations. Display cookie consent banners, manage consent,
					generate policy documents and privacy-proof websites with CookieYes.
					CookieYes is the #1 cookie compliance technology with over 1.2 million
					user base, powering global brands to s tartups across US, UK and
					Europe.
				</ProductsCookieyesContainer.InfoDesc>
				<ProductsCookieyesContainer.InfoBtn className="btn-outline">
					Visit CookieYes
				</ProductsCookieyesContainer.InfoBtn>
			</ProductsCookieyesContainer.Info>
			<ProductsCookieyesContainer.Img>
				<img src={productsCookieyes} alt="productsCookieyes" />
			</ProductsCookieyesContainer.Img>
		</ProductsCookieyesContainer>
	);
};

export default ProductsCookieyes;
