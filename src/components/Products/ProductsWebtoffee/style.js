import styled from "styled-components";

export const ProductsWebtoffeeContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 188px;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

ProductsWebtoffeeContainer.Img = styled.div`
	margin-right: auto;

	@media (max-width: 1050px) {
		img {
			width: 450px;
		}
	}

	@media (max-width: 950px) {
		img {
			width: 376px;
		}
	}

	@media (max-width: 800px) {
		margin-right: 0;
		margin-bottom: 55px;
	}

	@media (max-width: 450px) {
		img {
			width: 300px;
		}
	}

	@media (max-width: 350px) {
		img {
			width: 280px;
		}
	}

	@media (max-width: 320px) {
		img {
			width: 250px;
		}
	}
`;

ProductsWebtoffeeContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 45%;
`;

ProductsWebtoffeeContainer.InfoImg = styled.img`
	width: 252px;
	margin-bottom: 32px;

	@media (max-width: 470px) {
		width: 230px;
	}

	@media (max-width: 400px) {
		width: 200px;
	}
`;

ProductsWebtoffeeContainer.InfoDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
	margin-bottom: 42px;

	@media (max-width: 950px) {
		font-size: 14px;
	}

	@media (max-width: 800px) {
		font-size: 16px;
	}
`;

ProductsWebtoffeeContainer.InfoBtn = styled.div``;
