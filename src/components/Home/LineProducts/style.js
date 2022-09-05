import styled from "styled-components";

export const LineProductsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 32px;
	align-items: center;
	padding-bottom: 108px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 1200px) {
		gap: 0;
	}

	@media (max-width: 950px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 32px;
		place-items: center;
	}
`;

LineProductsContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 130%;
	text-align: center;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 500px) {
		font-size: 30px;
	}

	@media (max-width: 350px) {
		font-size: 22px;
	}
`;

LineProductsContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 120px;

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

LineProductsContainer.CardWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.08);
	border-radius: 8px;

	@media (max-width: 1200px) {
		width: 90%;
	}

	@media (max-width: 1075px) {
		width: 80%;
	}

	@media (max-width: 950px) {
		width: 80%;
	}
	@media (max-width: 800px) {
		width: 100%;
	}

	@media (max-width: 540px) {
		height: auto;
	}
`;

LineProductsContainer.CardImg = styled.img`
	width: 188px;
	margin-bottom: 40px;
	padding-top: 64px;
	padding-left: 62px;

	@media (max-width: 1075px) {
		padding-left: 30px;
	}

	@media (max-width: 950px) {
		width: 200px;
		padding-left: 62px;
	}

	@media (max-width: 450px) {
		padding-left: 30px;
	}

	@media (max-width: 380px) {
		padding-top: 30px;
		padding-left: 20px;
	}

	@media (max-width: 380px) {
		width: 150px;
	}
`;

LineProductsContainer.CardDesc = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 129%;
	color: var(--desc);
	margin-bottom: 30px;
	padding-left: 62px;
	padding-right: 90px;

	@media (max-width: 1075px) {
		font-size: 20px;
		padding-left: 30px;
		padding-right: 30px;
	}

	@media (max-width: 950px) {
		font-size: 24px;
		padding-left: 62px;
		padding-right: 90px;
	}

	@media (max-width: 540px) {
		padding-right: 30px;
	}

	@media (max-width: 450px) {
		font-size: 20px;
		padding-left: 30px;
	}

	@media (max-width: 380px) {
		padding-left: 20px;
	}

	@media (max-width: 350px) {
		font-size: 16px;
	}
`;

LineProductsContainer.Btn = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-left: 62px;
	margin-bottom: 30px;

	@media (max-width: 1075px) {
		margin-left: 30px;
	}

	@media (max-width: 950px) {
		margin-left: 62px;
	}

	@media (max-width: 450px) {
		margin-left: 30px;
	}

	@media (max-width: 380px) {
		margin-left: 20px;
		padding: 8px 26px;
	}
`;

LineProductsContainer.ImgBottom = styled.img`
	width: 455px;
	padding-left: 10px;
	padding-right: 19px;

	@media (max-width: 1075px) {
		width: 350px;
		padding-left: 60px;
		margin-top: auto;
	}

	@media (max-width: 980px) {
		padding: 0;
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 950px) {
		width: 450px;
	}

	@media (max-width: 540px) {
		width: 400px;
	}

	@media (max-width: 480px) {
		width: 350px;
	}

	@media (max-width: 420px) {
		width: 300px;
	}
	@media (max-width: 380px) {
		width: 200px;
		padding: 0;
		margin-left: auto;
		margin-right: auto;
	}
`;
