import React from "react"
import "./worksCard.scss"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { WorksItem } from "../worksItem/WorksItem";
// install Swiper components
SwiperCore.use([Navigation]);



export const WorksCard = (props) => {
    const data = props.data.worksCard
    return(
        <React.Fragment>
        <div className="works-section works-section_card">
            <div className="section-header">
                <h2 className="section-title">{!!data.mainTitle ? data.mainTitle : undefined}</h2>
                <div className="swiper-button">
                    <div className="swiper-button__prev"></div>
                    <div className="swiper-button__next"></div>
                </div>
            </div>
            <div className="centering">
                <Swiper
                     spaceBetween={40}
                     slidesPerView={4}
                     loop
                     navigation = {{
                        nextEl: ".works-section_card .swiper-button__next",
                        prevEl: ".works-section_card .swiper-button__prev"
                    }}
                     breakpoints={{
                         320: {
                         spaceBetween: 7,
                         slidesPerView: 2,
                         },
                         768: {
                         spaceBetween: 44,
                         slidesPerView: 3.5,
                         },
                         1280: {
                         spaceBetween: 40,
                         slidesPerView: 4,
                         },
                     }}
                >
                    {data.cards ? data.cards.map((item, key) => (
                        <SwiperSlide key={key}>
                            <WorksItem data={item} />
                        </SwiperSlide>
                    )) : undefined}
                </Swiper>
            </div>
        </div>
        
        </React.Fragment>
    )
}