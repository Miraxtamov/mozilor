import styled from "styled-components";

export const CareerFindContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

CareerFindContainer.Title = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 141%;
	text-align: center;
	color: var(--primaryColor);
	margin-top: 112px;
	margin-bottom: 16px;

	@media (max-width: 960px) {
		font-size: 36px;
	}

	@media (max-width: 400px) {
		font-size: 28px;
		margin-top: 75px;
	}
`;

CareerFindContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 40px;
`;

CareerFindContainer.Btn = styled.div`
	margin-bottom: 112px;

	@media (max-width: 400px) {
		margin-bottom: 75px;
		padding: 12px 24px;
	}
`;
