import styled from "styled-components";

export const LifeMozilorContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 127px;

	@media (max-width: 960px) {
		margin-bottom: 90px;
	}

	@media (max-width: 400px) {
		margin-bottom: 55px;
	}
`;

LifeMozilorContainer.LifeWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 30px;
	row-gap: 40px;
	align-items: center;

	@media (max-width: 550px) {
		grid-template-columns: repeat(1, 1fr);
		row-gap: 20px;
	}
`;

LifeMozilorContainer.Life = styled.div``;

LifeMozilorContainer.LifeWrapperTitle = styled.div`
	font-weight: 700;
	font-size: 44px;
	line-height: 141%;
	color: var(--primaryColor);
	margin-bottom: 16px;

	@media (max-width: 880px) {
		font-size: 36px;
	}

	@media (max-width: 600px) {
		font-size: 32px;
	}

	@media (max-width: 550px) {
		br {
			display: none;
		}
	}

	@media (max-width: 400px) {
		font-size: 28px;
	}
`;

LifeMozilorContainer.LifeWrapperDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 169%;
	color: var(--secondaryColor);

	@media (max-width: 550px) {
		margin-bottom: 50px;
	}
`;

LifeMozilorContainer.Img = styled.img`
	width: 100%;
	height: 362px;
	box-shadow: 0px 0px 11px rgba(22, 23, 72, 0.08),
		0px 25px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;

	@media (max-width: 700px) {
		height: 250px;
	}
`;

export const GlassdoorContainer = styled.div`
	display: flex;
	align-items: center;
	background: #f7f8ff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;
	padding: 50px 125px 50px 69px;
	margin-top: 114px;
	gap: 100px;

	@media (max-width: 1060px) {
		gap: 50px;
	}

	@media (max-width: 980px) {
		gap: 250px;
		padding: 25px 75px 25px 25px;
	}

	@media (max-width: 960px) {
		margin-top: 60px;
	}

	@media (max-width: 934px) {
		gap: 200px;
	}

	@media (max-width: 884px) {
		gap: 100px;
	}

	@media (max-width: 784px) {
		flex-direction: column;
		gap: 37px;
		padding: 24px 30px 32px 30px;
	}

	@media (max-width: 400px) {
		margin-top: 40px;
	}

	@media (max-width: 340px) {
		padding: 24px 20px 32px 20px;
	}
	
	@media (max-width: 320px) {
		padding: 24px 15px 32px 15px;
	}
`;

GlassdoorContainer.Left = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 784px) {
		flex-direction: column;
		text-align: center;
	}
`;

GlassdoorContainer.LeftImg = styled.img`
	@media (max-width: 980px) {
		width: 69px;
		height: 69px;
	}
`;

GlassdoorContainer.LeftTitle = styled.div`
	font-weight: 700;
	font-size: 36px;
	line-height: 133%;
	color: var(--primaryColor);
	margin-left: 27px;

	@media (max-width: 1060px) {
		font-size: 32px;
	}

	@media (max-width: 980px) {
		font-size: 24px;
		margin-left: 16px;
	}

	@media (max-width: 784px) {
		margin-top: 16px;
		margin-left: 0;
	}
`;

GlassdoorContainer.Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.right-star {
		color: #0daa41;
		font-size: 30px;
	}

	@media (max-width: 784px) {
		gap: 9px;
	}
`;

GlassdoorContainer.RightImg = styled.img`
	width: 188px;

	@media (max-width: 980px) {
		width: 134px;
	}
`;

GlassdoorContainer.RightScoreText = styled.div`
	font-weight: 700;
	font-size: 36px;
	line-height: 172%;
	color: #000000;
	margin-top: 5px;

	@media (max-width: 980px) {
		font-size: 24px;
		margin-top: 0;
	}
`;

GlassdoorContainer.RightLinkArrow = styled.a`
	display: flex;
	align-items: center;
	gap: 4px;
	font-weight: 700;
	font-size: 18px;
	line-height: 75%;
	text-decoration-line: underline;
	margin-top: 9px;
	color: #424b5a;

	@media (max-width: 980px) {
		font-size: 16px;
		margin-top: 0;
	}
`;
