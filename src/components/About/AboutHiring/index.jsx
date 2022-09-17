import React from "react";
import aboutHiring from "../../../assets/icons/about-hiring-arrow-next.svg";
import aboutHiringImg from "../../../assets/icons/about-hiring-img.svg";
import { AboutHiringContainer } from "./style";

const AboutHiring = () => {
	return (
		<div className="about-where-wrapper">
			<div className="container">
				<AboutHiringContainer>
					<AboutHiringContainer.Info>
						<AboutHiringContainer.InfoTitle>
							We are hiring!
						</AboutHiringContainer.InfoTitle>
						<AboutHiringContainer.InfoDesc>
							Help us build tools for the future. We’re looking for curious and
							smart people to join forces with us and grow together.
						</AboutHiringContainer.InfoDesc>
						<AboutHiringContainer.InfoBtn className="btn-outline">
							Join the squad
						</AboutHiringContainer.InfoBtn>
						<AboutHiringContainer.InfoImg
							src={aboutHiring}
							alt="about hiring"
						/>
					</AboutHiringContainer.Info>
					<AboutHiringContainer.Img>
						<img src={aboutHiringImg} alt="About hiring img" />
					</AboutHiringContainer.Img>
				</AboutHiringContainer>
			</div>
		</div>
	);
};

export default AboutHiring;
