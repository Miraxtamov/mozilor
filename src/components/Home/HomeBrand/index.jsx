import React from "react";
import dekoria from "../../../assets/icons/dekoria.svg";
import decathlon from "../../../assets/icons/decathlon.svg";
import dominos from "../../../assets/icons/dominos.svg";
import heineken from "../../../assets/icons/heineken.svg";
import toyota from "../../../assets/icons/toyota.svg";
import renault from "../../../assets/icons/renault.svg";
import kfc from "../../../assets/icons/kfc.svg";
import { HomeBrandContainer } from "./style";

const HomeBrand = () => {
	return (
		<>
			<HomeBrandContainer>
				<HomeBrandContainer.Title>
					Over <span>1.3 million</span> users and global brands trust us
				</HomeBrandContainer.Title>
				<HomeBrandContainer.BrandsWrapper>
					<HomeBrandContainer.BrandsWrapperImg src={dekoria} />
					<HomeBrandContainer.BrandsWrapperImg src={decathlon} />
					<HomeBrandContainer.BrandsWrapperImg src={dominos} />
					<HomeBrandContainer.BrandsWrapperImg src={heineken} />
					<HomeBrandContainer.BrandsWrapperImg src={toyota} />
					<HomeBrandContainer.BrandsWrapperImg src={renault} />
					<HomeBrandContainer.BrandsWrapperImg src={kfc} />
				</HomeBrandContainer.BrandsWrapper>
				<HomeBrandContainer.Line />
			</HomeBrandContainer>
		</>
	);
};

export default HomeBrand;
