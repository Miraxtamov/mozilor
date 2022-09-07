import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css";
import startups10000 from "../../../assets/imgs/startups10000.jpg";
import smashing from "../../../assets/imgs/smashing.jpg";
import wikipedia from "../../../assets/imgs/wikipedia.jpg";
import cssLogo from "../../../assets/imgs/csslogo.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { InnovationContainer } from "./style";

const Innovation = () => {
	return (
		<>
			<InnovationContainer>
				<InnovationContainer.Title>
					Making waves with innovation
				</InnovationContainer.Title>
				<InnovationContainer.Desc>
					We are in the news for being market leaders who deliver exceptional
					products.
				</InnovationContainer.Desc>
				<InnovationContainer.Cards>
					<Swiper
						modules={[Navigation]}
						slidesPerView={4}
						spaceBetween={30}
						loop={true}
						loopFillGroupWithBlank={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						lazy={true}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							// 450: {
							// 	slidesPerView: 2,
							// },
							570: {
								slidesPerView: 2,
							},
							800: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
						navigation={{
							nextEl: ".innovation__arrow-right",
							prevEl: ".innovation__arrow-left",
						}}
					>
						<SwiperSlide className="swiper-slide-card">
							<img
								className="swiper-lazy"
								src={startups10000}
								alt="Startup1000"
							/>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img className="swiper-lazy" src={wikipedia} alt="wikipedia" />
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img className="swiper-lazy" src={smashing} alt="smashing" />
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img className="swiper-lazy" src={cssLogo} alt="cssLogo" />
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img
								className="swiper-lazy"
								src={startups10000}
								alt="Startup1000"
							/>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img className="swiper-lazy" src={wikipedia} alt="wikipedia" />
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img className="swiper-lazy" src={smashing} alt="smashing" />
						</SwiperSlide>
						<SwiperSlide className="swiper-slide-card">
							<img className="swiper-lazy" src={cssLogo} alt="cssLogo" />
						</SwiperSlide>
					</Swiper>
				</InnovationContainer.Cards>
				<div className="innovation__arrow">
					<FaArrowLeft className="innovation__arrow-left" />
					<FaArrowRight className="innovation__arrow-right" />
				</div>
			</InnovationContainer>
		</>
	);
};

export default Innovation;
