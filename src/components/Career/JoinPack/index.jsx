import React from "react";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { JoinPackContainer } from "./style";

const JoinPack = () => {
	return (
		<JoinPackContainer>
			<JoinPackContainer.Title>Join the pack</JoinPackContainer.Title>
			<JoinPackContainer.Desc>
				If you’re looking to do the best work of your career, learn and grow,
				then you’ll fit right in at Mozilor!
			</JoinPackContainer.Desc>
			<JoinPackContainer.Cards>
				<JoinPackContainer.CardsCard>
					<JoinPackContainer.CardLeft>
						<JoinPackContainer.CardLeftTitle>
							Front-end Developer
						</JoinPackContainer.CardLeftTitle>
						<JoinPackContainer.CardLeftInfos>
							<JoinPackContainer.CardLeftInfo>
								<FaRegClock className="pack-left-icon" />
								<div className="pack-left-text">Full time</div>
							</JoinPackContainer.CardLeftInfo>
							<JoinPackContainer.CardLeftInfo>
								<FaMapMarkerAlt className="pack-left-icon" />
								<div className="pack-left-text">India</div>
							</JoinPackContainer.CardLeftInfo>
						</JoinPackContainer.CardLeftInfos>
					</JoinPackContainer.CardLeft>
					<JoinPackContainer.CardRight>
						<div className="btn-outline">View details</div>
					</JoinPackContainer.CardRight>
				</JoinPackContainer.CardsCard>
				<JoinPackContainer.CardsCard>
					<JoinPackContainer.CardLeft>
						<JoinPackContainer.CardLeftTitle>
							PHP Developers (Laravel)
						</JoinPackContainer.CardLeftTitle>
						<JoinPackContainer.CardLeftInfos>
							<JoinPackContainer.CardLeftInfo>
								<FaRegClock className="pack-left-icon" />
								<div className="pack-left-text">Full time</div>
							</JoinPackContainer.CardLeftInfo>
							<JoinPackContainer.CardLeftInfo>
								<FaMapMarkerAlt className="pack-left-icon" />
								<div className="pack-left-text">India</div>
							</JoinPackContainer.CardLeftInfo>
						</JoinPackContainer.CardLeftInfos>
					</JoinPackContainer.CardLeft>
					<JoinPackContainer.CardRight>
						<div className="btn-outline">View details</div>
					</JoinPackContainer.CardRight>
				</JoinPackContainer.CardsCard>
				<JoinPackContainer.CardsCard>
					<JoinPackContainer.CardLeft>
						<JoinPackContainer.CardLeftTitle>
							Junior Software Developer
						</JoinPackContainer.CardLeftTitle>
						<JoinPackContainer.CardLeftInfos>
							<JoinPackContainer.CardLeftInfo>
								<FaRegClock className="pack-left-icon" />
								<div className="pack-left-text">Full time</div>
							</JoinPackContainer.CardLeftInfo>
							<JoinPackContainer.CardLeftInfo>
								<FaMapMarkerAlt className="pack-left-icon" />
								<div className="pack-left-text">India</div>
							</JoinPackContainer.CardLeftInfo>
						</JoinPackContainer.CardLeftInfos>
					</JoinPackContainer.CardLeft>
					<JoinPackContainer.CardRight>
						<div className="btn-outline">View details</div>
					</JoinPackContainer.CardRight>
				</JoinPackContainer.CardsCard>
				<JoinPackContainer.CardsCard>
					<JoinPackContainer.CardLeft>
						<JoinPackContainer.CardLeftTitle>
							WordPress Developer + Designer
						</JoinPackContainer.CardLeftTitle>
						<JoinPackContainer.CardLeftInfos>
							<JoinPackContainer.CardLeftInfo>
								<FaRegClock className="pack-left-icon" />
								<div className="pack-left-text">Full time</div>
							</JoinPackContainer.CardLeftInfo>
							<JoinPackContainer.CardLeftInfo>
								<FaMapMarkerAlt className="pack-left-icon" />
								<div className="pack-left-text">India</div>
							</JoinPackContainer.CardLeftInfo>
						</JoinPackContainer.CardLeftInfos>
					</JoinPackContainer.CardLeft>
					<JoinPackContainer.CardRight>
						<div className="btn-outline">View details</div>
					</JoinPackContainer.CardRight>
				</JoinPackContainer.CardsCard>
				<JoinPackContainer.CardsCard>
					<JoinPackContainer.CardLeft>
						<JoinPackContainer.CardLeftTitle>
							Node.js Developer
						</JoinPackContainer.CardLeftTitle>
						<JoinPackContainer.CardLeftInfos>
							<JoinPackContainer.CardLeftInfo>
								<FaRegClock className="pack-left-icon" />
								<div className="pack-left-text">Full time</div>
							</JoinPackContainer.CardLeftInfo>
							<JoinPackContainer.CardLeftInfo>
								<FaMapMarkerAlt className="pack-left-icon" />
								<div className="pack-left-text">India</div>
							</JoinPackContainer.CardLeftInfo>
						</JoinPackContainer.CardLeftInfos>
					</JoinPackContainer.CardLeft>
					<JoinPackContainer.CardRight>
						<div className="btn-outline">View details</div>
					</JoinPackContainer.CardRight>
				</JoinPackContainer.CardsCard>
			</JoinPackContainer.Cards>
			<JoinPackContainer.Btn className="btn">See more</JoinPackContainer.Btn>
		</JoinPackContainer>
	);
};

export default JoinPack;
