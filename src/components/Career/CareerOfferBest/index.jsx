import React from "react";
import flexibility from "../../../assets/icons/flexibility.svg";
import learning from "../../../assets/icons/learning.svg";
import wellbeing from "../../../assets/icons/wellbeing.svg";
import laptop from "../../../assets/icons/laptop.svg";
import growth from "../../../assets/icons/growth.svg";
import network from "../../../assets/icons/network.svg";
import { CareerOfferBestContainer } from "./style";

const CareerOfferBest = () => {
	return (
		<CareerOfferBestContainer>
			<CareerOfferBestContainer.Title>
				We offer nothing but the best
			</CareerOfferBestContainer.Title>
			<CareerOfferBestContainer.Desc>
				We put our people first and have built a culture that brings the best
				out of everyone.
			</CareerOfferBestContainer.Desc>
			<CareerOfferBestContainer.Cards>
				<CareerOfferBestContainer.Card>
					<CareerOfferBestContainer.CardIconTitle>
						<CareerOfferBestContainer.CardIcon src={flexibility} />
						<CareerOfferBestContainer.CardTitle>
							Flexiblility
						</CareerOfferBestContainer.CardTitle>
					</CareerOfferBestContainer.CardIconTitle>
					<CareerOfferBestContainer.CardDesc>
						Be it in-office, WFH or a mix of both, do your best work from
						wherever you want, because we have a hybrid and flexible work
						culture.
					</CareerOfferBestContainer.CardDesc>
				</CareerOfferBestContainer.Card>
				<CareerOfferBestContainer.Card>
					<CareerOfferBestContainer.CardIconTitle>
						<CareerOfferBestContainer.CardIcon src={learning} />
						<CareerOfferBestContainer.CardTitle>
							Learning
						</CareerOfferBestContainer.CardTitle>
					</CareerOfferBestContainer.CardIconTitle>
					<CareerOfferBestContainer.CardDesc>
						We offer plenty of learning opportunities such as professional
						courses, guided learning and workshops to pick up new skills.
					</CareerOfferBestContainer.CardDesc>
				</CareerOfferBestContainer.Card>
				<CareerOfferBestContainer.Card>
					<CareerOfferBestContainer.CardIconTitle>
						<CareerOfferBestContainer.CardIcon src={wellbeing} />
						<CareerOfferBestContainer.CardTitle>
							Wellbeing
						</CareerOfferBestContainer.CardTitle>
					</CareerOfferBestContainer.CardIconTitle>
					<CareerOfferBestContainer.CardDesc>
						We’ve got your wellbeing covered with medical insurance for
						employees and dependents, employee loans and paid parental leaves.
					</CareerOfferBestContainer.CardDesc>
				</CareerOfferBestContainer.Card>
				<CareerOfferBestContainer.Card>
					<CareerOfferBestContainer.CardIconTitle>
						<CareerOfferBestContainer.CardIcon src={laptop} />
						<CareerOfferBestContainer.CardTitle>
							Perks
						</CareerOfferBestContainer.CardTitle>
					</CareerOfferBestContainer.CardIconTitle>
					<CareerOfferBestContainer.CardDesc>
						We provide great tech like Macbooks and work essentials. To top it,
						we have yearly company-wide retreats at the best locations!
					</CareerOfferBestContainer.CardDesc>
				</CareerOfferBestContainer.Card>
				<CareerOfferBestContainer.Card>
					<CareerOfferBestContainer.CardIconTitle>
						<CareerOfferBestContainer.CardIcon src={growth} />
						<CareerOfferBestContainer.CardTitle>
							Growth
						</CareerOfferBestContainer.CardTitle>
					</CareerOfferBestContainer.CardIconTitle>
					<CareerOfferBestContainer.CardDesc>
						Get the freedom to run your ideas, take up new job roles and
						collaborate across teams and chart your career.
					</CareerOfferBestContainer.CardDesc>
				</CareerOfferBestContainer.Card>
				<CareerOfferBestContainer.Card>
					<CareerOfferBestContainer.CardIconTitle>
						<CareerOfferBestContainer.CardIcon src={network} />
						<CareerOfferBestContainer.CardTitle>
							Network
						</CareerOfferBestContainer.CardTitle>
					</CareerOfferBestContainer.CardIconTitle>
					<CareerOfferBestContainer.CardDesc>
						Build your network and rub shoulders with top teams from the biggest
						brands and startups in the world.
					</CareerOfferBestContainer.CardDesc>
				</CareerOfferBestContainer.Card>
			</CareerOfferBestContainer.Cards>
		</CareerOfferBestContainer>
	);
};

export default CareerOfferBest;
