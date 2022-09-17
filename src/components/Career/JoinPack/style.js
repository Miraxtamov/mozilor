import styled from "styled-components";

export const JoinPackContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

JoinPackContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 141%;
	text-align: center;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media(max-width: 960px) {
		font-size: 36px;
	}
	
	@media(max-width: 400px) {
		font-size: 28px;
	}
`;

JoinPackContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 100px;

	@media (max-width: 960px) {
		margin-bottom: 76px;
	}

	@media (max-width: 400px) {
		margin-bottom: 40px;
	}
`;

JoinPackContainer.Cards = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-bottom: 68px;

	@media (max-width: 400px) {
		gap: 20px;
		margin-bottom: 44px;
	}
`;

JoinPackContainer.CardsCard = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 35px 60px;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 17px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;

	@media (max-width: 900px) {
		padding: 35px 30px;
	}

	@media (max-width: 620px) {
		flex-direction: column;
	}
`;

JoinPackContainer.CardLeft = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 620px) {
		width: 100%;
		margin-bottom: 30px;
		align-items: center;
	}

	@media (max-width: 490px) {
		align-items: flex-start;
	}
`;

JoinPackContainer.CardLeftTitle = styled.div`
	font-weight: 400;
	font-size: 28px;
	line-height: 96%;
	color: var(--secondaryColor);
	margin-bottom: 24px;

	@media (max-width: 960px) {
		font-size: 24px;
	}

	@media (max-width: 770px) {
		font-size: 22px;
	}

	@media (max-width: 700px) {
		font-size: 24px;
	}
`;

JoinPackContainer.CardLeftInfos = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
`;

JoinPackContainer.CardLeftInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: 400;
	font-size: 20px;
	line-height: 135%;
	color: #8f90a6;

	@media (max-width: 960px) {
		font-size: 18px;
	}
`;

JoinPackContainer.CardRight = styled.div`
	@media (max-width: 620px) {
		width: 100%;
	}

	@media (max-width: 620px) {
		.btn-outline {
			width: 100%;
			text-align: center;
			padding-top: 12px;
			padding-bottom: 12px;
		}
	}
`;

JoinPackContainer.Btn = styled.div`
	margin-bottom: 44px;
`;
