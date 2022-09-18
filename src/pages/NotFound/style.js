import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
	margin-bottom: 140px;

	@media (max-width: 400px) {
		margin-bottom: 100px;
	}
`;

Container.Img = styled.img`
	width: 350px;
	text-align: center;

	@media (max-width: 430px) {
		width: 300px;
	}

	@media (max-width: 370px) {
		width: 250px;
	}
	
  @media (max-width: 330px) {
		width: 220px;
	}
`;

Container.Title = styled.div`
	font-size: 36px;
	line-height: 1.5;
	font-weight: 700;
	color: var(--primaryColor);
	margin-bottom: 10px;
	text-align: center;

	@media (max-width: 330px) {
		font-size: 30px;
	}
`;

Container.Desc = styled.div`
	font-size: 18px;
	line-height: 1.5;
	color: var(--secondaryColor);
	margin-bottom: 15px;
	text-align: center;

	@media (max-width: 370px) {
		font-size: 16px;
	}
`;

Container.Btn = styled.div`
	padding: 14px 32px;
	font-size: 16px;
	line-height: 1.5;
	color: #ffffff;
	background-color: #1890ff;
	cursor: pointer;

	@media (max-width: 370px) {
		padding: 12px 24px;
	}

	&:active {
		transform: scale(0.97);
	}
`;
