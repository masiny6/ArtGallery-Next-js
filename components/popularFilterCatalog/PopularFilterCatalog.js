import React from "react"
import "./popularFilterCatalog.scss"

export const PopularFilterCatalog = () => {
    return(
        <div className="popular-filter">
            <div className="centering">
                <div className="centering-tablet">
                    <div className="popular-filter__header">
                        <h2 className="popular-filter__title">Популярные фильтры</h2>
                        <div className="swiper-button">
                            <div className="swiper-button__prev"></div>
                            <div className="swiper-button__next"></div>
                        </div>
                    </div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="filter-photo">
                                    <img className="filter-photo__inner" src="/images/popular-filter-1.jpg" alt=""/>
                                </div>
                                <span className="filter-text">Барроко</span>
                            </div>
                            <div className="swiper-slide">
                                <div className="filter-photo">
                                    <img className="filter-photo__inner" src="/images/popular-filter-2.jpg" alt=""/>
                                </div>
                                <span className="filter-text">Живопись</span>
                            </div>
                            <div className="swiper-slide">
                                <div className="filter-photo">
                                    <img className="filter-photo__inner" src="/images/popular-filter-3.jpg" alt=""/>
                                </div>
                                <span className="filter-text">Пейзаж</span>
                            </div>
                            <div className="swiper-slide">
                                <div className="filter-photo">
                                    <img className="filter-photo__inner" src="/images/popular-filter-4.jpg" alt=""/>
                                </div>
                                <span className="filter-text">Модерн</span>
                            </div>
                            <div className="swiper-slide">
                                <div className="filter-photo">
                                    <img className="filter-photo__inner" src="/images/popular-filter-2.jpg" alt=""/>
                                </div>
                                <span className="filter-text">Барроко</span>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}