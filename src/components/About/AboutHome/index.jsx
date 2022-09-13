import React from "react";
import aboutHome from "../../../assets/icons/about-home.svg";
import { AboutHomeContainer } from "./style";

const AboutHome = () => {
	return (
		<AboutHomeContainer>
			<AboutHomeContainer.Info>
				<AboutHomeContainer.InfoTitle>
					About Mozilor
				</AboutHomeContainer.InfoTitle>
				<AboutHomeContainer.Desc>
					Mozilor is a technology company that builds products to simplify work.
					1.3 million businesses of every size — from startups to global brands,
					use our tools to work better.
				</AboutHomeContainer.Desc>
			</AboutHomeContainer.Info>
			<AboutHomeContainer.Img>
				<img src={aboutHome} alt="About home" />
			</AboutHomeContainer.Img>
		</AboutHomeContainer>
	);
};

export default AboutHome;
