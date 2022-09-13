import React from "react";
import contactMain from "../../../assets/icons/contact-main.svg";
import { ContactMainContainer } from "./style";

const ContactMain = () => {
	return (
		<>
			<ContactMainContainer>
				<ContactMainContainer.Img src={contactMain} alt="Contact Main" />
				<ContactMainContainer.Info>
					<ContactMainContainer.InfoTitle>
						Connect with us
					</ContactMainContainer.InfoTitle>
					<ContactMainContainer.InfoDesc>
						We’d love to hear from you. Fill out this form and we’ll get back to
						you. For job related queries, click on the button below.
					</ContactMainContainer.InfoDesc>
					<ContactMainContainer.InfoBtn className="btn-outline">
						Work with us
					</ContactMainContainer.InfoBtn>
				</ContactMainContainer.Info>
			</ContactMainContainer>
		</>
	);
};

export default ContactMain;
