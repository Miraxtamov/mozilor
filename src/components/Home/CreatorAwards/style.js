import styled from "styled-components";

export const CreatorAwardsContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 920px) {
		flex-direction: column;
	}
`;

CreatorAwardsContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media (max-width: 1120px) {
		margin-right: 50px;
	}

	@media (max-width: 950px) {
		margin-right: 20px;
	}

	@media (max-width: 920px) {
		margin-right: 0;
	}
`;

CreatorAwardsContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 130%;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 800px) {
		font-size: 36px;
		text-align: center;
	}

	@media (max-width: 680px) {
		font-size: 32px;
	}

	@media (max-width: 500px) {
		font-size: 30px;
	}

	@media (max-width: 400px) {
		font-size: 25px;
	}
`;

CreatorAwardsContainer.Desc = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 169%;
	color: var(--secondaryColor);

	@media (max-width: 920px) {
		margin-bottom: 80px;
	}

	@media (max-width: 800px) {
		text-align: center;
	}

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}

	@media (max-width: 400px) {
		font-size: 14px;
	}
`;

CreatorAwardsContainer.Img = styled.img`
	@media (max-width: 1120px) {
		width: 500px;
	}

	@media (max-width: 950px) {
		width: 450px;
	}

	@media (max-width: 680px) {
		width: 400px;
	}

	@media (max-width: 500px) {
		width: 350px;
	}

	@media (max-width: 400px) {
		width: 300px;
	}

	@media (max-width: 350px) {
		width: 250px;
	}
`;
