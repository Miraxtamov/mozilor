import styled from "styled-components";

export const CareerOfferBestContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 90px;
	margin-bottom: 90px;

	@media (max-width: 400px) {
		margin-top: 55px;
		margin-bottom: 60px;
	}
`;

CareerOfferBestContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 128%;
	text-align: center;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 950px) {
		font-size: 36px;
	}

	@media (max-width: 500px) {
		font-size: 28px;
	}
`;

CareerOfferBestContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 65px;

	@media (max-width: 450px) {
		margin-bottom: 45px;
	}
`;

CareerOfferBestContainer.Cards = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 35px;
	row-gap: 49px;

	@media (max-width: 970px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 53px;
		row-gap: 38px;
	}

	@media (max-width: 670px) {
		column-gap: 43px;
	}

	@media (max-width: 670px) {
		grid-template-columns: repeat(1, 1fr);
		row-gap: 20px;
	}
`;

CareerOfferBestContainer.Card = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 40px;
	background-color: #ffffff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;

	@media (max-width: 970px) {
		padding: 35px;
	}

	@media (max-width: 400px) {
		padding: 30px;
	}
`;

CareerOfferBestContainer.CardIconTitle = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 32px;

	@media (max-width: 400px) {
		font-size: 22px;
	}
`;

CareerOfferBestContainer.CardIcon = styled.img``;

CareerOfferBestContainer.CardTitle = styled.div`
	font-weight: 700;
	font-size: 28px;
	line-height: 111%;
	color: var(--desc);
`;

CareerOfferBestContainer.CardDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
`;
