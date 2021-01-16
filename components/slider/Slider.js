import React from "react"
import "./slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
// import Swiper core and required components
import SwiperCore, { Autoplay, Pagination } from 'swiper';
// install Swiper components
SwiperCore.use([Autoplay, Pagination]);

const SLIDER_DATA = {
    sliders: [
        {
            url: "/images/background-slide-1.jpg",
            stringOne: "Новое на этой неделе1",
            stringTwo: ["Лучшие фигуративные","произведения"],
            stringThree: ["Новые оригинальные работы,","выбранные нашим эспертом"],
            button: {
                name: "Открыть",
                url: ""
            }
        },
        {
            url: "/images/background-slide-1.jpg",
            stringOne: "Новое на этой неделе2",
            stringTwo: ["Лучшие фигуративные","произведения"],
            stringThree: ["Новые оригинальные работы,","выбранные нашим эспертом"],
            button: {
                name: "Открыть",
                url: ""
            }
        },
        {
            url: "/images/background-slide-1.jpg",
            stringOne: "Новое на этой неделе3",
            stringTwo: ["Лучшие фигуративные","произведения"],
            stringThree: ["Новые оригинальные работы,","выбранные нашим эспертом"],
            button: {
                name: "Открыть",
                url: ""
            }
        },
    ]
}

export const Slider = () => {
    return(
        <div className="main-slider">
            <Swiper
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {!!SLIDER_DATA.sliders ? SLIDER_DATA.sliders.map((item, key) => (
                    <SwiperSlide className="swiper-slide" style={{backgroundImage: `url(${item.url})`}}>
                        <div className="main-slider__text">
                            {!!item.stringOne ? <p className="main-slider__string_one">{item.stringOne}</p> : undefined}<br/>
                            {!!item.stringTwo ? <p className="main-slider__string_two">{!!item.stringTwo[0] ? item.stringTwo[0]: undefined}<br/>{!!item.stringTwo[1] ? item.stringTwo[1] : undefined}</p> : undefined}<br/>
                            {!!item.stringThree ? <p className="main-slider__string_three">{!!item.stringThree[0] ? item.stringThree[0] : undefined}<br/>{item.stringThree[1] ? item.stringThree[1] : undefined}</p> : undefined}
                            <Link href={item.button.url}><a className="main-slider__button" href={item.button.url}>{item.button.name}</a></Link>
                        </div>
                    </SwiperSlide>
                )) : undefined}
            </Swiper>
        </div>
    )
}