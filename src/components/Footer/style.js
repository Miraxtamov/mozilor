import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
	background-color: var(--footer-bg);
`;

FooterContainer.Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	padding-top: 55px;
	margin-bottom: 64px;

	@media (max-width: 750px) {
		flex-direction: column;
	}
`;

FooterContainer.LogoInfo = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 30%;
`;

FooterContainer.LogoLink = styled(NavLink)`
	margin-bottom: 25px;

	.footer__img {
		@media (max-width: 970px) {
			width: 170px;
		}

		@media (max-width: 520px) {
			width: 150px;
		}

		@media (max-width: 350px) {
			width: 130px;
		}
	}
`;

FooterContainer.FooterInfo = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 169%;
	color: var(--defaultColor);

	@media (max-width: 750px) {
		margin-bottom: 80px;
	}

	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

FooterContainer.LinkSocialLinks = styled.div`
	display: flex;
	align-items: baseline;
	gap: 100px;
	margin-left: auto;

	@media (max-width: 830px) {
		gap: 80px;
	}

	@media (max-width: 750px) {
		margin-left: 0;
	}

	@media (max-width: 500px) {
		flex-direction: column;
		gap: 50px;
	}
`;

FooterContainer.Links = styled.div`
	display: flex;
	flex-direction: column;
`;

FooterContainer.LinksTitle = styled.div`
	font-size: 18px;
	line-height: 86%;
	color: var(--defaultColor);
	margin-bottom: 30px;
	font-weight: 700;
`;

FooterContainer.LinksLink = styled.div`
	font-size: 16px;
	font-weight: 400;
	line-height: 125%;
	color: var(--defaultColor);
	margin-bottom: 21px;
	cursor: pointer;

	&:last-of-type {
		margin-bottom: 0;
	}

	&:hover {
		color: var(--btn-span);
	}
`;

FooterContainer.FollowTitle = styled.div`
	font-size: 17px;
	line-height: 129%;
	font-weight: 700;
	letter-spacing: -0.231818px;
	color: var(--defaultColor);
	margin-bottom: 40px;
`;

FooterContainer.SocialWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;

	.social__link {
		cursor: pointer;
		color: var(--defaultColor);

		&:hover {
			color: var(--btn-span);
		}
	}
`;

FooterContainer.Line = styled.div`
	border: 1px solid rgba(197, 203, 226, 0.5);
`;

export const FooterBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 29px;
	padding-bottom: 38px;

	@media (max-width: 430px) {
		flex-direction: column;
	}
`;

FooterBottom.CopyRight = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 130%;
	color: var(--defaultColor);

	@media (max-width: 500px) {
		font-size: 14px;
	}

	@media (max-width: 500px) {
		margin-bottom: 25px;
	}
`;

FooterBottom.Terms = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 130%;
	text-decoration-line: underline;
	color: var(--defaultColor);
	cursor: pointer;

	&:hover {
		text-decoration-line: none;
		color: var(--btn-span);
	}

	@media (max-width: 500px) {
		font-size: 14px;
	}
`;
