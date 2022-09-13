import React from "react";
import aboutWeDo from "../../../assets/imgs/about-wedo.png";
import { AboutWhatWeDoContainer } from "./style";

const AboutWhatWeDo = () => {
	return (
		<AboutWhatWeDoContainer>
			<AboutWhatWeDoContainer.Img>
				<img src={aboutWeDo} alt="About what we do" />
			</AboutWhatWeDoContainer.Img>
			<AboutWhatWeDoContainer.Info>
				<AboutWhatWeDoContainer.InfoTitle>
					What we do
				</AboutWhatWeDoContainer.InfoTitle>
				<AboutWhatWeDoContainer.InfoDesc>
					We build meaningful products that help people to simplify work, are
					scalable and can stand the test of time. We strive to deliver
					solutions that can transform how businesses work so that they can
					focus on what matters the most.
					<br /> <br />
					At Mozilor, we see each day as a new opportunity to ideate, explore,
					take risks and learn. And that’s what has helped us grow and be the
					leaders across industries.
				</AboutWhatWeDoContainer.InfoDesc>
			</AboutWhatWeDoContainer.Info>
		</AboutWhatWeDoContainer>
	);
};

export default AboutWhatWeDo;
