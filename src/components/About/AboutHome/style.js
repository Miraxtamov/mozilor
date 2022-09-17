import styled from "styled-components";

export const AboutHomeContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-top: 85px;
	padding-bottom: 110px;
	margin-bottom: 7px;

	@media (max-width: 800px) {
		flex-direction: column;
		padding-top: 50px;
		padding-bottom: 75px;
	}

	@media (max-width: 460px) {
		padding-top: 45px;
	}
`;

AboutHomeContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 40%;

	@media (max-width: 800px) {
		flex-basis: auto;
	}
`;

AboutHomeContainer.InfoTitle = styled.div`
	font-weight: 700;
	font-size: 48px;
	line-height: 129%;
	color: var(--primaryColor);
	margin-bottom: 32px;

	@media (max-width: 960px) {
		font-size: 36px;
		margin-bottom: 20px;
	}

	@media (max-width: 480px) {
		font-size: 32px;
	}

	@media (max-width: 370px) {
		font-size: 28px;
	}
`;

AboutHomeContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 20px;
	line-height: 129%;
	color: var(--secondaryColor);

	@media (max-width: 800px) {
		margin-bottom: 60px;
	}

	@media (max-width: 480px) {
		margin-bottom: 30px;
	}

	@media (max-width: 370px) {
		font-size: 18px;
	}
`;

AboutHomeContainer.Img = styled.div`
	margin-left: auto;

	img {
		width: 638px;
	}

	@media (max-width: 1170px) {
		img {
			width: 600px;
		}
	}

	@media (max-width: 1100px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 960px) {
		img {
			width: 383px;
		}
	}

	@media (max-width: 800px) {
		margin-left: 0;
	}

	@media (max-width: 480px) {
		img {
			width: 300px;
		}
	}

	@media (max-width: 370px) {
		img {
			width: 250px;
		}
	}
`;
