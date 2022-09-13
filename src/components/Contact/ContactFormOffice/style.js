import styled from "styled-components";

export const ContactFormOfficeContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 100px;
	margin-bottom: 195px;
	gap: 122px;

	@media (max-width: 1000px) {
		gap: 60px;
	}

	@media (max-width: 930px) {
		flex-direction: column;
		gap: 110px;
		justify-content: center;
		margin-top: 65px;
		margin-bottom: 100px;
	}

	@media (max-width: 500px) {
		margin-top: 55px;
		margin-bottom: 85px;
	}
`;

export const ContactFormContainer = styled.div`
	padding: 52px 48px;
	background: #ffffff;
	box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07),
		0px 25px 35px rgba(22, 23, 72, 0.05);
	border-radius: 8px;

	@media (max-width: 930px) {
		width: 80%;
	}

	@media (max-width: 650px) {
		width: 100%;
	}

	@media (max-width: 530px) {
		padding: 40px 30px;
	}

	@media (max-width: 530px) {
		padding: 34px 20px;
	}

	@media (max-width: 330px) {
		padding: 34px 10px;
	}
`;

ContactFormContainer.Form = styled.form``;

ContactFormContainer.FormLabel = styled.label`
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: 0.005em;
	color: var(--form-label);
	margin-bottom: 6px;
`;

ContactFormContainer.FormInput = styled.input`
	width: 100%;
	padding: 20px 32px;
	background-color: #ffffff;
	border: 1px solid #e3e7f6;
	border-radius: 6px;
	color: var(--desc);
	outline: none;
	font-size: 16px;
	margin-top: 6px;
	margin-bottom: 30px;

	&::placeholder {
		color: #c7c9d9;
	}
`;

ContactFormContainer.FormTextarea = styled.textarea`
	width: 100%;
	height: 148px;
	padding: 20px 32px;
	background-color: #ffffff;
	font-family: "Europe", sans-serif;
	border: 1px solid #e3e7f6;
	border-radius: 6px;
	color: var(--desc);
	outline: none;
	font-size: 16px;
	margin-bottom: 30px;
	margin-top: 6px;
	resize: vertical;

	&::placeholder {
		color: #c7c9d9;
	}
`;

ContactFormContainer.FormBtn = styled.button`
	outline: none;
	border: none;

	@media (max-width: 400px) {
		width: 100%;
	}
`;

export const ContactOfficeContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 930px) {
		flex-direction: row;
		gap: 50px;
	}

	@media (max-width: 800px) {
		gap: 40px;
	}

	@media (max-width: 760px) {
		flex-wrap: wrap;
		gap: 70px;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		gap: 70px;
	}
`;

ContactOfficeContainer.Title = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 150%;
	letter-spacing: 0.005em;
	color: #000000;
	margin-bottom: 52px;

	@media (max-width: 930px) {
		display: none;
	}
`;

ContactOfficeContainer.FlagTitleDesc = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 72px;

	&:last-of-type {
		margin-bottom: 0;
	}

	.FTD-flag-title {
		display: flex;
		align-items: center;
		margin-bottom: 25px;
	}

	@media (max-width: 930px) {
		margin-bottom: 0;
		width: 100%;
	}

	@media (max-width: 760px) {
		width: 233px;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

ContactOfficeContainer.FTDFlag = styled.img`
	width: 40px;
`;

ContactOfficeContainer.FTDTitle = styled.div`
	font-weight: 700;
	font-size: 18px;
	line-height: 150%;
	letter-spacing: 0.005em;
	color: #000000;
	margin-left: 20px;
	white-space: nowrap;
`;

ContactOfficeContainer.FTDDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: 0.005em;
	color: #000000;

	@media (max-width: 930px) {
		width: 85%;
		font-size: 15px;
	}
`;
