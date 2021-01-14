import React from "react"
import "./worksCard.scss"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
// install Swiper components
SwiperCore.use([Navigation]);



export const WorksCard = () => {
    return(
        <React.Fragment>
        <div className="works-section works-section_card">
            <div className="section-header">
                <h2 className="section-title">Похожие работы</h2>
                <div className="swiper-button">
                    <div className="swiper-button__prev"></div>
                    <div className="swiper-button__next"></div>
                </div>
            </div>
            <div className="centering">
                <Swiper
                     spaceBetween={40}
                     slidesPerView={4}
                     loop
                     navigation
                     breakpoints={{
                         320: {
                         spaceBetween: 7,
                         slidesPerView: 2,
                         },
                         768: {
                         spaceBetween: 44,
                         slidesPerView: 3.5,
                         },
                         1280: {
                         spaceBetween: 40,
                         slidesPerView: 4,
                         },
                     }}
                >
                    <SwiperSlide>
                        <div className="grid__item js-grid__item">
                            <div className="photo-works">
                                <img className="photo" src="/images/photo-works-1.jpg" alt=""/>
                            </div>
                            <div className="description-work">
                                <span className="attraction-new">Новинка</span>
                                <h4 className="description-work__title"><Link href="/productCard"><a className="description-work__link" to="/produc-card">Распоряжения о структуре
                                        тут длинное название картины</a></Link></h4>
                                <p className="description-work__author"><a className="description-work__link" href="#">Екатерина Александровна
                                        Преображенская</a></p>
                                <p className="description-work__size">Картина, 80x60 см.</p>
                                <div className="price-and-icon">
                                    <div className="price-section">
                                        <p className="price">927 750 <span className="ruble">₽</span></p>
                                        <span className="old-price">727 750</span>
                                    </div>
                                    <ul className="icon-list">
                                        <li className="icon-list__heart">
                                            <svg className="svg-heart" viewBox="0 0 21.6 19.1"><path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path></svg>
                                        </li>
                                        <li className="icon-list__basket">
                                            <svg className="svg-basket" viewBox="0 0 17.1 21.3" ><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid__item js-grid__item">
                            <div className="photo-works">
                                <img className="photo" src="/images/photo-works-2.jpg" alt=""/>
                            </div>
                            <div className="description-work">
                                <h4 className="description-work__title"><a className="description-work__link" href="#">Абстракция, Опус J202</a>
                                </h4>
                                <p className="description-work__author"><a className="description-work__link" href="#">Соколов Виталий</a></p>
                                <p className="description-work__size">Картина, 80x60 см.</p>
                                <div className="price-and-icon">
                                    <div className="price-section">
                                        <p className="price">927 750 <span className="ruble">₽</span></p>
                                        <span className="old-price">727 750</span>
                                    </div>
                                    <ul className="icon-list">
                                        <li className="icon-list__heart">
                                            <svg className="svg-heart" viewBox="0 0 21.6 19.1"><path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path></svg>
                                        </li>
                                        <li className="icon-list__basket">
                                            <svg className="svg-basket" viewBox="0 0 17.1 21.3" ><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid__item js-grid__item">
                            <div className="photo-works">
                                <img className="photo" src="/images/photo-works-3.jpg" alt=""/>
                            </div>
                            <div className="description-work">
                                <span className="attraction-new">Новинка</span>
                                <h4 className="description-work__title"><a className="description-work__link" href="#">Распоряжения о структуре
                                        тут длинное название картины</a></h4>
                                <p className="description-work__author"><a className="description-work__link" href="#">Екатерина Александровна
                                        Преображенская</a></p>
                                <p className="description-work__size">Картина, 80x60 см.</p>
                                <div className="price-and-icon">
                                    <div className="price-section">
                                        <p className="price">927 750 <span className="ruble">₽</span></p>
                                        <span className="old-price">727 750</span>
                                    </div>
                                    <ul className="icon-list">
                                        <li className="icon-list__heart">
                                            <svg className="svg-heart" viewBox="0 0 21.6 19.1"><path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path></svg>
                                        </li>
                                        <li className="icon-list__basket">
                                            <svg className="svg-basket" viewBox="0 0 17.1 21.3" ><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid__item js-grid__item">
                            <div className="photo-works">
                                <img className="photo" src="/images/photo-works-7.jpg" alt=""/>
                            </div>
                            <div className="description-work">
                                <span className="attraction-discount">Скидка 20%</span>
                                <h4 className="description-work__title"><a className="description-work__link" href="#">Растущее действие</a>
                                </h4>
                                <p className="description-work__author"><a className="description-work__link" href="#">Рамина Роуз</a></p>
                                <p className="description-work__size">Картина, 80x60 см.</p>
                                <div className="price-and-icon">
                                    <div className="price-section">
                                        <p className="price">27 750 <span className="ruble">₽</span></p>
                                    </div>
                                    <ul className="icon-list">
                                        <li className="icon-list__heart">
                                            <svg className="svg-heart" viewBox="0 0 21.6 19.1"><path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path></svg>
                                        </li>
                                        <li className="icon-list__basket">
                                            <svg className="svg-basket" viewBox="0 0 17.1 21.3" ><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        
        </React.Fragment>
    )
}