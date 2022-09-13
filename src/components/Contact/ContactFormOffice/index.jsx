import React from "react";
import ukFlag from "../../../assets/icons/uk-flag.svg";
import indianFlag from "../../../assets/icons/indian-flag.svg";
import {
	ContactFormContainer,
	ContactFormOfficeContainer,
	ContactOfficeContainer,
} from "./style";

const ContactFormOffice = () => {
	return (
		<ContactFormOfficeContainer>
			<ContactFormContainer>
				<ContactFormContainer.Form>
					<ContactFormContainer.FormLabel htmlFor="first_name">
						Name*
					</ContactFormContainer.FormLabel>
					<ContactFormContainer.FormInput
						placeholder="Name"
						type="text"
						name="first_name"
						id="first_name"
					/>
					<ContactFormContainer.FormLabel htmlFor="email">
						Email*
					</ContactFormContainer.FormLabel>
					<ContactFormContainer.FormInput
						placeholder="Email"
						type="email"
						name="email"
						id="email"
					/>
					<ContactFormContainer.FormLabel htmlFor="subject">
						Subject
					</ContactFormContainer.FormLabel>
					<ContactFormContainer.FormInput
						placeholder="Subject"
						type="text"
						name="subject"
						id="subject"
					/>
					<ContactFormContainer.FormLabel htmlFor="message">
						Message*
					</ContactFormContainer.FormLabel>
					<ContactFormContainer.FormTextarea
						placeholder="Type something"
						name="message"
						id="message"
					/>
					<ContactFormContainer.FormBtn className="btn">
						Send
					</ContactFormContainer.FormBtn>
				</ContactFormContainer.Form>
			</ContactFormContainer>
			<ContactOfficeContainer>
				<ContactOfficeContainer.Title>
					Global Offices
				</ContactOfficeContainer.Title>
				<ContactOfficeContainer.FlagTitleDesc>
					<div className="FTD-flag-title">
						<ContactOfficeContainer.FTDFlag
							src={ukFlag}
							alt="United Kingdom flag"
						/>
						<ContactOfficeContainer.FTDTitle>
							United Kingdom
						</ContactOfficeContainer.FTDTitle>
					</div>
					<ContactOfficeContainer.FTDDesc>
						3 Warren Yard, Wolverton Mill Milton Keynes England UK – MK12 5NW
					</ContactOfficeContainer.FTDDesc>
				</ContactOfficeContainer.FlagTitleDesc>
				<ContactOfficeContainer.FlagTitleDesc>
					<div className="FTD-flag-title">
						<ContactOfficeContainer.FTDFlag
							src={indianFlag}
							alt="Indian flag"
						/>
						<ContactOfficeContainer.FTDTitle>
							India
						</ContactOfficeContainer.FTDTitle>
					</div>
					<ContactOfficeContainer.FTDDesc>
						First Floor, Sahya Building Govt. Cyberpark, Nellikode PO Kozhikode,
						Kerala India – 6730163 Warren Yard, Wolverton Mill Milton Keynes
						England UK – MK12 5NW
					</ContactOfficeContainer.FTDDesc>
				</ContactOfficeContainer.FlagTitleDesc>
				<ContactOfficeContainer.FlagTitleDesc>
					<div className="FTD-flag-title">
						<ContactOfficeContainer.FTDFlag
							src={ukFlag}
							alt="Bengaluru  flag"
						/>
						<ContactOfficeContainer.FTDTitle>
							Bengaluru
						</ContactOfficeContainer.FTDTitle>
					</div>
					<ContactOfficeContainer.FTDDesc>
						Brigade IRV Centre Nallurahalli Whitefield Bengaluru, Karnataka
						India – 560066
					</ContactOfficeContainer.FTDDesc>
				</ContactOfficeContainer.FlagTitleDesc>
			</ContactOfficeContainer>
		</ContactFormOfficeContainer>
	);
};

export default ContactFormOffice;
