import styled from "styled-components";

export const LineProductsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

LineProductsContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 130%;
	text-align: center;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 500px) {
		font-size: 30px;
	}

	@media (max-width: 350px) {
		font-size: 22px;
	}
`;

LineProductsContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 120px;

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

LineProductsContainer.Cards = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 32px;
	align-items: center;
	padding-bottom: 108px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 960px) {
		gap: 31px;
	}

	@media (max-width: 660px) {
		gap: 25px;
	}

	@media (max-width: 565px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 30px;
	}
`;

LineProductsContainer.CardWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.08);
	border-radius: 8px;
`;

LineProductsContainer.CardImg = styled.img`
	width: 188px;
	margin-bottom: 40px;
	padding-top: 62px;
	padding-left: 62px;

	@media (max-width: 960px) {
		width: 160px;
		margin-bottom: 20px;
		padding-top: 33px;
		padding-left: 33px;
	}
`;

LineProductsContainer.CardDesc = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 129%;
	color: var(--desc);
	margin-bottom: 30px;
	padding-left: 62px;
	padding-right: 15px;

	@media (max-width: 960px) {
		font-size: 18px;
		padding-left: 33px;
	}
`;

LineProductsContainer.Btn = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-left: 62px;
	margin-bottom: 30px;

	@media (max-width: 960px) {
		margin-left: 33px;
	}

	@media (max-width: 590px) {
		padding-top: 12px;
		padding-bottom: 12px;
	}
`;

LineProductsContainer.ImgBottom = styled.img`
	width: 100%;
	height: 100%;
	padding-left: 10px;
	padding-right: 10px;
	margin-left: auto;
	margin-right: auto;
`;
