import styled from "styled-components";

export const ContactMainContainer = styled.div`
	display: flex;
	position: relative;
`;

ContactMainContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 50%;
	padding: 117px 0 140px 0;

	@media (max-width: 950px) {
		flex: 1 1 100%;
		padding: 50px 0 350px 0;
	}

	@media (max-width: 515px) {
		padding: 30px 0 290px 0;
	}

	@media (max-width: 420px) {
		padding: 30px 0 240px 0;
	}

	@media (max-width: 420px) {
		padding: 30px 0 200px 0;
	}
`;

ContactMainContainer.InfoTitle = styled.div`
	font-size: 48px;
	font-weight: 700;
	line-height: 129%;
	color: var(--primaryColor);
	margin-bottom: 40px;

	@media (max-width: 950px) {
		font-size: 36px;
	}

	@media (max-width: 460px) {
		font-size: 28px;
		margin-bottom: 20px;
	}
`;

ContactMainContainer.InfoDesc = styled.div`
	font-size: 18px;
	font-weight: 400;
	line-height: 1.5;
	color: var(--secondaryColor);
	margin-bottom: 40px;

	@media (max-width: 950px) {
		font-size: 16px;
	}
`;

ContactMainContainer.InfoBtn = styled.div``;

ContactMainContainer.Img = styled.img`
	max-width: 660px;
	position: absolute;
	right: 0;
	bottom: 0;

	@media (max-width: 1100px) {
		max-width: 600px;
	}

	@media (max-width: 1025px) {
		max-width: 550px;
	}

	@media (max-width: 620px) {
		width: 450px;
	}

	@media (max-width: 515px) {
		width: 400px;
	}

	@media (max-width: 465px) {
		width: 350px;
	}

	@media (max-width: 420px) {
		width: 300px;
	}

	@media (max-width: 360px) {
		width: 250px;
	}
`;
