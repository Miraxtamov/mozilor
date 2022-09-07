import React from "react";
import { useNavigate } from "react-router-dom";
import footerLogo from "../../assets/icons/footerLogo.svg";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { FooterBottom, FooterContainer } from "./style";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<FooterContainer>
			<div className="container">
				<FooterContainer.Wrapper>
					<FooterContainer.Wrapper>
						<FooterContainer.LogoInfo>
							<FooterContainer.LogoLink to="/">
								<img className="footer__img" src={footerLogo} alt="logo" />
							</FooterContainer.LogoLink>
							<FooterContainer.FooterInfo>
								Mozil builds extensions, plugins and apps to simplify work for
								businesses.
							</FooterContainer.FooterInfo>
						</FooterContainer.LogoInfo>
						<FooterContainer.LinkSocialLinks>
							<FooterContainer.Links>
								<FooterContainer.LinksTitle>
									Products
								</FooterContainer.LinksTitle>
								<FooterContainer.LinksLink>CookieYes</FooterContainer.LinksLink>
								<FooterContainer.LinksLink>Webtoffee</FooterContainer.LinksLink>
							</FooterContainer.Links>
							<FooterContainer.Links>
								<FooterContainer.LinksTitle>About</FooterContainer.LinksTitle>
								<FooterContainer.LinksLink onClick={() => navigate("/about")}>
									About us
								</FooterContainer.LinksLink>
								<FooterContainer.LinksLink onClick={() => navigate("/career")}>
									Career
								</FooterContainer.LinksLink>
								<FooterContainer.LinksLink onClick={() => navigate("/contact")}>
									Contact
								</FooterContainer.LinksLink>
							</FooterContainer.Links>
							<FooterContainer.Links>
								<FooterContainer.FollowTitle>
									Follow us
								</FooterContainer.FollowTitle>
								<FooterContainer.SocialWrapper>
									<FaFacebookF className="social__link" />
									<FaTwitter className="social__link" />
									<FaInstagram className="social__link" />
									<FaLinkedinIn className="social__link" />
								</FooterContainer.SocialWrapper>
							</FooterContainer.Links>
						</FooterContainer.LinkSocialLinks>
					</FooterContainer.Wrapper>
				</FooterContainer.Wrapper>
			</div>
			<FooterContainer.Line />
			<div className="container">
				<FooterBottom>
					<FooterBottom.CopyRight>
						© 2022 Mozi - All right reserved
					</FooterBottom.CopyRight>
					<FooterBottom.Terms>Terms & Conditions</FooterBottom.Terms>
				</FooterBottom>
			</div>
		</FooterContainer>
	);
};

export default Footer;
