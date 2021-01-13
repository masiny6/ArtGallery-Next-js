import React from "react"
import Link from 'next/link'
import "./works.scss"


export const Works = () => {
    return(
        <div className="works-section works-section-masonry">
            <div className="section-header">
                <h2 className="section-title">Новые работы</h2>
                <div className="sort">
                    <p className="sort-text">Сортировать по</p>
                    <select className="sort-list sort-list-js" name="select" defaultValue="value2">
                        <option className="sort-list__elem" value="value1">Дате добавление</option>
                        <option className="sort-list__elem" value="value2">Цене</option>
                        <option className="sort-list__elem" value="value3">Популярности</option>
                    </select>
                </div>
            </div>
            <div className="centering grid js-grid">
                <div className="grid__sizer js-grid__sizer"></div>
                <div className="grid__gutter js-grid__gutter"></div>
                <div className="static-item js-static-item">
                    <div className="static-item__centering">
                        <img className="static-photo_one" src="/images/static__works.png" alt=""/>
                        <p className="static-text">Умный выбор по параметрам с примерами</p>
                        <img className="static-photo_two" src="/images/static__works-2.png" alt=""/>
                        <a className="static-link" href="#">Подобрать</a>
                        <svg className="svg-arrow" viewBox="0 0 12 4">
                            <path id="Layer" className="shp0" d="M0 1.24L11.36 1.24L11.36 1.89L0 1.89L0 1.24Z" />
                            <path id="Layer" className="shp0"
                                d="M9.41 3.15L10.07 3.15L10.07 2.84L10.4 2.84L10.4 2.53L10.73 2.53L10.73 2.22L11.05 2.22L11.05 0.94L10.73 0.94L10.73 0.62L10.4 0.62L10.4 0.31L10.07 0.31L10.07 0L9.41 0L9.41 0.31L9.41 0.62L9.73 0.62L9.73 0.94L10.08 0.94L10.08 2.22L9.73 2.22L9.73 2.53L9.41 2.53L9.41 2.84L9.41 3.15Z" />
                        </svg>
                    </div>
                </div>
                <div className="grid__item js-grid__item">
                    <div className="photo-works">
                        <img className="photo" src="/images/photo-works-1.jpg" alt=""/>
                    </div>
                    <div className="description-work">
                        <span className="attraction-new">Новинка</span>
                        <h4 className="description-work__title"><Link href="/productCard"><a className="description-work__link" to="/product-card">Распоряжения о структуре
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item grid__item_empty hidden-desktop hidden-mobile hidden-catalog js-grid__item"></div>
                <div className="grid__item js-grid__item hidden-tablet">
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item grid__item_empty js-grid__item hidden-tablet"></div>
                <div className="grid__item js-grid__item">
                    <div className="photo-works">
                        <img className="photo" src="/images/photo-works-4.jpg" alt=""/>
                    </div>
                    <div className="description-work">
                        <h4 className="description-work__title"><a className="description-work__link" href="#">Распоряжения о
                                структуре</a></h4>
                        <p className="description-work__author"><a className="description-work__link" href="#">Говард Херш</a></p>
                        <p className="description-work__size">Картина, 80x60 см.</p>
                        <div className="price-and-icon">
                            <div className="price-section">
                            <p className="price">27 750<span className="ruble">₽</span></p>
                            </div>
                            <ul className="icon-list">
                                <li className="icon-list__heart">
                                    <svg className="svg-heart" viewBox="0 0 21.6 19.1"><path d="M10.8 3.7c5.5-6.8 12.6 1.4 8.7 5.7l-8.8 8.8L2 9.4C-1.5 5 5.3-3.2 10.8 3.7z"></path></svg>
                                </li>
                                <li className="icon-list__basket">
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item js-grid__item">
                    <div className="photo-works">
                        <img className="photo" src="/images/photo-works-5.jpg" alt=""/>
                    </div>
                    <div className="description-work">
                        <h4 className="description-work__title"><a className="description-work__link" href="#">Абстракция, Опус J202</a>
                        </h4>
                        <p className="description-work__author"><a className="description-work__link" href="#">Соколов Виталий</a></p>
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item js-grid__item">
                    <div className="photo-works">
                        <img className="photo" src="/images/photo-works-6.jpg" alt=""/>
                    </div>
                    <div className="description-work">
                        <span className="attraction-discount">Скидка 20%</span>
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item js-grid__item hidden-tablet">
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item grid__item_empty js-grid__item hidden-mobile"></div>
                <div className="grid__item js-grid__item">
                    <div className="photo-works">
                        <img className="photo" src="/images/photo-works-8.jpg" alt=""/>
                    </div>
                    <div className="description-work">
                        <h4 className="description-work__title"><a className="description-work__link" href="#">Абстракция, Опус J202</a>
                        </h4>
                        <p className="description-work__author"><a className="description-work__link" href="#">Соколов Виталий</a></p>
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid__item grid__item_empty js-grid__item hidden-tablet hidden-mobile"></div>
                <div className="grid__item js-grid__item hidden-tablet">
                    <div className="photo-works">
                        <img className="photo" src="/images/photo-works-9.jpg" alt=""/>
                    </div>
                    <div className="description-work">
                        <h4 className="description-work__title"><a className="description-work__link" href="#">Абстракция, Опус J202</a>
                        </h4>
                        <p className="description-work__author"><a className="description-work__link" href="#">Соколов Виталий</a></p>
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
                                    <svg className="svg-basket" viewBox="0 0 17.1 21.3"><path d="M16 20.3H1v-15l15.1.1z"></path><path fill="none" className="dst0 dst1" d="M5.1 5.4c0-5.7 6.7-5.9 6.7 0"></path></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view-all">
                <a className="view-all__link" href="#">Смотреть всё</a>
                <a href="#" className="view-more-catalog">Посмотреть ещё</a>
            </div>
        </div>
    )
}