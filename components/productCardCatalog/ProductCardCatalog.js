import React, { useState } from "react"
import "./productCardCatalog.scss"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Thumbs, Navigation, Controller } from 'swiper';
// install Swiper components
SwiperCore.use([Thumbs, Navigation, Controller]);


export const ProductCardCatalog = () => {


    const [swiperProduct, setSwiperProduct] = useState(null);
    const [swiperPopup, setSwiperPopup] = useState(null);

    return(
        <React.Fragment>
        <div className="product-card">
            <div className="bread-crumb">
                <div className="centering">
                    <Link href="/catalog"><a className="bread-crumb__link"><span
                            className="bread-crumb__elem bread-crumb__back">Назад</span></a></Link>
                    <Link href="/"><a className="bread-crumb__link"><span className="bread-crumb__elem">Главная</span></a></Link>
                    <Link href="/catalog"><a className="bread-crumb__link"><span className="bread-crumb__elem">Каталог</span></a></Link>
                    <span className="bread-crumb__elem bread-crumb__last">Название картины</span>
                </div>
            </div>
            <div className="product-card__main">
                <div className="centering">
                    <h1 className="title-mobile">Распоряжение о структуре очень длинное название картины</h1>
                    <div className="author-mobile">
                        <a className="author-mobile__elem" href="#">Диана Миллер</a>
                    </div>
                    <div className="photo-section">
                        <div className="photo-section__sliders">
                            <Swiper className="swiper-container-one"
                                spaceBetween={10}
                                slidesPerView={6}
                                direction={"vertical"}
                                onSwiper={setSwiperProduct}
                                watchSlidesVisibility
                                watchSlidesProgress
                                
                                breakpoints={{
                                    320: {
                                    spaceBetween: 15,
                                    slidesPerView: 2,
                                    direction: "horizontal",
                                    },
                                    768: {
                                    spaceBetween: 14,
                                    slidesPerView: 3.5,
                                    },
                                    1280: {
                                    spaceBetween: 10,
                                    slidesPerView: 4,
                                    },
                                }}
                            >                   
                                <SwiperSlide><img className="photo-section__elem" src="/images/product-1.jpg" alt=""/></SwiperSlide>
                                <SwiperSlide><img className="photo-section__elem" src="/images/styles-photo-4.jpg" alt=""/></SwiperSlide>
                                <SwiperSlide><img className="photo-section__elem" src="/images/styles-photo-3.jpg" alt=""/></SwiperSlide>
                            </Swiper>
                            <Swiper className="swiper-container-two"
                                spaceBetween={2}
                                loop
                                navigation
                                autoHeight
                                thumbs={{ swiper: swiperProduct}}
                                watchSlidesVisibility
                                watchSlidesProgress
                            >
                                <SwiperSlide><img className="photo-section__elem" src="/images/product-1.jpg" alt=""/></SwiperSlide>
                                <SwiperSlide><img className="photo-section__elem" src="/images/styles-photo-4.jpg" alt=""/></SwiperSlide>
                                <SwiperSlide><img className="photo-section__elem" src="/images/styles-photo-3.jpg" alt=""/></SwiperSlide>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-product">
                                    <div className="swiper-button_prev">
                                        <svg className="svg-arrow" viewBox="0 0 12 4">
                                                <path d="M0 1.24L11.36 1.24L11.36 1.89L0 1.89L0 1.24Z" />
                                                <path d="M9.41 3.15L10.07 3.15L10.07 2.84L10.4 2.84L10.4 2.53L10.73 2.53L10.73 2.22L11.05 2.22L11.05 0.94L10.73 0.94L10.73 0.62L10.4 0.62L10.4 0.31L10.07 0.31L10.07 0L9.41 0L9.41 0.31L9.41 0.62L9.73 0.62L9.73 0.94L10.08 0.94L10.08 2.22L9.73 2.22L9.73 2.53L9.41 2.53L9.41 2.84L9.41 3.15Z" />
                                        </svg>
                                    </div>
                                    <div className="swiper-button_next">
                                        <svg className="svg-arrow" viewBox="0 0 12 4">
                                            <path d="M0 1.24L11.36 1.24L11.36 1.89L0 1.89L0 1.24Z" />
                                            <path d="M9.41 3.15L10.07 3.15L10.07 2.84L10.4 2.84L10.4 2.53L10.73 2.53L10.73 2.22L11.05 2.22L11.05 0.94L10.73 0.94L10.73 0.62L10.4 0.62L10.4 0.31L10.07 0.31L10.07 0L9.41 0L9.41 0.31L9.41 0.62L9.73 0.62L9.73 0.94L10.08 0.94L10.08 2.22L9.73 2.22L9.73 2.53L9.41 2.53L9.41 2.84L9.41 3.15Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="increase-button">
                                    <div className="increase-button__down">
                                        <svg className="svg-increase_down" viewBox="0 0 1 1" width="1" height="1">
                                            <path id="Layer" className="shp0" d="M0.2 0.63L0.74 0.08L0.66 0L0.11 0.54L0.11 0.34L0 0.34L0 0.63L0 0.74L0.11 0.74L0.4 0.74L0.4 0.63L0.2 0.63Z" />
                                    </svg>
                                    </div>
                                    <div className="increase-button__up">
                                        <svg className="svg-increase_up" viewBox="0 0 1 1" width="1" height="1">
                                            <path id="Layer" className="shp0" d="M0.2 0.63L0.74 0.08L0.66 0L0.11 0.54L0.11 0.34L0 0.34L0 0.63L0 0.74L0.11 0.74L0.4 0.74L0.4 0.63L0.2 0.63Z" />
                                    </svg>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                        <div className="under-photo">
                            <span className="under-photo__like">
                                <svg className="svg-like" viewBox="0 0 100 96">
                                    <path d="M36.19 95.46L8.04 95.46C7.47 95.47 6.91 95.42 6.35 95.31C5.8 95.2 5.26 95.03 4.74 94.8C4.22 94.57 3.73 94.28 3.28 93.94C2.82 93.61 2.41 93.22 2.04 92.79C1.91 92.64 1.79 92.48 1.68 92.32C1.56 92.16 1.45 91.99 1.34 91.83C1.23 91.66 1.13 91.49 1.03 91.32C0.93 91.14 0.84 90.97 0.75 90.79C0.66 90.61 0.58 90.44 0.5 90.31L0 89.43L0 46.43L0.25 45.73L0.36 45.48C0.46 45.24 0.57 44.96 0.71 44.67C1.05 43.91 1.51 43.21 2.06 42.59C2.61 41.97 3.25 41.44 3.96 41.01C4.67 40.57 5.44 40.25 6.24 40.05C7.05 39.85 7.88 39.77 8.71 39.82L36.89 39.82L36.8 43.7C36.72 45.88 36.72 49.09 36.72 49.6C36.64 56.76 36.64 63.82 36.64 69.17C36.64 75.58 36.64 82.21 36.72 88.74C36.72 88.84 36.72 89.05 36.72 89.34C36.72 89.89 36.72 94 36.72 94.93C36.71 94.95 36.7 94.97 36.69 94.99C36.68 95.02 36.67 95.04 36.66 95.06C36.65 95.08 36.64 95.1 36.63 95.12C36.63 95.15 36.62 95.17 36.61 95.19L36.49 95.32L36.35 95.45L36.19 95.46ZM29.08 47.42L8.61 47.42C7.75 47.42 7.68 47.57 7.53 47.89L7.53 87.53C7.61 87.69 7.7 87.85 7.76 87.94C12.94 87.94 23.78 87.94 29.07 87.94C29 81.66 29 75.31 29 69.17C29 63.82 29 56.77 29.08 49.6C29.08 49.42 29.08 49.18 29.08 49.04C29.08 48.66 29.08 48.03 29.08 47.42Z" />
                                    <path d="M40.67 92.67C39.86 92.68 39.06 92.63 38.26 92.53C37.46 92.42 36.67 92.26 35.9 92.04C35.12 91.82 34.36 91.54 33.63 91.21C32.89 90.88 32.18 90.5 31.5 90.07L29.72 88.94L29.72 86.83C29.79 76.83 29.82 65.99 29.82 52.61C29.82 49.6 29.82 46.6 29.82 43.61L29.82 42.1L30.82 41.01L32 39.48C32.3 39.12 32.59 38.76 32.88 38.4C33.17 38.03 33.46 37.66 33.74 37.29C34.01 36.92 34.29 36.54 34.55 36.16C34.82 35.77 35.08 35.39 35.34 35C37.22 32 39.04 28.8 40.8 25.74C41.54 24.46 42.3 23.13 43.06 21.82C43.1 21.75 43.14 21.67 43.18 21.59C43.21 21.51 43.23 21.42 43.25 21.34C43.27 21.25 43.29 21.17 43.29 21.08C43.3 20.99 43.3 20.91 43.29 20.82C43.2 18.69 43.16 16.54 43.12 14.47C43.12 13.25 43.12 11.98 43.04 10.74C43 9.86 43.09 8.98 43.3 8.12C43.52 7.27 43.86 6.45 44.31 5.69C44.77 4.93 45.33 4.25 45.98 3.65C46.64 3.06 47.37 2.57 48.17 2.19C49.15 1.67 50.18 1.26 51.25 0.97C52.32 0.69 53.42 0.52 54.53 0.48C55.64 0.44 56.75 0.53 57.84 0.74C58.93 0.95 59.99 1.29 61 1.74C61.64 2 62.25 2.33 62.82 2.72C63.39 3.12 63.91 3.57 64.39 4.07C64.86 4.57 65.28 5.12 65.64 5.71C66 6.3 66.29 6.93 66.52 7.58L67.45 10C68.29 12.2 69.15 14.47 69.94 16.75C70.26 17.74 70.51 18.75 70.69 19.78C70.87 20.8 70.99 21.84 71.03 22.88C71.07 23.92 71.05 24.96 70.95 26C70.86 27.04 70.69 28.07 70.46 29.08C70.19 30.46 69.96 31.84 69.72 33.27C74.84 33.27 82.36 33.27 87.58 33.27C88.02 33.27 88.46 33.28 88.89 33.32C89.33 33.35 89.77 33.4 90.2 33.47C90.63 33.54 91.06 33.63 91.49 33.73C91.91 33.84 92.33 33.96 92.75 34.1C93.61 34.4 94.43 34.82 95.18 35.33C95.94 35.85 96.62 36.46 97.22 37.14C97.82 37.83 98.33 38.6 98.73 39.42C99.13 40.24 99.43 41.1 99.61 42C99.61 42.1 99.68 42.26 99.74 42.42L99.84 42.73L100 43.31L100 47.85L99.6 48.38C99.5 48.79 99.39 49.19 99.26 49.59C99.12 49.99 98.97 50.38 98.81 50.76C98.64 51.15 98.45 51.53 98.25 51.89C98.05 52.26 97.83 52.62 97.6 52.97C97.67 53.21 97.73 53.46 97.79 53.71C97.85 53.96 97.9 54.21 97.94 54.46C97.98 54.71 98.02 54.96 98.05 55.21C98.07 55.46 98.1 55.72 98.11 55.97C98.13 56.67 98.09 57.37 97.99 58.06C97.9 58.75 97.75 59.43 97.55 60.1C97.35 60.77 97.1 61.42 96.79 62.05C96.49 62.67 96.14 63.28 95.74 63.85C95.8 64.05 95.85 64.26 95.9 64.47C95.95 64.67 95.99 64.88 96.03 65.09C96.07 65.3 96.1 65.51 96.13 65.72C96.15 65.93 96.17 66.14 96.19 66.35C96.23 67.1 96.21 67.85 96.13 68.6C96.05 69.35 95.91 70.09 95.71 70.81C95.51 71.53 95.26 72.24 94.95 72.93C94.63 73.61 94.27 74.27 93.85 74.89C93.93 75.28 94 75.67 94.05 76.06C94.1 76.45 94.14 76.85 94.16 77.24C94.18 77.63 94.19 78.03 94.19 78.43C94.18 78.82 94.16 79.22 94.12 79.61C94.04 80.97 93.75 82.31 93.26 83.58C92.77 84.85 92.1 86.04 91.25 87.1C90.41 88.17 89.4 89.1 88.28 89.87C87.15 90.63 85.91 91.22 84.61 91.61C84.01 91.79 83.41 91.95 82.79 92.08C82.18 92.22 81.57 92.32 80.95 92.41C80.32 92.49 79.7 92.55 79.08 92.58C78.45 92.62 77.83 92.63 77.2 92.61C68.43 92.61 49.69 92.61 40.78 92.61L40.67 92.61L40.67 92.67ZM37.33 84.54C37.6 84.64 37.88 84.72 38.16 84.79C38.44 84.86 38.72 84.92 39.01 84.97C39.3 85.02 39.58 85.05 39.87 85.07C40.16 85.09 40.45 85.1 40.74 85.09C49.67 85.04 58.74 85.09 67.53 85.09L77.19 85.09C77.62 85.11 78.04 85.1 78.47 85.09C78.89 85.07 79.32 85.03 79.74 84.98C80.16 84.93 80.58 84.86 81 84.78C81.42 84.7 81.83 84.6 82.24 84.48C82.83 84.32 83.4 84.07 83.91 83.73C84.43 83.4 84.89 82.98 85.27 82.5C85.65 82.02 85.96 81.48 86.18 80.91C86.39 80.33 86.51 79.72 86.54 79.11C86.57 78.85 86.59 78.58 86.6 78.32C86.6 78.06 86.59 77.79 86.56 77.53C86.54 77.27 86.5 77 86.44 76.75C86.39 76.49 86.32 76.23 86.24 75.98C86.11 75.61 86.03 75.22 86 74.83C85.97 74.44 85.99 74.04 86.05 73.65C86.12 73.27 86.23 72.89 86.39 72.53C86.55 72.17 86.76 71.83 87 71.52C87.27 71.2 87.51 70.85 87.72 70.49C87.93 70.12 88.11 69.73 88.24 69.34C88.38 68.94 88.48 68.53 88.55 68.11C88.61 67.69 88.63 67.27 88.62 66.85C88.6 66.69 88.57 66.54 88.54 66.38C88.5 66.22 88.47 66.07 88.43 65.91C88.39 65.76 88.34 65.6 88.3 65.45C88.25 65.3 88.2 65.15 88.14 65C88.01 64.61 87.92 64.2 87.89 63.78C87.86 63.37 87.88 62.95 87.96 62.54C88.03 62.13 88.16 61.73 88.34 61.35C88.51 60.97 88.73 60.62 89 60.3C89.25 60.02 89.47 59.72 89.66 59.4C89.85 59.09 90.01 58.75 90.14 58.41C90.28 58.06 90.38 57.7 90.45 57.34C90.51 56.97 90.55 56.6 90.55 56.23C90.54 56.11 90.52 55.99 90.5 55.87C90.48 55.74 90.46 55.62 90.44 55.5C90.41 55.38 90.39 55.26 90.36 55.14C90.33 55.03 90.29 54.91 90.26 54.79C90.15 54.36 90.03 53.88 89.93 53.36C89.84 53.01 89.8 52.64 89.8 52.28C89.8 51.91 89.85 51.55 89.93 51.2C90.02 50.84 90.15 50.5 90.32 50.18C90.48 49.86 90.69 49.55 90.93 49.28C91.12 49.05 91.3 48.8 91.46 48.54C91.61 48.28 91.75 48.02 91.87 47.74C91.99 47.46 92.1 47.18 92.18 46.89C92.26 46.6 92.32 46.3 92.36 46L92.36 44.46C92.31 44.29 92.26 44.11 92.21 43.91C91.74 42.07 90.92 41.55 90.21 41.29C89.99 41.22 89.77 41.16 89.55 41.11C89.32 41.06 89.1 41.01 88.87 40.98C88.64 40.95 88.42 40.92 88.19 40.91C87.96 40.89 87.73 40.89 87.5 40.89C82.32 40.89 77.04 40.89 71.93 40.89L66.22 40.89C65.53 40.96 64.83 40.87 64.19 40.61C63.55 40.36 62.98 39.94 62.53 39.42C62.08 38.89 61.77 38.26 61.62 37.58C61.47 36.9 61.49 36.2 61.68 35.53C61.82 34.68 61.96 33.83 62.1 32.98C62.38 31.24 62.67 29.44 63.02 27.65C63.19 26.96 63.31 26.26 63.38 25.56C63.46 24.85 63.48 24.14 63.46 23.43C63.44 22.72 63.37 22.02 63.26 21.32C63.14 20.62 62.98 19.93 62.77 19.25C62.03 17.08 61.18 14.87 60.37 12.74L59.43 10.27C59.38 10.1 59.32 9.94 59.23 9.78C59.15 9.63 59.05 9.48 58.93 9.35C58.81 9.22 58.68 9.1 58.53 9C58.39 8.9 58.23 8.82 58.07 8.75C57.57 8.51 57.05 8.33 56.51 8.21C55.97 8.1 55.41 8.04 54.86 8.06C54.31 8.07 53.76 8.15 53.23 8.29C52.69 8.43 52.18 8.64 51.69 8.9C51.52 8.95 51.36 9.03 51.22 9.14C51.08 9.24 50.96 9.37 50.87 9.52C50.77 9.67 50.7 9.83 50.66 10C50.61 10.17 50.6 10.35 50.62 10.52C50.62 11.79 50.68 13.07 50.7 14.3C50.7 16.3 50.78 18.44 50.87 20.49C50.89 20.94 50.88 21.38 50.84 21.83C50.8 22.27 50.72 22.72 50.62 23.15C50.51 23.59 50.38 24.01 50.21 24.43C50.04 24.84 49.84 25.24 49.62 25.63C48.87 26.92 48.11 28.24 47.38 29.51C45.59 32.63 43.73 35.86 41.79 38.99C41.5 39.44 41.2 39.89 40.89 40.34C40.58 40.79 40.27 41.23 39.95 41.66C39.63 42.1 39.3 42.53 38.97 42.96C38.64 43.38 38.3 43.8 37.95 44.22L37.4 44.9C37.4 47.47 37.4 50.05 37.4 52.62C37.41 65 37.39 75.19 37.33 84.54Z" />
                                </svg>
                                Понравилось<br className="desktop-hidden"/>(<span className="under-photo__count">456</span>)</span>
                            <span className="under-photo__copy"><a className="under-photo__link" download href="/images/news-photo-1.jpg">
                                <svg className="svg-download" viewBox="0 0 2 2">
                                        <path d="M0.97 0.95L0.97 0L0.8 0L0.8 0.95L0.58 0.73L0.46 0.85L0.89 1.28L1.01 1.16L1.32 0.85L1.2 0.73L0.98 0.95L0.97 0.95ZM1.73 1.8L1.73 1.39L1.56 1.39L1.56 1.63L0.18 1.63L0.18 1.39L0.01 1.39L0.01 1.8L1.73 1.8Z" />
                                </svg>
                                Цифровая <br className="desktop-hidden"/>копия</a></span>
                            <span className="under-photo__not-show">
                                <svg className="svg-show" viewBox="0 0 512 328">
                                    <path d="M508.74 173.96C504.17 180.21 395.19 327.16 256 327.16C116.81 327.16 7.82 180.21 3.25 173.96C-1.08 168.02 -1.08 159.97 3.25 154.03C7.82 147.78 116.81 0.83 256 0.83C395.19 0.83 504.17 147.78 508.74 154.04C513.08 159.97 513.08 168.03 508.74 173.96ZM473.61 164.01C447.32 132.11 358.52 34.59 256 34.59C153.25 34.59 64.63 132.07 38.38 163.99C64.67 195.87 153.47 293.41 256 293.41C358.75 293.41 447.36 195.92 473.61 164.01Z" />
                                    <path d="M357.27 164C357.27 219.84 311.84 265.27 256 265.27C200.15 265.27 154.72 219.84 154.72 164C154.72 108.16 200.15 62.72 256 62.72C311.84 62.72 357.27 108.16 357.27 164ZM323.51 164C323.51 126.77 293.23 96.48 256 96.48C218.77 96.48 188.48 126.77 188.48 164C188.48 201.23 218.77 231.52 256 231.52C293.23 231.52 323.51 201.23 323.51 164Z" />
                        </svg>
                                Больше не показывать <br className="desktop-hidden"/>картину</span>
                        </div>
                    </div>
                    <div className="text-section">
                        <h1 className="text-section__title">Распоряжение о структуре очень длинное название картины</h1>
                        <div className="artile-and-favorites">
                            <span className="article">Арт. HWV-133423</span>
                            <span className="favorites">
                                <svg className="svg-heart" viewBox="0 0 21.6 19.1">
                                    <path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path>
                                </svg>
                                <span className="favorites-active">В избранное</span></span>
                        </div>
                        <div className="author">
                            <a className="author__elem" href="#">Диана Миллер</a>
                        </div>
                        <div className="size-and-style">
                            <span className="size-picture">Размер картины: <span className="size-picture__inner">100 x 120 x 4
                                    см</span></span>
                            <span className="style-picture">Стиль: <a className="style-picture__link" href="#">Пейзаж</a></span>
                        </div>
                        <div className="price-and-basket">
                            <div className="price">
                                <span className="price__real">927 750 <span className="ruble">₽</span></span>
                                <span className="price__old">727 750</span>
                            </div>
                            <div className="basket">
                                <div className="basket__inner">
                                    <button className="basket__button">Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-mobile">
                            <div className="buttons-mobile_one">
                                <span className="like-button button-mobile">
                                    <svg className="svg-like" viewBox="0 0 100 96">
                                        <path d="M36.19 95.46L8.04 95.46C7.47 95.47 6.91 95.42 6.35 95.31C5.8 95.2 5.26 95.03 4.74 94.8C4.22 94.57 3.73 94.28 3.28 93.94C2.82 93.61 2.41 93.22 2.04 92.79C1.91 92.64 1.79 92.48 1.68 92.32C1.56 92.16 1.45 91.99 1.34 91.83C1.23 91.66 1.13 91.49 1.03 91.32C0.93 91.14 0.84 90.97 0.75 90.79C0.66 90.61 0.58 90.44 0.5 90.31L0 89.43L0 46.43L0.25 45.73L0.36 45.48C0.46 45.24 0.57 44.96 0.71 44.67C1.05 43.91 1.51 43.21 2.06 42.59C2.61 41.97 3.25 41.44 3.96 41.01C4.67 40.57 5.44 40.25 6.24 40.05C7.05 39.85 7.88 39.77 8.71 39.82L36.89 39.82L36.8 43.7C36.72 45.88 36.72 49.09 36.72 49.6C36.64 56.76 36.64 63.82 36.64 69.17C36.64 75.58 36.64 82.21 36.72 88.74C36.72 88.84 36.72 89.05 36.72 89.34C36.72 89.89 36.72 94 36.72 94.93C36.71 94.95 36.7 94.97 36.69 94.99C36.68 95.02 36.67 95.04 36.66 95.06C36.65 95.08 36.64 95.1 36.63 95.12C36.63 95.15 36.62 95.17 36.61 95.19L36.49 95.32L36.35 95.45L36.19 95.46ZM29.08 47.42L8.61 47.42C7.75 47.42 7.68 47.57 7.53 47.89L7.53 87.53C7.61 87.69 7.7 87.85 7.76 87.94C12.94 87.94 23.78 87.94 29.07 87.94C29 81.66 29 75.31 29 69.17C29 63.82 29 56.77 29.08 49.6C29.08 49.42 29.08 49.18 29.08 49.04C29.08 48.66 29.08 48.03 29.08 47.42Z" />
                                        <path d="M40.67 92.67C39.86 92.68 39.06 92.63 38.26 92.53C37.46 92.42 36.67 92.26 35.9 92.04C35.12 91.82 34.36 91.54 33.63 91.21C32.89 90.88 32.18 90.5 31.5 90.07L29.72 88.94L29.72 86.83C29.79 76.83 29.82 65.99 29.82 52.61C29.82 49.6 29.82 46.6 29.82 43.61L29.82 42.1L30.82 41.01L32 39.48C32.3 39.12 32.59 38.76 32.88 38.4C33.17 38.03 33.46 37.66 33.74 37.29C34.01 36.92 34.29 36.54 34.55 36.16C34.82 35.77 35.08 35.39 35.34 35C37.22 32 39.04 28.8 40.8 25.74C41.54 24.46 42.3 23.13 43.06 21.82C43.1 21.75 43.14 21.67 43.18 21.59C43.21 21.51 43.23 21.42 43.25 21.34C43.27 21.25 43.29 21.17 43.29 21.08C43.3 20.99 43.3 20.91 43.29 20.82C43.2 18.69 43.16 16.54 43.12 14.47C43.12 13.25 43.12 11.98 43.04 10.74C43 9.86 43.09 8.98 43.3 8.12C43.52 7.27 43.86 6.45 44.31 5.69C44.77 4.93 45.33 4.25 45.98 3.65C46.64 3.06 47.37 2.57 48.17 2.19C49.15 1.67 50.18 1.26 51.25 0.97C52.32 0.69 53.42 0.52 54.53 0.48C55.64 0.44 56.75 0.53 57.84 0.74C58.93 0.95 59.99 1.29 61 1.74C61.64 2 62.25 2.33 62.82 2.72C63.39 3.12 63.91 3.57 64.39 4.07C64.86 4.57 65.28 5.12 65.64 5.71C66 6.3 66.29 6.93 66.52 7.58L67.45 10C68.29 12.2 69.15 14.47 69.94 16.75C70.26 17.74 70.51 18.75 70.69 19.78C70.87 20.8 70.99 21.84 71.03 22.88C71.07 23.92 71.05 24.96 70.95 26C70.86 27.04 70.69 28.07 70.46 29.08C70.19 30.46 69.96 31.84 69.72 33.27C74.84 33.27 82.36 33.27 87.58 33.27C88.02 33.27 88.46 33.28 88.89 33.32C89.33 33.35 89.77 33.4 90.2 33.47C90.63 33.54 91.06 33.63 91.49 33.73C91.91 33.84 92.33 33.96 92.75 34.1C93.61 34.4 94.43 34.82 95.18 35.33C95.94 35.85 96.62 36.46 97.22 37.14C97.82 37.83 98.33 38.6 98.73 39.42C99.13 40.24 99.43 41.1 99.61 42C99.61 42.1 99.68 42.26 99.74 42.42L99.84 42.73L100 43.31L100 47.85L99.6 48.38C99.5 48.79 99.39 49.19 99.26 49.59C99.12 49.99 98.97 50.38 98.81 50.76C98.64 51.15 98.45 51.53 98.25 51.89C98.05 52.26 97.83 52.62 97.6 52.97C97.67 53.21 97.73 53.46 97.79 53.71C97.85 53.96 97.9 54.21 97.94 54.46C97.98 54.71 98.02 54.96 98.05 55.21C98.07 55.46 98.1 55.72 98.11 55.97C98.13 56.67 98.09 57.37 97.99 58.06C97.9 58.75 97.75 59.43 97.55 60.1C97.35 60.77 97.1 61.42 96.79 62.05C96.49 62.67 96.14 63.28 95.74 63.85C95.8 64.05 95.85 64.26 95.9 64.47C95.95 64.67 95.99 64.88 96.03 65.09C96.07 65.3 96.1 65.51 96.13 65.72C96.15 65.93 96.17 66.14 96.19 66.35C96.23 67.1 96.21 67.85 96.13 68.6C96.05 69.35 95.91 70.09 95.71 70.81C95.51 71.53 95.26 72.24 94.95 72.93C94.63 73.61 94.27 74.27 93.85 74.89C93.93 75.28 94 75.67 94.05 76.06C94.1 76.45 94.14 76.85 94.16 77.24C94.18 77.63 94.19 78.03 94.19 78.43C94.18 78.82 94.16 79.22 94.12 79.61C94.04 80.97 93.75 82.31 93.26 83.58C92.77 84.85 92.1 86.04 91.25 87.1C90.41 88.17 89.4 89.1 88.28 89.87C87.15 90.63 85.91 91.22 84.61 91.61C84.01 91.79 83.41 91.95 82.79 92.08C82.18 92.22 81.57 92.32 80.95 92.41C80.32 92.49 79.7 92.55 79.08 92.58C78.45 92.62 77.83 92.63 77.2 92.61C68.43 92.61 49.69 92.61 40.78 92.61L40.67 92.61L40.67 92.67ZM37.33 84.54C37.6 84.64 37.88 84.72 38.16 84.79C38.44 84.86 38.72 84.92 39.01 84.97C39.3 85.02 39.58 85.05 39.87 85.07C40.16 85.09 40.45 85.1 40.74 85.09C49.67 85.04 58.74 85.09 67.53 85.09L77.19 85.09C77.62 85.11 78.04 85.1 78.47 85.09C78.89 85.07 79.32 85.03 79.74 84.98C80.16 84.93 80.58 84.86 81 84.78C81.42 84.7 81.83 84.6 82.24 84.48C82.83 84.32 83.4 84.07 83.91 83.73C84.43 83.4 84.89 82.98 85.27 82.5C85.65 82.02 85.96 81.48 86.18 80.91C86.39 80.33 86.51 79.72 86.54 79.11C86.57 78.85 86.59 78.58 86.6 78.32C86.6 78.06 86.59 77.79 86.56 77.53C86.54 77.27 86.5 77 86.44 76.75C86.39 76.49 86.32 76.23 86.24 75.98C86.11 75.61 86.03 75.22 86 74.83C85.97 74.44 85.99 74.04 86.05 73.65C86.12 73.27 86.23 72.89 86.39 72.53C86.55 72.17 86.76 71.83 87 71.52C87.27 71.2 87.51 70.85 87.72 70.49C87.93 70.12 88.11 69.73 88.24 69.34C88.38 68.94 88.48 68.53 88.55 68.11C88.61 67.69 88.63 67.27 88.62 66.85C88.6 66.69 88.57 66.54 88.54 66.38C88.5 66.22 88.47 66.07 88.43 65.91C88.39 65.76 88.34 65.6 88.3 65.45C88.25 65.3 88.2 65.15 88.14 65C88.01 64.61 87.92 64.2 87.89 63.78C87.86 63.37 87.88 62.95 87.96 62.54C88.03 62.13 88.16 61.73 88.34 61.35C88.51 60.97 88.73 60.62 89 60.3C89.25 60.02 89.47 59.72 89.66 59.4C89.85 59.09 90.01 58.75 90.14 58.41C90.28 58.06 90.38 57.7 90.45 57.34C90.51 56.97 90.55 56.6 90.55 56.23C90.54 56.11 90.52 55.99 90.5 55.87C90.48 55.74 90.46 55.62 90.44 55.5C90.41 55.38 90.39 55.26 90.36 55.14C90.33 55.03 90.29 54.91 90.26 54.79C90.15 54.36 90.03 53.88 89.93 53.36C89.84 53.01 89.8 52.64 89.8 52.28C89.8 51.91 89.85 51.55 89.93 51.2C90.02 50.84 90.15 50.5 90.32 50.18C90.48 49.86 90.69 49.55 90.93 49.28C91.12 49.05 91.3 48.8 91.46 48.54C91.61 48.28 91.75 48.02 91.87 47.74C91.99 47.46 92.1 47.18 92.18 46.89C92.26 46.6 92.32 46.3 92.36 46L92.36 44.46C92.31 44.29 92.26 44.11 92.21 43.91C91.74 42.07 90.92 41.55 90.21 41.29C89.99 41.22 89.77 41.16 89.55 41.11C89.32 41.06 89.1 41.01 88.87 40.98C88.64 40.95 88.42 40.92 88.19 40.91C87.96 40.89 87.73 40.89 87.5 40.89C82.32 40.89 77.04 40.89 71.93 40.89L66.22 40.89C65.53 40.96 64.83 40.87 64.19 40.61C63.55 40.36 62.98 39.94 62.53 39.42C62.08 38.89 61.77 38.26 61.62 37.58C61.47 36.9 61.49 36.2 61.68 35.53C61.82 34.68 61.96 33.83 62.1 32.98C62.38 31.24 62.67 29.44 63.02 27.65C63.19 26.96 63.31 26.26 63.38 25.56C63.46 24.85 63.48 24.14 63.46 23.43C63.44 22.72 63.37 22.02 63.26 21.32C63.14 20.62 62.98 19.93 62.77 19.25C62.03 17.08 61.18 14.87 60.37 12.74L59.43 10.27C59.38 10.1 59.32 9.94 59.23 9.78C59.15 9.63 59.05 9.48 58.93 9.35C58.81 9.22 58.68 9.1 58.53 9C58.39 8.9 58.23 8.82 58.07 8.75C57.57 8.51 57.05 8.33 56.51 8.21C55.97 8.1 55.41 8.04 54.86 8.06C54.31 8.07 53.76 8.15 53.23 8.29C52.69 8.43 52.18 8.64 51.69 8.9C51.52 8.95 51.36 9.03 51.22 9.14C51.08 9.24 50.96 9.37 50.87 9.52C50.77 9.67 50.7 9.83 50.66 10C50.61 10.17 50.6 10.35 50.62 10.52C50.62 11.79 50.68 13.07 50.7 14.3C50.7 16.3 50.78 18.44 50.87 20.49C50.89 20.94 50.88 21.38 50.84 21.83C50.8 22.27 50.72 22.72 50.62 23.15C50.51 23.59 50.38 24.01 50.21 24.43C50.04 24.84 49.84 25.24 49.62 25.63C48.87 26.92 48.11 28.24 47.38 29.51C45.59 32.63 43.73 35.86 41.79 38.99C41.5 39.44 41.2 39.89 40.89 40.34C40.58 40.79 40.27 41.23 39.95 41.66C39.63 42.1 39.3 42.53 38.97 42.96C38.64 43.38 38.3 43.8 37.95 44.22L37.4 44.9C37.4 47.47 37.4 50.05 37.4 52.62C37.41 65 37.39 75.19 37.33 84.54Z" />
                                    </svg>
                                    Понравилось</span>
                                <span className="favourites-button button-mobile">
                                    <svg className="svg-heart" viewBox="0 0 21.6 19.1">
                                        <path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path>
                                    </svg>
                                    В избранное</span>
                            </div>
                            <div className="buttons-mobile_two">
                                <span className="show-button button-mobile">
                                    <svg className="svg-show" viewBox="0 0 512 328">
                                        <path d="M508.74 173.96C504.17 180.21 395.19 327.16 256 327.16C116.81 327.16 7.82 180.21 3.25 173.96C-1.08 168.02 -1.08 159.97 3.25 154.03C7.82 147.78 116.81 0.83 256 0.83C395.19 0.83 504.17 147.78 508.74 154.04C513.08 159.97 513.08 168.03 508.74 173.96ZM473.61 164.01C447.32 132.11 358.52 34.59 256 34.59C153.25 34.59 64.63 132.07 38.38 163.99C64.67 195.87 153.47 293.41 256 293.41C358.75 293.41 447.36 195.92 473.61 164.01Z" />
                                        <path d="M357.27 164C357.27 219.84 311.84 265.27 256 265.27C200.15 265.27 154.72 219.84 154.72 164C154.72 108.16 200.15 62.72 256 62.72C311.84 62.72 357.27 108.16 357.27 164ZM323.51 164C323.51 126.77 293.23 96.48 256 96.48C218.77 96.48 188.48 126.77 188.48 164C188.48 201.23 218.77 231.52 256 231.52C293.23 231.52 323.51 201.23 323.51 164Z" />
                            </svg>
                                    Не показывать</span>
                                <span className="download-button button-mobile">
                                    <svg className="svg-download" viewBox="0 0 2 2">
                                        <path d="M0.97 0.95L0.97 0L0.8 0L0.8 0.95L0.58 0.73L0.46 0.85L0.89 1.28L1.01 1.16L1.32 0.85L1.2 0.73L0.98 0.95L0.97 0.95ZM1.73 1.8L1.73 1.39L1.56 1.39L1.56 1.63L0.18 1.63L0.18 1.39L0.01 1.39L0.01 1.8L1.73 1.8Z" />
                                </svg>
                                    Скачать копию</span>
                            </div>
                        </div>
                        <div className="social-network">
                            <ul className="social-list">
                                <li className="social-list__elem"><a className="social-list__link" href="#">
                                        <svg className="svg-vk" viewBox="0 0 511.962 511.962">
                                            <path d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176
                                            c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76
                                            c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664
                                            c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584
                                            c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424
                                            c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72
                                            c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448
                                            c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536
                                            c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44
                                            s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96
                                            C488.583,400.807,524.359,398.599,507.399,370.471z" />
                                        </svg>
                                    </a></li>
                                <li className="social-list__elem"><a className="social-list__link" href="#">
                                        <svg className="svg-facebook" viewBox="0 0 52 96">
                                            <path
                                                d="M50.09 0.02L37.62 0C23.62 0 14.57 9.28 14.57 23.66L14.57 34.56L2.04 34.56C0.95 34.56 0.08 35.44 0.08 36.52L0.08 52.33C0.08 53.41 0.95 54.29 2.04 54.29L14.57 54.29L14.57 94.16C14.57 95.25 15.45 96.12 16.53 96.12L32.88 96.12C33.96 96.12 34.84 95.24 34.84 94.16L34.84 54.29L49.5 54.29C50.58 54.29 51.46 53.41 51.46 52.33L51.46 36.52C51.46 36 51.25 35.51 50.89 35.14C50.52 34.77 50.02 34.56 49.5 34.56L34.84 34.56L34.84 25.32C34.84 20.87 35.9 18.62 41.69 18.62L50.09 18.61C51.17 18.61 52.05 17.74 52.05 16.65L52.05 1.98C52.05 0.9 51.17 0.02 50.09 0.02Z" />
                                        </svg>
                                    </a></li>
                                <li className="social-list__elem"><a className="social-list__link" href="#">
                                        <svg className="svg-ok" viewBox="0 0 95.481 95.481">
                                            <path d="M43.041,67.254c-7.402-0.772-14.076-2.595-19.79-7.064c-0.709-0.556-1.441-1.092-2.088-1.713
                                    c-2.501-2.402-2.753-5.153-0.774-7.988c1.693-2.426,4.535-3.075,7.489-1.682c0.572,0.27,1.117,0.607,1.639,0.969
                                    c10.649,7.317,25.278,7.519,35.967,0.329c1.059-0.812,2.191-1.474,3.503-1.812c2.551-0.655,4.93,0.282,6.299,2.514
                                    c1.564,2.549,1.544,5.037-0.383,7.016c-2.956,3.034-6.511,5.229-10.461,6.761c-3.735,1.448-7.826,2.177-11.875,2.661
                                    c0.611,0.665,0.899,0.992,1.281,1.376c5.498,5.524,11.02,11.025,16.5,16.566c1.867,1.888,2.257,4.229,1.229,6.425
                                    c-1.124,2.4-3.64,3.979-6.107,3.81c-1.563-0.108-2.782-0.886-3.865-1.977c-4.149-4.175-8.376-8.273-12.441-12.527
                                    c-1.183-1.237-1.752-1.003-2.796,0.071c-4.174,4.297-8.416,8.528-12.683,12.735c-1.916,1.889-4.196,2.229-6.418,1.15
                                    c-2.362-1.145-3.865-3.556-3.749-5.979c0.08-1.639,0.886-2.891,2.011-4.014c5.441-5.433,10.867-10.88,16.295-16.322
                                    C42.183,68.197,42.518,67.813,43.041,67.254z" />
                                            <path d="M47.55,48.329c-13.205-0.045-24.033-10.992-23.956-24.218C23.67,10.739,34.505-0.037,47.84,0
                                    c13.362,0.036,24.087,10.967,24.02,24.478C71.792,37.677,60.889,48.375,47.55,48.329z M59.551,24.143
                                    c-0.023-6.567-5.253-11.795-11.807-11.801c-6.609-0.007-11.886,5.316-11.835,11.943c0.049,6.542,5.324,11.733,11.896,11.709
                                    C54.357,35.971,59.573,30.709,59.551,24.143z" />
                                        </svg>
                                    </a></li>
                                <li className="social-list__elem"><a className="social-list__link" href="#">
                                        <svg className="svg-mail" viewBox="0 0 512 512">
                                            <polygon points="339.392,258.624 512,367.744 512,144.896 " />
                                            <polygon points="0,144.896 0,367.744 172.608,258.624" />
                                            <path
                                                d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
                                            <path
                                                d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
                                            L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="parameters-picture">
                            <span className="parameters-picture__button">Параметры картины
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <table className="parameters-table">
                                <tbody>
                                    <tr className="parameters-table__line">
                                        <td className="parameters-table__column parameters-table__column-one">Год написания</td>
                                        <td className="parameters-table__column parameters-table__column-two">2008</td>
                                    </tr>
                                    <tr className="parameters-table__line">
                                        <td className="parameters-table__column parameters-table__column-one">Тема</td>
                                        <td className="parameters-table__column parameters-table__column-two">Океан, Берег, Пляж</td>
                                    </tr>
                                    <tr className="parameters-table__line">
                                        <td className="parameters-table__column parameters-table__column-one">Стиль</td>
                                        <td className="parameters-table__column parameters-table__column-two">Современный пейзаж</td>
                                    </tr>
                                    <tr className="parameters-table__line">
                                        <td className="parameters-table__column parameters-table__column-one">Материалы</td>
                                        <td className="parameters-table__column parameters-table__column-two">Уголь, Чернила, Пастель</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="description-picture">
                            <span className="description-picture__button">Описание картины
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <div className="description-picture__text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla eius doloribus
                                distinctio reprehenderit, rerum suscipit pariatur, iste quo, voluptatum sequi aut similique ad
                                ab. Quasi tempora laboriosam possimus temporibus!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-photo js-popup-photo">
                <span className="popup-photo__close"></span>
                <Swiper
                    loop
                    navigation
                    thumbs={{ swiper: swiperProduct}}
                >
                    <SwiperSlide><img className="photo-section__elem" src="/images/product-1.jpg" alt=""/></SwiperSlide>
                    <SwiperSlide><img className="photo-section__elem" src="/images/styles-photo-4.jpg" alt=""/></SwiperSlide>
                    <SwiperSlide><img className="photo-section__elem" src="/images/styles-photo-3.jpg" alt=""/></SwiperSlide>
                </Swiper>
            </div>
        </div>
        </React.Fragment>
    )
}