import styled from "styled-components";

export const AboutHiringContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 830px) {
		flex-direction: column;
	}
`;

AboutHiringContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 30%;

	@media (max-width: 1070px) {
		flex-basis: 40%;
	}

	@media (max-width: 830px) {
		margin-bottom: 80px;
	}

	@media (max-width: 525px) {
		margin-bottom: 60px;
	}

	@media (max-width: 390px) {
		margin-bottom: 45px;
	}
`;

AboutHiringContainer.InfoTitle = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 130%;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 966px) {
		font-size: 36px;
	}

	@media (max-width: 435px) {
		font-size: 28px;
	}
`;

AboutHiringContainer.InfoDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
	margin-bottom: 40px;
`;

AboutHiringContainer.InfoBtn = styled.div`
	margin-bottom: 14px;
`;

AboutHiringContainer.InfoImg = styled.img`
	width: 211px;
	margin-left: 65px;

	@media (max-width: 390px) {
		width: 190px;
	}

	@media (max-width: 340px) {
		width: 160px;
	}
`;

AboutHiringContainer.Img = styled.div`
	margin-left: auto;

	@media (max-width: 1070px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 920px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 830px) {
		margin-left: 0;

		img {
			width: 600px;
		}
	}

	@media (max-width: 700px) {
		img {
			width: 550px;
		}
	}

	@media (max-width: 630px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 525px) {
		img {
			width: 380px;
		}
	}

	@media (max-width: 435px) {
		img {
			width: 320px;
		}
	}

	@media (max-width: 390px) {
		img {
			width: 280px;
		}
	}

	@media (max-width: 340px) {
		img {
			width: 250px;
		}
	}
`;
