import React from "react";
import CreatorAwards from "./CreatorAwards";
import HomeBrand from "./HomeBrand";
import HomeMain from "./HomeMain";
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
		</>
	);
};

export default Home;
