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



export const Slider = (props) => {
    const data = props.data.slider
    return(
        <div className="main-slider">
            <Swiper
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {!!data.sliders ? data.sliders.map((item, key) => (
                    <SwiperSlide className="swiper-slide" style={{backgroundImage: `url(${item.url})`}} key={item.stringOne + key}>
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