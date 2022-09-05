import React from "react";
import cookieyes from "../../../assets/icons/cookieyes.svg";
import cookieyesDashboard from "../../../assets/imgs/cookieyes-dashboard.png";
import webtoffee from "../../../assets/icons/webtoffee.svg";
import webtoffeGr from "../../../assets/imgs/webtoffe-gr.png";
import { LineProductsContainer } from "./style";

const LineProducts = () => {
	return (
		<>
			<LineProductsContainer.Title>
				Our line of products
			</LineProductsContainer.Title>
			<LineProductsContainer.Desc>
				Here’s what we’re building to help businesses deliver amazing customer
				experiences.
			</LineProductsContainer.Desc>
			<LineProductsContainer>
				<LineProductsContainer.CardWrapper>
					<LineProductsContainer.CardImg src={cookieyes} />
					<LineProductsContainer.CardDesc>
						Cookie consent solution for privacy compliance.
					</LineProductsContainer.CardDesc>
					<LineProductsContainer.Btn className="btn-outline">
						Lear more
					</LineProductsContainer.Btn>
					<LineProductsContainer.ImgBottom src={cookieyesDashboard} />
				</LineProductsContainer.CardWrapper>
				<LineProductsContainer.CardWrapper>
					<LineProductsContainer.CardImg src={webtoffee} />
					<LineProductsContainer.CardDesc>
						Plugins and extensions for eCommerce needs.
					</LineProductsContainer.CardDesc>
					<LineProductsContainer.Btn className="btn-outline">
						Lear more
					</LineProductsContainer.Btn>
					<LineProductsContainer.ImgBottom src={webtoffeGr} />
				</LineProductsContainer.CardWrapper>
			</LineProductsContainer>
		</>
	);
};

export default LineProducts;
