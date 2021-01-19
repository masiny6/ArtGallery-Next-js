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




const NEWS_DATA = {
    mainTitle: "Новости искусства",
    newsItems: [
        {
            pictureURL: "/images/news-photo-1.jpg",
            tag: "Галлереи и выставки",
            date: "21.12.2018",
            newsURL: "",
            title: "Обзор нашего экспетра Владимира Рубинштейна-Загорского",
            description: "Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир."
        },
        {
            pictureURL: "/images/news-photo-2.jpg",
            tag: "Галлереи и выставки",
            date: "21.12.2018",
            newsURL: "",
            title: "Обзор нашего экспетра Владимира Рубинштейна-Загорского",
            description: "Теперь чтобы увидеть и сравнить все 36 картин культового голландца, не нужно объезжать весь мир."
        },
    ]
}
export const News = () => {



    return(
        <div className="news-section">
            <div className="section-header">
                <h2 className="section-title">{!!NEWS_DATA.mainTitle ? NEWS_DATA.mainTitle: undefined}</h2>
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
            {!!NEWS_DATA.newsItems ? NEWS_DATA.newsItems.map((item, key) => (
                <SwiperSlide key={item.title + key}>
                    <NewsItem data={item}/>
                </SwiperSlide>
            )) : undefined}
        </Swiper>
            </div>
        </div>
    )
}