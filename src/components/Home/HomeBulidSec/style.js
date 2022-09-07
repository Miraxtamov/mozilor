import styled from "styled-components";

export const HomeBuildSecContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

HomeBuildSecContainer.Info = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1050px) {
		margin-right: 50px;
	}

	@media (max-width: 900px) {
		margin-right: 0;
		margin-bottom: 60px;
	}

	@media (max-width: 550px) {
		text-align: center;
	}
`;

HomeBuildSecContainer.InfoTitle = styled.div`
	font-size: 44px;
	font-style: normal;
	font-weight: 700;
	color: var(--primaryColor);
	line-height: 130%;
	margin-bottom: 16px;

	@media (max-width: 500px) {
		font-size: 34px;
	}

	@media (max-width: 470px) {
		font-size: 30px;
	}

	@media (max-width: 360px) {
		font-size: 25px;
	}
`;

HomeBuildSecContainer.InfoDescription = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
	margin-bottom: 16px;

	@media (max-width: 470px) {
		font-size: 14px;
	}
`;

HomeBuildSecContainer.InfoBtn = styled.div`
	@media (max-width: 550px) {
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 360px) {
		padding: 8px 26px;
		font-size: 14px;
	}
`;

HomeBuildSecContainer.ImgWrapper = styled.div`
	img {
		width: 522px;
	}

	@media (max-width: 1050px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 990px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 550px) {
		img {
			width: 390px;
		}
	}

	@media (max-width: 550px) {
		img {
			width: 300px;
		}
	}

	@media (max-width: 360px) {
		img {
			width: 250px;
		}
	}
`;
