import styled from "styled-components";

export const HomeBrandContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 128px;
	margin-top: 80px;

	@media (max-width: 350px) {
		margin-top: 55px;
	}
`;

HomeBrandContainer.Title = styled.div`
	font-size: 36px;
	font-weight: 700;
	line-height: 158%;
	color: var(--primaryColor);
	text-align: center;
	margin-bottom: 77px;

	@media (max-width: 950px) {
		font-size: 38px;
	}

	@media (max-width: 680px) {
		font-size: 34px;
	}

	@media (max-width: 500px) {
		font-size: 30px;
	}

	@media (max-width: 400px) {
		font-size: 25px;
	}

	@media (max-width: 350px) {
		font-size: 22px;
		margin-bottom: 50px;
	}
`;

HomeBrandContainer.BrandsWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 40px;
	text-align: center;

	@media (max-width: 1170px) {
		flex-wrap: wrap;
	}
`;

HomeBrandContainer.BrandsWrapperImg = styled.img`
	cursor: pointer;
`;

HomeBrandContainer.Line = styled.div`
	border: 1px solid rgba(197, 203, 226, 0.5);
`;
