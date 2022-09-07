import React from "react";
import CreatorAwards from "./CreatorAwards";
import HomeBrand from "./HomeBrand";
import HomeBuildSec from "./HomeBulidSec";
import HomeMain from "./HomeMain";
import Innovation from "./Innovation";
import LineProducts from "./LineProducts";

const Home = () => {
	return (
		<>
			<div className="container">
				<HomeMain />
				<HomeBrand />
				<LineProducts />
			</div>
			<CreatorAwards />
			<div className="container">
				<Innovation />
			</div>
			<HomeBuildSec />
		</>
	);
};

export default Home;
