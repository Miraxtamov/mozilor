import styled from "styled-components";

export const AboutCultureCodeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
`;

AboutCultureCodeContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 141%;
	text-align: center;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 650px) {
		font-size: 36px;
	}

	@media (max-width: 430px) {
		font-size: 28px;
	}
`;

AboutCultureCodeContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 97px;

	@media (max-width: 1000px) {
		margin-bottom: 61px;
	}

	@media (max-width: 430px) {
		margin-bottom: 51px;
	}
`;

AboutCultureCodeContainer.CardWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 31px;
	row-gap: 42px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 50px;
		row-gap: 28px;
	}

	@media (max-width: 770px) {
		column-gap: 30px;
		row-gap: 28px;
	}

	@media (max-width: 680px) {
		grid-template-columns: repeat(1, 1fr);
		row-gap: 20px;
	}
`;

AboutCultureCodeContainer.Card = styled.div`
	width: 100%;
	background-color: #ffffff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;
	padding: 40px;

	@media (max-width: 1000px) {
		padding: 30px;
	}

	@media (max-width: 710px) {
		padding: 20px;
	}

	@media (max-width: 680px) {
		padding: 30px;
	}

	@media (max-width: 400px) {
		padding: 20px;
	}

	@media (max-width: 340px) {
		padding: 15px;
	}
`;

AboutCultureCodeContainer.CardTitle = styled.div`
	font-weight: 700;
	font-size: 28px;
	line-height: 111%;
	display: flex;
	align-items: center;
	color: var(--desc);
	margin-bottom: 32px;

	@media (max-width: 400px) {
		font-size: 26px;
	}
`;

AboutCultureCodeContainer.CardDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
	text-align: left;

	@media (max-width: 400px) {
		font-size: 14px;
	}
`;
