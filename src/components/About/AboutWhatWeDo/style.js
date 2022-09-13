import styled from "styled-components";

export const AboutWhatWeDoContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 104px;
	margin-bottom: 120px;

	@media (max-width: 1000px) {
		margin-top: 64px;
		flex-direction: column-reverse;
	}
`;

AboutWhatWeDoContainer.Img = styled.div`
	margin-right: auto;

	img {
		width: 560px;
	}

	@media (max-width: 1120px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 1000px) {
		margin-right: 0;
	}

	@media (max-width: 1000px) {
		img {
			width: 600px;
		}
	}

	@media (max-width: 680px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 575px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 535px) {
		img {
			width: 380px;
		}
	}

	@media (max-width: 450px) {
		img {
			width: 280px;
		}
	}

	@media (max-width: 355px) {
		img {
			width: 220px;
		}
	}
`;

AboutWhatWeDoContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 45%;

	@media (max-width: 1000px) {
		margin-bottom: 89px;
	}

	@media (max-width: 680px) {
		margin-bottom: 60px;
	}

	@media (max-width: 450px) {
		margin-bottom: 47px;
	}
`;

AboutWhatWeDoContainer.InfoTitle = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 130%;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 1000px) {
		font-size: 36px;
	}

	@media (max-width: 390px) {
		font-size: 28px;
	}
`;

AboutWhatWeDoContainer.InfoDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
`;
