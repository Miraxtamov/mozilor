import React from "react";
import { CareerFindContainer } from "./style";

const CareerFind = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(342.12deg, #E3E7F6 -6.53%, rgba(227, 231, 246, 0) 87.81%)",
			}}
		>
			<div className="container">
				<CareerFindContainer>
					<CareerFindContainer.Title>
						Didn’t find what you’re looking for?
					</CareerFindContainer.Title>
					<CareerFindContainer.Desc>
						We are always on the lookout for great people. Tell us why you want
						to join us.
					</CareerFindContainer.Desc>
					<CareerFindContainer.Btn className="btn">
						Write to us
					</CareerFindContainer.Btn>
				</CareerFindContainer>
			</div>
		</div>
	);
};

export default CareerFind;
