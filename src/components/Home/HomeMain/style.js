import styled from "styled-components";

export const HomeMainContainer = styled.div`
	display: flex;
	position: relative;
`;

HomeMainContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 50%;
	padding: 153px 0 210px 0;

	@media (max-width: 1110px) {
		padding: 100px 0 120px 0;
	}

	@media (max-width: 950px) {
		flex: 1 1 100%;
		padding: 50px 0 350px 0;
	}

	@media (max-width: 800px) {
		padding: 50px 0 450px 0;
	}

	@media (max-width: 510px) {
		padding: 35px 0 370px 0;
	}

	@media (max-width: 400px) {
		padding: 15px 0 300px 0;
	}

	@media (max-width: 350px) {
		padding: 10px 0 280px 0;
	}

	@media (max-width: 330px) {
		padding: 10px 0 250px 0;
	}
`;

HomeMainContainer.Title = styled.div`
	font-size: 48px;
	font-weight: 700;
	line-height: 129%;
	color: var(--primaryColor);
	margin-bottom: 32px;

	@media (max-width: 950px) {
		font-size: 38px;
		margin-bottom: 20px;
	}

	@media (max-width: 680px) {
		font-size: 34px;
		margin-bottom: 30px;
	}

	@media (max-width: 500px) {
		font-size: 30px;
		margin-bottom: 20px;
	}

	@media (max-width: 400px) {
		font-size: 25px;
	}

	@media (max-width: 350px) {
		margin-bottom: 16px;
		font-size: 22px;
	}
`;

HomeMainContainer.Description = styled.div`
	font-size: 22px;
	font-weight: 400;
	line-height: 1.5;
	color: var(--secondaryColor);
	margin-bottom: 40px;

	@media (max-width: 950px) {
		font-size: 20px;
		margin-bottom: 32px;
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

HomeMainContainer.BtnWrapper = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 330px) {
		flex-direction: column;
		gap: 8px;
	}
`;

HomeMainContainer.Btn = styled.div`
	&:last-of-type {
		margin-left: 16px;
	}

	@media (max-width: 500px) {
		padding: 10px 28px;
	}

	@media (max-width: 390px) {
		padding: 8px 24px;
	}

	@media (max-width: 350px) {
		padding: 6px 16px;

		&:last-of-type {
			margin-left: 12px;
		}
	}

	@media (max-width: 330px) {
		&:last-of-type {
			margin-left: 0;
		}
	}
`;

HomeMainContainer.Img = styled.img`
	max-width: 700px;
	position: absolute;
	right: 0;
	bottom: 0;

	@media (max-width: 1110px) {
		max-width: 600px;
	}

	@media (max-width: 1035px) {
		max-width: 550px;
	}

	@media (max-width: 545px) {
		max-width: 480px;
	}

	@media (max-width: 510px) {
		max-width: 400px;
	}

	@media (max-width: 415px) {
		max-width: 370px;
	}

	@media (max-width: 390px) {
		max-width: 320px;
	}

	@media (max-width: 330px) {
		max-width: 280px;
	}
`;
