import React from "react";
import HomeMainImg from "../../../assets/icons/hero-img.svg";
import { HomeMainContainer } from "./style";

const HomeMain = () => {
	return (
		<>
			<HomeMainContainer>
				<HomeMainContainer.Img src={HomeMainImg} alt="Home Main Img" />
				<HomeMainContainer.Info>
					<HomeMainContainer.Title>
						We build products to simplify work for businesses
					</HomeMainContainer.Title>
					<HomeMainContainer.Description>
						Our next-gen products empower businesses to implement agility and
						accelerate growth.
					</HomeMainContainer.Description>
					<HomeMainContainer.BtnWrapper>
						<HomeMainContainer.Btn className="btn">
							Learn more
						</HomeMainContainer.Btn>
						<HomeMainContainer.Btn className="btn-outline">
							Work with us
						</HomeMainContainer.Btn>
					</HomeMainContainer.BtnWrapper>
				</HomeMainContainer.Info>
			</HomeMainContainer>
		</>
	);
};

export default HomeMain;
