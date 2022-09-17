import React from "react";
import careerHome from "../../../assets/icons/career-home.svg";
import { CareerHomeContainer } from "./style";

const CarerHome = () => {
	return (
		<>
			<CareerHomeContainer>
				<CareerHomeContainer.Info>
					<CareerHomeContainer.InfoTitle>
						Hey, we're looking for
						<br />
						<span>Dreamers</span>
					</CareerHomeContainer.InfoTitle>
					<CareerHomeContainer.InfoBtn className="btn-outline">
						View open roles
					</CareerHomeContainer.InfoBtn>
				</CareerHomeContainer.Info>
				<CareerHomeContainer.Img
					src={careerHome}
					alt="Career Home"
				></CareerHomeContainer.Img>
			</CareerHomeContainer>
		</>
	);
};

export default CarerHome;
