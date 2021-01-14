import React from "react"
import "./slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
// import Swiper core and required components
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// install Swiper components
SwiperCore.use([Autoplay, Pagination]);

export const Slider = () => {
    return(
        <div className="main-slider">
            <Swiper
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="swiper-slide">
                    <div className="main-slider__text">
                        <p className="main-slider__string_one">Новое на этой неделе</p><br/>
                        <p className="main-slider__string_two">Лучшие фигуративные<br/>произведения</p><br/>
                        <p className="main-slider__string_three">Новые оригинальные работы,<br/>выбранные нашим эспертом</p>
                        <a className="main-slider__button" href="#">Открыть</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="main-slider__text">
                        <p className="main-slider__string_one">Новое на этой неделе</p><br/>
                        <p className="main-slider__string_two">Лучшие фигуративные<br/>произведения</p><br/>
                        <p className="main-slider__string_three">Новые оригинальные работы,<br/>выбранные нашим эспертом</p>
                        <a className="main-slider__button" href="#">Открыть</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="main-slider__text">
                        <p className="main-slider__string_one">Новое на этой неделе</p><br/>
                        <p className="main-slider__string_two">Лучшие фигуративные<br/>произведения</p><br/>
                        <p className="main-slider__string_three">Новые оригинальные работы,<br/>выбранные нашим эспертом</p>
                        <a className="main-slider__button" href="#">Открыть</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}