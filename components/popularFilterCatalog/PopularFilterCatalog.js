import React from "react"
import "./popularFilterCatalog.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
// install Swiper components
SwiperCore.use([Navigation]);


const POPULARFILTER_CATALOG = {
    mainTitle: "Популярные фильтры",
    elements: [
        {
            name: "Барроко",
            pictureURL: "/images/popular-filter-1.jpg"
        },
        {
            name: "Живопись",
            pictureURL: "/images/popular-filter-2.jpg"
        },
        {
            name: "Пейзаж",
            pictureURL: "/images/popular-filter-3.jpg"
        },
        {
            name: "Модерн",
            pictureURL: "/images/popular-filter-4.jpg"
        },
        {
            name: "Барроко",
            pictureURL: "/images/popular-filter-2.jpg"
        },
    ]
}





export const PopularFilterCatalog = () => {
    return(
        <React.Fragment>
        <div className="popular-filter">
            <div className="centering">
                <div className="centering-tablet">
                    <div className="popular-filter__header">
                        <h2 className="popular-filter__title">{!!POPULARFILTER_CATALOG.mainTitle ? POPULARFILTER_CATALOG.mainTitle : undefined}</h2>
                        <div className="swiper-button">
                            <div className="swiper-button__prev"></div>
                            <div className="swiper-button__next"></div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
                        loop
                        navigation = {{
                            nextEl: ".popular-filter .swiper-button__next",
                            prevEl: ".popular-filter .swiper-button__prev"
                        }}
                        breakpoints={{
                            320: {
                            spaceBetween: 0,
                            slidesPerView: 1,
                            },
                            768: {
                            spaceBetween: 9,
                            slidesPerView: 4,
                            },
                            1280: {
                            spaceBetween: 13,
                            slidesPerView: 5,
                            },
                        }}
                    >
                        {!!POPULARFILTER_CATALOG.elements ? POPULARFILTER_CATALOG.elements.map((item, key) => (
                            <SwiperSlide key={item.name + key}>
                                <div className="filter-photo">
                                    <img className="filter-photo__inner" src={item.pictureURL} alt=""/>
                                </div>
                                <span className="filter-text">{item.name}</span>
                            </SwiperSlide>
                        )) : undefined}
                    </Swiper>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}