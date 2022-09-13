import styled from "styled-components";

export const AboutWhoWeAreContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 975px) {
		flex-direction: column;
	}
`;

AboutWhoWeAreContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 45%;

	@media (max-width: 975px) {
		margin-bottom: 89px;
	}

	@media (max-width: 445px) {
		margin-bottom: 77px;
	}

	@media (max-width: 400px) {
		margin-bottom: 55px;
	}
`;

AboutWhoWeAreContainer.InfoTitle = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 130%;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 975px) {
		font-size: 36px;
	}
`;

AboutWhoWeAreContainer.InfoDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
`;

AboutWhoWeAreContainer.Img = styled.div`
	margin-left: auto;
	border-radius: 8px;

	img {
		width: 560px;
	}

	@media (max-width: 1090px) {
		img {
			width: 520px;
		}
	}

	@media (max-width: 1025px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 975px) {
		margin-left: 0;

		img {
			width: 606px;
		}
	}

	@media (max-width: 690px) {
		img {
			width: 520px;
		}
	}

	@media (max-width: 595px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 510px) {
		img {
			width: 380px;
		}
	}

	@media (max-width: 445px) {
		img {
			width: 300px;
		}
	}

	@media (max-width: 355px) {
		img {
			width: 250px;
		}
	}
`;
