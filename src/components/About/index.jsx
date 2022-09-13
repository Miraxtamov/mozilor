import React from "react";
import AboutBrand from "./AboutBrand";
import AboutCultureCode from "./AboutCultureCode";
import AboutHiring from "./AboutHiring";
import AboutHome from "./AboutHome";
import AboutWhatWeDo from "./AboutWhatWeDo";
import AboutWhoWeAre from "./AboutWhoWeAre";

const About = () => {
	return (
		<>
			<div className="container">
				<AboutHome />
				<AboutBrand />
				<AboutCultureCode />
			</div>
			<AboutWhoWeAre />
			<div className="container">
				<AboutWhatWeDo />
			</div>
			<AboutHiring />
		</>
	);
};

export default About;
