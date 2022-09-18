import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/icons/notFound.svg";
import { Container } from "./style";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Container.Img src={notFound} alt="not found" />
			<Container.Title>Page not found</Container.Title>
			<Container.Desc>
				The page you are looking for does not exist
			</Container.Desc>
			<Container.Btn onClick={() => navigate("/")}>Back Home</Container.Btn>
		</Container>
	);
};

export default NotFound;
