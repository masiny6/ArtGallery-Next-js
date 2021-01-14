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


export const PopularFilterCatalog = () => {
    return(
        <React.Fragment>
        <div className="popular-filter">
            <div className="centering">
                <div className="centering-tablet">
                    <div className="popular-filter__header">
                        <h2 className="popular-filter__title">Популярные фильтры</h2>
                        <div className="swiper-button">
                            <div className="swiper-button__prev"></div>
                            <div className="swiper-button__next"></div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1}
                        loop
                        navigation
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
                        <SwiperSlide>
                            <div className="filter-photo">
                                <img className="filter-photo__inner" src="/images/popular-filter-1.jpg" alt=""/>
                            </div>
                            <span className="filter-text">Барроко</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="filter-photo">
                                <img className="filter-photo__inner" src="/images/popular-filter-2.jpg" alt=""/>
                            </div>
                            <span className="filter-text">Живопись</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="filter-photo">
                                <img className="filter-photo__inner" src="/images/popular-filter-3.jpg" alt=""/>
                            </div>
                            <span className="filter-text">Пейзаж</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="filter-photo">
                                <img className="filter-photo__inner" src="/images/popular-filter-4.jpg" alt=""/>
                            </div>
                            <span className="filter-text">Модерн</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="filter-photo">
                                <img className="filter-photo__inner" src="/images/popular-filter-2.jpg" alt=""/>
                            </div>
                            <span className="filter-text">Барроко</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

        
        </React.Fragment>
    )
}