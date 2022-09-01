import styled from "styled-components";

export const ProductsMainContainer = styled.div`
	display: flex;
	position: relative;
`;

ProductsMainContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 50%;
	padding: 172px 0 146px 0;

	@media (max-width: 1110px) {
		padding: 100px 0 120px 0;
	}

	@media (max-width: 1052px) {
		flex: 1 1 100%;
		padding: 50px 0 280px 0;
	}

	@media (max-width: 880px) {
		padding: 50px 0 280px 0;
	}

	@media (max-width: 400px) {
		padding: 30px 0 230px 0;
	}
	
	@media (max-width: 350px) {
		padding: 20px 0 200px 0;
	}
`;

ProductsMainContainer.InfoTitle = styled.div`
	font-size: 48px;
	font-weight: 700;
	line-height: 129%;
	color: var(--primaryColor);
	margin-bottom: 40px;

	@media (max-width: 1052px) {
		font-size: 38px;
	}

	@media (max-width: 880px) {
		text-align: center;
	}

	@media (max-width: 680px) {
		text-align: 34px;
		margin-bottom: 30px;
	}

	@media (max-width: 500px) {
		text-align: 30px;
	}

	@media (max-width: 400px) {
		font-size: 25px;
	}
	
	@media (max-width: 350px) {
		margin-bottom: 20px;
		font-size: 22px;
	}
`;

ProductsMainContainer.InfoDescription = styled.div`
	font-size: 22px;
	font-weight: 400;
	line-height: 1.5;
	color: var(--secondaryColor);

	@media (max-width: 1052px) {
		font-size: 20px;
	}

	@media (max-width: 880px) {
		text-align: center;
	}

	@media (max-width: 680px) {
		text-align: 18px;
	}

	@media (max-width: 400px) {
		font-size: 16px;
	}
	
	@media (max-width: 350px) {
		font-size: 14px;
	}
`;

ProductsMainContainer.Img = styled.img`
	max-width: 550px;
	position: absolute;
	right: 0;
	bottom: 0;

	@media (max-width: 1110px) {
		max-width: 500px;
	}

	@media (max-width: 1052px) {
		max-width: 400px;
	}

	@media (max-width: 880px) {
		max-width: 350px;
	}

	@media (max-width: 400px) {
		max-width: 300px;
	}
	
	@media (max-width: 350px) {
		max-width: 250px;
	}
`;
