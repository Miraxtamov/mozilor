import React from "react";
import CareerFind from "./CareerFind";
import CarerHome from "./CareerHome";
import CareerOfferBest from "./CareerOfferBest";
import JoinPack from "./JoinPack";
import LifeMozilor from "./LifeMozilor";

const Career = () => {
	return (
		<>
			<div className="container">
				<CarerHome />
				<CareerOfferBest />
				<LifeMozilor />
				<JoinPack />
			</div>
			<CareerFind />
		</>
	);
};

export default Career;
