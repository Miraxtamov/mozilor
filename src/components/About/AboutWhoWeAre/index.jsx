import React from "react";
import aboutWho from "../../../assets/imgs/about-who.png";
import { AboutWhoWeAreContainer } from "./style";

const AboutWhoWeAre = () => {
	return (
		<div className="about-where-wrapper">
			<div className="container">
				<AboutWhoWeAreContainer>
					<AboutWhoWeAreContainer.Info>
						<AboutWhoWeAreContainer.InfoTitle>
							Who we are
						</AboutWhoWeAreContainer.InfoTitle>
						<AboutWhoWeAreContainer.InfoDesc>
							We are a bunch of thinkers and dreamers, who have come together to
							build products we are proud of. We come from diverse backgrounds,
							work in different agile teams and come together to deliver the
							best technology.
							<br /> <br />
							In 2017, we started as a one-person endeavour by Anvar TK, our
							CEO, in an incubator at National Institute of Technology Calicut.
							Today, we are a growing team of 40+ members with offices in
							London, Bangalore and Calicut.
						</AboutWhoWeAreContainer.InfoDesc>
					</AboutWhoWeAreContainer.Info>
					<AboutWhoWeAreContainer.Img>
						<img src={aboutWho} alt="About who we are" />
					</AboutWhoWeAreContainer.Img>
				</AboutWhoWeAreContainer>
			</div>
		</div>
	);
};

export default AboutWhoWeAre;
