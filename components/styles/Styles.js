import React from "react"
import "./styles.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
// install Swiper components
SwiperCore.use([Navigation]);

export const Styles = () => {
    return(
        <div className="styles-section">
            <div className="section-header">
                <h2 className="section-title">Обзор стилей</h2>
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
                                    <span className="styles-text__elem styles-text__elem_up">Современное НЮ</span>
                                    <span className="styles-text__elem styles-text__elem_down">Новое изобразительное
                                        искусство</span>
                                </div>
                            </div>
                        </div>
                        <div className="styles-list-two">
                            <div className="styles-list styles-list_2">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Уорхолом</span>
                                    <span className="styles-text__elem styles-text__elem_down">Новый Поп Арт</span>
                                </div>
                            </div>
                            <div className="styles-list styles-list_3">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Гансом
                                        Хофманном</span>
                                    <span className="styles-text__elem styles-text__elem_down">Новый абстрактный
                                        экспрессионизм</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="styles-list-two">
                            <div className="styles-list styles-list_4">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Уорхолом</span>
                                    <span className="styles-text__elem styles-text__elem_down">Новый Поп Арт</span>
                                </div>
                            </div>
                            <div className="styles-list styles-list_5">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">Вдохновение<br/> Гансом
                                        Хофманном</span>
                                    <span className="styles-text__elem styles-text__elem_down">Новый абстрактный</span>
                                </div>
                            </div>
                        </div>
                        <div className="styles-list-one">
                            <div className="styles-list styles-list_6">
                                <div className="styles-list__elem">
                                    <span className="styles-text__elem styles-text__elem_up">Современное НЮ</span>
                                    <span className="styles-text__elem styles-text__elem_down">Новое изобразительное
                                        искусство</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}