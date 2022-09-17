import styled from "styled-components";

export const CareerHomeContainer = styled.div`
	display: flex;
	position: relative;
`;

CareerHomeContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 50%;
	padding: 153px 0 210px 0;

	@media (max-width: 1050px) {
		flex: 0 1 55%;
		padding: 120px 0 250px 0;
	}

	@media (max-width: 960px) {
		flex: 0 1 55%;
		padding: 82px 0 180px 0;
	}

	@media (max-width: 700px) {
		flex: 1 1 100%;
		padding: 62px 0 180px 0;
	}

	@media (max-width: 590px) {
		padding: 62px 0 220px 0;
	}

	@media (max-width: 520px) {
		padding: 52px 0 240px 0;
	}

	@media (max-width: 435px) {
		padding: 30px 0 240px 0;
	}
`;

CareerHomeContainer.InfoTitle = styled.div`
	font-weight: 700;
	font-size: 48px;
	line-height: 129%;
	color: var(--primaryColor);
	margin-bottom: 40px;

	@media (max-width: 960px) {
		font-size: 40px;
	}

	@media (max-width: 960px) {
		font-size: 36px;
		margin-bottom: 25px;
	}

	@media (max-width: 435px) {
		font-size: 32px;
		margin-bottom: 18px;
	}

	@media (max-width: 377px) {
		font-size: 28px;
	}
`;

CareerHomeContainer.InfoBtn = styled.div`
	@media (max-width: 435px) {
		padding: 12px 24px;
	}
`;

CareerHomeContainer.Img = styled.img`
	max-width: 650px;
	position: absolute;
	right: 0;
	bottom: 0;

	@media (max-width: 1100px) {
		max-width: 600px;
	}

	@media (max-width: 960px) {
		max-width: 477px;
	}

	@media (max-width: 810px) {
		max-width: 400px;
	}

	@media (max-width: 650px) {
		max-width: 350px;
	}

	@media (max-width: 435px) {
		max-width: 300px;
		right: -20px;
	}
`;
