import React, { useEffect, useRef } from "react"
import "./styles.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
// install Swiper components
SwiperCore.use([Navigation]);







export const Styles = (props) => {

    const data = props.data.styles

    return(
        <div className="styles-section">
            <div className="section-header">
                <h2 className="section-title">{!!data.mainTiitle ? data.mainTiitle : undefined}</h2>
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
                    nextEl: ".styles-section .swiper-button__next",
                    prevEl: ".styles-section .swiper-button__prev"
                }}
                breakpoints={{
                    320: {
                    spaceBetween: 7,
                    slidesPerView: 1,
                    },
                    768: {
                    spaceBetween: 44,
                    slidesPerView: 1.5,
                    },
                    1280: {
                    spaceBetween: 44,
                    slidesPerView: 2,
                    },
                }}
            >
                    <SwiperSlide>
                        <div className="styles-list-one">
                            <div className="styles-list styles-list_1">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">{data.slides.slideOne.stylesListOne[0]}</span>
                                    <span className="styles-text__elem styles-text__elem_down">{data.slides.slideOne.stylesListOne[1]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="styles-list-two">
                            <div className="styles-list styles-list_2">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">{data.slides.slideOne.stylesListTwo.stylesListTwo_1[0].string1}<br/> {data.slides.slideOne.stylesListTwo.stylesListTwo_1[0].string2}</span>
                                    <span className="styles-text__elem styles-text__elem_down">{data.slides.slideOne.stylesListTwo.stylesListTwo_1[1]}</span>
                                </div>
                            </div>
                            <div className="styles-list styles-list_3">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">{data.slides.slideOne.stylesListTwo.stylesListTwo_2[0].string1}<br/> {data.slides.slideOne.stylesListTwo.stylesListTwo_2[0].string2}</span>
                                    <span className="styles-text__elem styles-text__elem_down">{data.slides.slideOne.stylesListTwo.stylesListTwo_2[1]}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="styles-list-two">
                            <div className="styles-list styles-list_4">
                                <div className="styles-list__elem">
                                <span className="styles-text__elem styles-text__elem_up">{data.slides.slideTwo.stylesListTwo.stylesListTwo_1[0].string1}<br/> {data.slides.slideTwo.stylesListTwo.stylesListTwo_1[0].string2}</span>
                                    <span className="styles-text__elem styles-text__elem_down">{data.slides.slideTwo.stylesListTwo.stylesListTwo_1[1]}</span>
                                </div>
                            </div>
                            <div className="styles-list styles-list_5">
                                <div className="styles-list__elem">
                                <span className="styles-text__elem styles-text__elem_up">{data.slides.slideTwo.stylesListTwo.stylesListTwo_2[0].string1}<br/> {data.slides.slideTwo.stylesListTwo.stylesListTwo_2[0].string2}</span>
                                    <span className="styles-text__elem styles-text__elem_down">{data.slides.slideTwo.stylesListTwo.stylesListTwo_2[1]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="styles-list-one">
                            <div className="styles-list styles-list_6">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">{data.slides.slideTwo.stylesListOne[0]}</span>
                                    <span className="styles-text__elem styles-text__elem_down">{data.slides.slideTwo.stylesListOne[1]}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}