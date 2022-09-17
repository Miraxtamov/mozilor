import React from "react";
import lifeMozilor1 from "../../../assets/imgs/lifeMozilor1.png";
import lifeMozilor2 from "../../../assets/imgs/lifeMozilor2.png";
import lifeMozilor3 from "../../../assets/imgs/lifeMozilor3.png";
import lifeMozilor4 from "../../../assets/imgs/lifeMozilor4.png";
import lifeMozilor5 from "../../../assets/imgs/lifeMozilor5.png";
import lifeRecommend from "../../../assets/icons/life-recommend.svg";
import lifeGlassdoor from "../../../assets/icons/life-glassdoor.svg";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { GlassdoorContainer, LifeMozilorContainer } from "./style";

const LifeMozilor = () => {
	return (
		<LifeMozilorContainer>
			<LifeMozilorContainer.LifeWrapper>
				<LifeMozilorContainer.Life>
					<LifeMozilorContainer.LifeWrapperTitle>
						Life@ <br /> Mozilor
					</LifeMozilorContainer.LifeWrapperTitle>
					<LifeMozilorContainer.LifeWrapperDesc>
						The problems we solve every day could be serious, but we’re not! We
						have a lot of fun because we love what we do and you’re welcome to
						be a part of it.
					</LifeMozilorContainer.LifeWrapperDesc>
				</LifeMozilorContainer.Life>
				<LifeMozilorContainer.Life>
					<LifeMozilorContainer.Img src={lifeMozilor1} alt="life mozilor" />
				</LifeMozilorContainer.Life>
				<LifeMozilorContainer.Life>
					<LifeMozilorContainer.Img src={lifeMozilor2} alt="life mozilor" />
				</LifeMozilorContainer.Life>
				<LifeMozilorContainer.Life>
					<LifeMozilorContainer.Img src={lifeMozilor3} alt="life mozilor" />
				</LifeMozilorContainer.Life>
				<LifeMozilorContainer.Life>
					<LifeMozilorContainer.Img src={lifeMozilor4} alt="life mozilor" />
				</LifeMozilorContainer.Life>
				<LifeMozilorContainer.Life>
					<LifeMozilorContainer.Img src={lifeMozilor5} alt="life mozilor" />
				</LifeMozilorContainer.Life>
			</LifeMozilorContainer.LifeWrapper>
			<GlassdoorContainer>
				<GlassdoorContainer.Left>
					<GlassdoorContainer.LeftImg src={lifeRecommend} />
					<GlassdoorContainer.LeftTitle>
						95% of employees recommend Mozilor
					</GlassdoorContainer.LeftTitle>
				</GlassdoorContainer.Left>
				<GlassdoorContainer.Right>
					<GlassdoorContainer.RightImg src={lifeGlassdoor} />
					<div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
						<GlassdoorContainer.RightScoreText>
							4.8
						</GlassdoorContainer.RightScoreText>
						<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
							<FaStar className="right-star" />
							<FaStar className="right-star" />
							<FaStar className="right-star" />
							<FaStar className="right-star" />
							<FaStar className="right-star" />
						</div>
					</div>
					<GlassdoorContainer.RightLinkArrow href="#">
						Read our reviews <FaArrowRight />
					</GlassdoorContainer.RightLinkArrow>
				</GlassdoorContainer.Right>
			</GlassdoorContainer>
		</LifeMozilorContainer>
	);
};

export default LifeMozilor;
