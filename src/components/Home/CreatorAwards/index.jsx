import React from "react";
import creatorAward from "../../../assets/imgs/creator-award.png";
import { CreatorAwardsContainer } from "./style";

const CreatorAwards = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(268.52deg, #E3E7F6 -52.27%, rgba(227, 231, 246, 0) 138.23%)",
				paddingTop: "73px",
				paddingBottom: "73px",
			}}
		>
			<div className="container">
				<CreatorAwardsContainer>
					<CreatorAwardsContainer.Info>
						<CreatorAwardsContainer.Title>
							Creators of award-winning products
						</CreatorAwardsContainer.Title>
						<CreatorAwardsContainer.Desc>
							Our products are loved by customers and recommended by leading
							industry experts.
						</CreatorAwardsContainer.Desc>
					</CreatorAwardsContainer.Info>
					<CreatorAwardsContainer.Img src={creatorAward} />
				</CreatorAwardsContainer>
			</div>
		</div>
	);
};

export default CreatorAwards;
