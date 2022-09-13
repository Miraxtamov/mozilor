import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dekoria from "../../../assets/icons/dekoria.svg";
import decathlon from "../../../assets/icons/decathlon.svg";
import dominos from "../../../assets/icons/dominos.svg";
import heineken from "../../../assets/icons/heineken.svg";
import toyota from "../../../assets/icons/toyota.svg";
import renault from "../../../assets/icons/renault.svg";
import kfc from "../../../assets/icons/kfc.svg";
import aboutBrandCard1 from "../../../assets/icons/about-brand-card1.svg";
import aboutBrandCard2 from "../../../assets/icons/about-brand-card2.svg";
import aboutBrandCard3 from "../../../assets/icons/about-brand-card3.svg";
import { AboutBrandContainer, AboutBrandInfoCards } from "./style";

const AboutBrand = () => {
	return (
		<>
			<AboutBrandContainer>
				<AboutBrandContainer.Title>
					Over <span>1.3 million</span> users and global brands trust us
				</AboutBrandContainer.Title>
				<AboutBrandContainer.BrandCard>
					<Swiper
						slidesPerView={7}
						spaceBetween={40}
						loop={true}
						loopFillGroupWithBlank={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						lazy={true}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							455: {
								slidesPerView: 3,
							},
							700: {
								slidesPerView: 4,
							},
							890: {
								slidesPerView: 5,
							},
							1020: {
								slidesPerView: 6,
							},
							1200: {
								slidesPerView: 7,
							},
						}}
					>
						<SwiperSlide>
							<img className="swiper-lazy" src={dekoria} alt="dekoria" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={decathlon} alt="decathlon" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={dominos} alt="dominos" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={heineken} alt="heineken" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={toyota} alt="toyota" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={renault} alt="renault" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={kfc} alt="kfc" />
						</SwiperSlide>
						<SwiperSlide>
							<img className="swiper-lazy" src={kfc} alt="kfc" />
						</SwiperSlide>
					</Swiper>
				</AboutBrandContainer.BrandCard>
			</AboutBrandContainer>
			<AboutBrandInfoCards>
				<AboutBrandInfoCards.Card>
					<AboutBrandInfoCards.CardNumTitle>
						2017
					</AboutBrandInfoCards.CardNumTitle>
					<AboutBrandInfoCards.CardDesc>
						Founded in
					</AboutBrandInfoCards.CardDesc>
					<AboutBrandInfoCards.CardImg>
						<img src={aboutBrandCard2} alt="aboutBrandCard2" />
					</AboutBrandInfoCards.CardImg>
				</AboutBrandInfoCards.Card>
				<AboutBrandInfoCards.Card>
					<AboutBrandInfoCards.CardNumTitle>
						44+
					</AboutBrandInfoCards.CardNumTitle>
					<AboutBrandInfoCards.CardDesc>Employees</AboutBrandInfoCards.CardDesc>
					<AboutBrandInfoCards.CardImg>
						<img src={aboutBrandCard1} alt="aboutBrandCard1" />
					</AboutBrandInfoCards.CardImg>
				</AboutBrandInfoCards.Card>
				<AboutBrandInfoCards.Card>
					<AboutBrandInfoCards.CardNumTitle>
						1.3M+
					</AboutBrandInfoCards.CardNumTitle>
					<AboutBrandInfoCards.CardDesc>
						Active users
					</AboutBrandInfoCards.CardDesc>
					<AboutBrandInfoCards.CardImg>
						<img src={aboutBrandCard3} alt="aboutBrandCard3" />
					</AboutBrandInfoCards.CardImg>
				</AboutBrandInfoCards.Card>
			</AboutBrandInfoCards>
		</>
	);
};

export default AboutBrand;
