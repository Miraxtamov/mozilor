import styled from "styled-components";

export const AboutBrandContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

AboutBrandContainer.Title = styled.div`
	font-weight: 700;
	font-size: 36px;
	line-height: 128%;
	text-align: center;
	color: var(--primaryColor);
	margin-bottom: 60px;

	@media (max-width: 800px) {
		font-size: 32px;
		margin-bottom: 62px;
	}

	@media (max-width: 440px) {
		font-size: 28px;
		margin-bottom: 52px;
	}
`;

AboutBrandContainer.BrandCard = styled.div`
	width: 100%;
	margin-bottom: 140px;
`;

export const AboutBrandInfoCards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;
	margin-bottom: 148px;

	@media (max-width: 960px) {
		gap: 22px;
	}

	@media (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

AboutBrandInfoCards.Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;
	height: 100%;
`;

AboutBrandInfoCards.CardNumTitle = styled.div`
	font-weight: 700;
	font-size: 56px;
	line-height: 111%;
	text-align: center;
	color: var(--primaryColor);
	margin-top: 53px;
	margin-bottom: 18px;
	flex-basis: 20%;

	@media (max-width: 960px) {
		font-size: 46px;
		margin-top: 17px;
		margin-bottom: 6px;
	}

	@media (max-width: 750px) {
		font-size: 36px;
	}

	@media (max-width: 430px) {
		font-size: 30px;
	}

	@media (max-width: 400px) {
		font-size: 44px;
		margin-bottom: 3px;
		margin-top: 19px;
	}
`;

AboutBrandInfoCards.CardDesc = styled.div`
	font-weight: 400;
	font-size: 22px;
	line-height: 1.5;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 12px;
	flex-basis: 20%;

	@media (max-width: 960px) {
		font-size: 18px;
		margin-bottom: 8px;
	}

	@media (max-width: 750px) {
		font-size: 16px;
	}

	@media (max-width: 430px) {
		font-size: 14px;
	}

	@media (max-width: 400px) {
		font-size: 16px;
		margin-bottom: 10px;
	}
`;

AboutBrandInfoCards.CardImg = styled.div`
	img {
		width: 100%;
		height: 100%;
	}
`;
