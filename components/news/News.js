import React from "react"
import "./news.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
// install Swiper components
SwiperCore.use([Navigation]);

export const News = () => {
    return(
        <div className="news-section">
            <div className="section-header">
                <h2 className="section-title">Новости искусства</h2>
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
                navigation
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
            <SwiperSlide>
                <div className="news-photo-container">
                    <img className="news-photo" src="/images/news-photo-1.jpg" alt=""/>
                </div>
                <div className="news">
                    <div className="news__header">
                        <a className="news__link-teg" href="#">Галлереи и выставки</a><span className="news-data">21.12.2018</span>
                    </div>
                    <a className="news__link-title" href="#">
                        <h5 className="news__title">Обзор нашего экспетра Владимира Рубинштейна-Загорского</h5>
                    </a>
                    <p className="news__text">Теперь чтобы увидеть и сравнить все 36 картин культового голландца,
                        не нужно объезжать весь мир.</p>
                    <a className="news__link-look" href="#">Смотреть и читать
                        <svg className="svg-arrow" viewBox="0 0 12 4">
                            <path id="Layer" className="shp0" d="M0 1.24L11.36 1.24L11.36 1.89L0 1.89L0 1.24Z" />
                            <path id="Layer" className="shp0"
                                d="M9.41 3.15L10.07 3.15L10.07 2.84L10.4 2.84L10.4 2.53L10.73 2.53L10.73 2.22L11.05 2.22L11.05 0.94L10.73 0.94L10.73 0.62L10.4 0.62L10.4 0.31L10.07 0.31L10.07 0L9.41 0L9.41 0.31L9.41 0.62L9.73 0.62L9.73 0.94L10.08 0.94L10.08 2.22L9.73 2.22L9.73 2.53L9.41 2.53L9.41 2.84L9.41 3.15Z" />
                        </svg>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="news-photo-container">
                    <img className="news-photo" src="/images/news-photo-2.jpg" alt=""/>
                </div>
                <div className="news">
                    <div className="news__header">
                        <a className="news__link-teg" href="#">
                            <p className="news__teg">Галлереи и выставки</p>
                        </a><span className="news-data">21.12.2018</span>
                    </div>
                    <a className="news__link-title" href="#">
                        <h5 className="news__title">Обзор нашего экспетра Владимира
                            Рубинштейна-Загорского</h5>
                    </a>
                    <p className="news__text">Теперь чтобы увидеть и сравнить все 36 картин культового голландца,
                        не нужно объезжать весь мир.</p>
                    <a className="news__link-look" href="#">Смотреть и читать
                        <svg className="svg-arrow" viewBox="0 0 12 4">
                            <path id="Layer" className="shp0" d="M0 1.24L11.36 1.24L11.36 1.89L0 1.89L0 1.24Z" />
                            <path id="Layer" className="shp0"
                                d="M9.41 3.15L10.07 3.15L10.07 2.84L10.4 2.84L10.4 2.53L10.73 2.53L10.73 2.22L11.05 2.22L11.05 0.94L10.73 0.94L10.73 0.62L10.4 0.62L10.4 0.31L10.07 0.31L10.07 0L9.41 0L9.41 0.31L9.41 0.62L9.73 0.62L9.73 0.94L10.08 0.94L10.08 2.22L9.73 2.22L9.73 2.53L9.41 2.53L9.41 2.84L9.41 3.15Z" />
                        </svg>
                    </a>
                </div>
            </SwiperSlide>
        </Swiper>
            </div>
        </div>
    )
}