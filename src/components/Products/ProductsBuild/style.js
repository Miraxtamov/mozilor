import styled from "styled-components";

export const ProductsBuildContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 137px;
`;

ProductsBuildContainer.Title = styled.div`
	width: 65%;
	font-weight: 700;
	font-size: 44px;
	line-height: 141%;
	color: var(--primaryColor);
	margin-bottom: 20px;
	text-align: center;

	@media (max-width: 942px) {
		font-size: 36px;
	}

	@media (max-width: 780px) {
		width: 70%;
	}

	@media (max-width: 590px) {
		font-size: 32px;
	}

	@media (max-width: 480px) {
		font-size: 28px;
	}

	@media (max-width: 400px) {
		width: 100%;
	}

	@media (max-width: 370px) {
		font-size: 24px;
	}
`;

ProductsBuildContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);
	margin-bottom: 40px;
	text-align: center;
`;

ProductsBuildContainer.BtnWrapper = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;

	@media (max-width: 400px) {
		gap: 14px;

		.btn,
		.btn-outline {
			padding: 12px 24px;
			font-size: 14px;
		}
	}
`;
