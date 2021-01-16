import React from "react"
import "./worksCard.scss"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// import Swiper core and required components
import SwiperCore, { Navigation } from 'swiper';
import { WorksItem } from "../worksItem/WorksItem";
// install Swiper components
SwiperCore.use([Navigation]);

const WORKSCARD_DATA = {
    mainTitle: "Похожие работы",
    cards: [
        {
            pictureURL: "/images/photo-works-1.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-2.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-3.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-4.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-5.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-6.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-7.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-8.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        {
            pictureURL: "/images/photo-works-9.jpg",
            tag: "Новинка",
            title: "Распоряжения о структуре тут длинное название картины",
            cardURL: "/productCard",
            author: "Екатерина Александровна Преображенская",
            authorURL: "",
            size: "Картина, 80x60 см.",
            price: 927750,
            oldPrice: 727750,
            favorite: false,
            basket: false
        },
        
    ]
}

export const WorksCard = () => {
    return(
        <React.Fragment>
        <div className="works-section works-section_card">
            <div className="section-header">
                <h2 className="section-title">{!!WORKSCARD_DATA.mainTitle ? WORKSCARD_DATA.mainTitle : undefined}</h2>
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
                    {WORKSCARD_DATA.cards ? WORKSCARD_DATA.cards.map((item, key) => (
                        <SwiperSlide key={item.name + key}>
                            <WorksItem data={item} />
                        </SwiperSlide>
                    )) : undefined}
                </Swiper>
            </div>
        </div>
        
        </React.Fragment>
    )
}