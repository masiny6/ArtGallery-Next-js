import React from "react"
import "./slider.scss"

export const Slider = () => {
    return(
        <div className="main-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="main-slider__text">
                    <p className="main-slider__string_one">Новое на этой неделе</p><br/>
                    <p className="main-slider__string_two">Лучшие фигуративные<br/>произведения</p><br/>
                    <p className="main-slider__string_three">Новые оригинальные работы,<br/>выбранные нашим эспертом</p>
                    <a className="main-slider__button" href="#">Открыть</a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="main-slider__text">
                    <p className="main-slider__string_one">Новое на этой неделе</p><br/>
                    <p className="main-slider__string_two">Лучшие фигуративные<br/>произведения</p><br/>
                    <p className="main-slider__string_three">Новые оригинальные работы,<br/>выбранные нашим эспертом</p>
                    <a className="main-slider__button" href="#">Открыть</a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="main-slider__text">
                    <p className="main-slider__string_one">Новое на этой неделе</p><br/>
                    <p className="main-slider__string_two">Лучшие фигуративные<br/>произведения</p><br/>
                    <p className="main-slider__string_three">Новые оригинальные работы,<br/>выбранные нашим эспертом</p>
                    <a className="main-slider__button" href="#">Открыть</a>
                    </div>
                </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}