import styled from "styled-components";

export const InnovationContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 120px;

	.swiper-wrapper {
		margin-bottom: 45px;
	}

	.innovation__arrow {
		display: flex;
		gap: 16px;
		margin-bottom: 30px;
	}

	.innovation__arrow-left,
	.innovation__arrow-right {
		cursor: pointer;
		font-size: 24px;
		color: #424b5a;
	}
`;

InnovationContainer.Title = styled.div`
	font-size: 44px;
	font-weight: 700;
	line-height: 130%;
	color: var(--primaryColor);
	text-align: center;
	margin-bottom: 16px;

	@media (max-width: 500px) {
		font-size: 35px;
	}

	@media (max-width: 450px) {
		font-size: 30px;
	}

	@media (max-width: 360px) {
		font-size: 25px;
	}
`;

InnovationContainer.Desc = styled.div`
	font-size: 16px;

	font-weight: 400;
	color: var(--secondaryColor);
	line-height: 169%;
	text-align: center;
	margin-bottom: 113px;

	@media (max-width: 380px) {
		font-size: 14px;
	}
`;

InnovationContainer.Cards = styled.div`
	.swiper-slide-card {
		height: 119px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: var(--defaultColor);
		box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
			0px 25px 35px rgba(22, 23, 72, 0.05);
		border-radius: 8px;
	}
`;
