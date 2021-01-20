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








export const PopularFilterCatalog = (props) => {
    const data = props.data.popularFilter
    return(
        <React.Fragment>
        <div className="popular-filter">
            <div className="centering">
                <div className="centering-tablet">
                    <div className="popular-filter__header">
                        <h2 className="popular-filter__title">{!!data.mainTitle ? data.mainTitle : undefined}</h2>
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
                        {!!data.elements ? data.elements.map((item, key) => (
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