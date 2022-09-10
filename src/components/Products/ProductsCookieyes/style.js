import styled from "styled-components";

export const ProductsCookieyesContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 101px;
	margin-bottom: 101px;

	@media (max-width: 880px) {
		flex-direction: column-reverse;
	}
`;

ProductsCookieyesContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 40%;
`;

ProductsCookieyesContainer.InfoImg = styled.img`
	width: 240px;
	margin-bottom: 32px;

	@media (max-width: 1100px) {
		width: 200px;
	}

	@media (max-width: 900px) {
		width: 180px;
	}

	@media (max-width: 350px) {
		width: 150px;
	}
`;

ProductsCookieyesContainer.InfoDesc = styled.div`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 169%;
	color: var(--secondaryColor);
	margin-bottom: 30px;
`;

ProductsCookieyesContainer.InfoBtn = styled.div``;

ProductsCookieyesContainer.Img = styled.div`
	margin-left: auto;

	img {
		width: 564px;
	}

	@media (max-width: 1100px) {
		img {
			width: 500px;
		}
	}

	@media (max-width: 1000px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 880px) {
		margin-left: 0;
		margin-bottom: 40px;
	}

	@media (max-width: 570px) {
		img {
			width: 400px;
		}
	}

	@media (max-width: 500px) {
		img {
			width: 350px;
		}
	}

	@media (max-width: 400px) {
		img {
			width: 300px;
		}
	}

	@media (max-width: 350px) {
		img {
			width: 280px;
		}
	}

	@media (max-width: 300px) {
		img {
			width: 250px;
		}
	}
`;
