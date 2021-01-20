import React from "react"
import "./news.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import NewsItem from "../newsItem/NewsItem";
// install Swiper components
SwiperCore.use([Navigation]);





export const News = (props) => {

    const data = props.data.news


    return(
        <div className="news-section">
            <div className="section-header">
                <h2 className="section-title">{!!data.mainTitle ? data.mainTitle: undefined}</h2>
                <div className="swiper-button">
                    <div className="swiper-button__prev"></div>
                    <div className="swiper-button__next"></div>
                </div>
            </div>
            <div className="centering">
            <Swiper
                spaceBetween={44}
                slidesPerView={2}
                loop
                navigation = {{
                    nextEl: ".news-section .swiper-button__next",
                    prevEl: ".news-section .swiper-button__prev"
                }}
                breakpoints={{
                    320: {
                    spaceBetween: 7,
                    slidesPerView: 1,
                    },
                    768: {
                    spaceBetween: 44,
                    slidesPerView: 1,
                    },
                    1280: {
                    spaceBetween: 44,
                    slidesPerView: 2,
                    },
                }}
        >
            {!!data.newsItems ? data.newsItems.map((item, key) => (
                <SwiperSlide key={item.title + key}>
                    <NewsItem data={item}/>
                </SwiperSlide>
            )) : undefined}
        </Swiper>
            </div>
        </div>
    )
}