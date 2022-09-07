import React from "react";
import homeBulid from "../../../assets/icons/home-build-sec.svg";
import { HomeBuildSecContainer } from "./style";

const HomeBuildSec = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(335.73deg, #E3E7F6 12.46%, rgba(227, 231, 246, 0) 84.19%)",
				paddingTop: "73px",
				paddingBottom: "73px",
			}}
		>
			<div className="container">
				<HomeBuildSecContainer>
					<HomeBuildSecContainer.Info>
						<HomeBuildSecContainer.InfoTitle>
							Let's build the next big thing!
						</HomeBuildSecContainer.InfoTitle>
						<HomeBuildSecContainer.InfoDescription>
							Looking to achieve great things? You’ve come to the right place.
						</HomeBuildSecContainer.InfoDescription>
						<HomeBuildSecContainer.InfoBtn className="btn-outline">
							Join the team
						</HomeBuildSecContainer.InfoBtn>
					</HomeBuildSecContainer.Info>
					<HomeBuildSecContainer.ImgWrapper>
						<img src={homeBulid} alt="home build" />
					</HomeBuildSecContainer.ImgWrapper>
				</HomeBuildSecContainer>
			</div>
		</div>
	);
};

export default HomeBuildSec;
