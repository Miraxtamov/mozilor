import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductsBuildContainer } from "./style";

const ProductsBuild = () => {
	const navigate = useNavigate();

	return (
		<ProductsBuildContainer>
			<ProductsBuildContainer.Title>
				Want to know how we build products for the future?
			</ProductsBuildContainer.Title>
			<ProductsBuildContainer.Desc>
				Then be a part of our remarkable journey and let’s learn together!
			</ProductsBuildContainer.Desc>
			<ProductsBuildContainer.BtnWrapper>
				<div className="btn" onClick={() => navigate("/about")}>
					About us
				</div>
				<div className="btn-outline">Join the team</div>
			</ProductsBuildContainer.BtnWrapper>
		</ProductsBuildContainer>
	);
};

export default ProductsBuild;
