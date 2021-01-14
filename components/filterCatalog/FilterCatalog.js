import React from "react"
import "./filterCatalog.scss"

export const FilterCatalog = () => {
    return(
        <div className="filter-catalog">
            <div className="filter-mobile">
                <span className="filter-mobile__button">Фильтр</span>
                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                    <path
                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                        fill="#000000" />
                </svg>
            </div>
            <form className="form-filter" action="">
                <div className="centering">
                    <div className="main-filter">
                        <div className="filter-price">
                            <div className="filter-price__conclusion">
                                <input className="conclusion-min" id="conclusion-min-js" type="number"/>
                                <span className="conclusion-line"></span>
                                <input className="conclusion-max" id="conclusion-max-js" type="number"/>
                            </div>
                            <div className="filter-price__inner">
                                <span className="filter-price__title">Цена</span>
                                <input className="filter-price__range" id="range-price-js"/>
                                <span className="filter-price__min">0</span>
                                <span className="filter-price__max">max</span>
                            </div>
                        </div>
                        <div className="filter-size">
                            <span className="filter-size__title">Размер</span>
                            <input className="filter-size__range" id="range-size-js"/>
                        </div>
                        <div className="filter-orientation">
                            <span className="filter-orientation__title">Ориентация</span>
                            <div className="filter-orientation__inner">
                                <input className="filter-orientation__center" type="checkbox"/>
                                <input className="filter-orientation__vertical" type="checkbox"/>
                                <input className="filter-orientation__horizontal" type="checkbox"/>
                            </div>
                        </div>
                        <div className="button-reset">
                            <button className="button-reset__inner js-button-reset__inner" type="reset" data-variant="0">Сбросить фильтр</button>
                        </div>
                    </div>
                </div>
                <div className="secondary-filter">
                    <div className="centering">
                        <div className="filter-tabs">
                            <span className="filter-tabs__elem js-filter-tabs tab-author" data-tabs="author">Автор
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <span className="filter-tabs__elem tab-genre" data-tabs="genre">Жанр
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <span className="filter-tabs__elem tab-color" data-tabs="color">Цвет
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <span className="filter-tabs__elem tab-topic" data-tabs="topic">Тема
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <span className="filter-tabs__elem tab-material" data-tabs="material">Материал
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                            <span className="filter-tabs__elem tab-style" data-tabs="style">Стиль
                                <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                    <path
                                        d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                        fill="#000000" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <span className="filter-tabs__elem js-filter-tabs tab-author desktop-hidden" data-tabs="author">Автор
                        <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                            <path
                                d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                fill="#000000" />
                        </svg>
                    </span>
                    <div className="tab-author-inner js-tab-inner-active tab-inner" data-inner="author">
                        <div className="centering">
                            <div className="centering-tablet">
                                <span className="tab-author-inner__text">Начните вводить имя или фамилию автора</span>
                                <select className="author-list author-list-js" name="select">
                                    <optgroup className="author-list__title" label="А">
                                        <option className="author-list__elem" value="Абулафия Крайнова">Абулафия Крайнова</option>
                                        <option className="author-list__elem" value="Арменинов Тримедул">Арменинов Тримедул</option>
                                        <option className="author-list__elem" value="Ассадулин Нефедов">Ассадулин Нефедов</option>
                                        <option className="author-list__elem" value="Ашихмин Шадурахов">Ашихмин Шадурахов</option>
                                    </optgroup>
                                    <optgroup className="author-list__title" label="B">
                                        <option className="author-list__elem" value="Бабурин Константин">Бабурин Константин</option>
                                        <option className="author-list__elem" value="Бабуркин Вениамин">Бабуркин Вениамин</option>
                                        <option className="author-list__elem" value="Балутин Перламутр">Балутин Перламутр</option>
                                        <option className="author-list__elem" value="Бенвенист Трамп">Бенвенист Трамп</option>
                                        <option className="author-list__elem" value="Бердюгин Битюг">Бердюгин Битюг</option>
                                    </optgroup>
                                </select>
                                <div className="autocomplete__options js-autocomplete-options"></div>
                            </div>
                        </div>
                    </div>
                    <span className="filter-tabs__elem tab-genre desktop-hidden" data-tabs="genre">Жанр
                        <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                            <path
                                d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                fill="#000000" />
                        </svg>
                    </span>
                    <div className="tab-genre-inner js-tab-inner-disabled tab-inner" data-inner="genre">
                        <div className="centering">
                            <div className="centering-tablet">
                                <label className="tab-inner-text" htmlFor="">Вортицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id="1"/></label>
                                <label className="tab-inner-text" htmlFor="">Модернизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Авангардизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Реализм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Барокко<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Конструктивизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Готика<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Классицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Поп-арт<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Конструктивизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Готика<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Классицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Поп-арт<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Натюрморт<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                            </div>
                        </div>
                    </div>
                    <span className="filter-tabs__elem tab-color desktop-hidden" data-tabs="color">Цвет
                        <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                            <path
                                d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                fill="#000000" />
                        </svg>
                    </span>
                    <div className="tab-color-inner js-tab-inner-disabled tab-inner" data-inner="color">
                        <div className="centering">
                            <div className="centering-tablet">
                                <label className="tab-inner-text" htmlFor="">Красный<input className="tab-inner-elem" type="checkbox"
                                        name="" id="1"/></label>
                                <label className="tab-inner-text" htmlFor="">Белый<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Синий<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Чёрный<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                            </div>
                        </div>
                    </div>
                    <span className="filter-tabs__elem tab-topic desktop-hidden" data-tabs="topic">Тема
                        <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                            <path
                                d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                fill="#000000" />
                        </svg>
                    </span>
                    <div className="tab-topic-inner js-tab-inner-disabled tab-inner" data-inner="topic">
                        <div className="centering">
                            <div className="centering-tablet">
                                <label className="tab-inner-text" htmlFor="">Вортицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id="1"/></label>
                                <label className="tab-inner-text" htmlFor="">Модернизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Авангардизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Реализм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Барокко<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Конструктивизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Готика<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Классицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                            </div>
                        </div>
                    </div>
                    <span className="filter-tabs__elem tab-material desktop-hidden" data-tabs="material">Материал
                        <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                            <path
                                d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                fill="#000000" />
                        </svg>
                    </span>
                    <div className="tab-material-inner js-tab-inner-disabled tab-inner" data-inner="material">
                        <div className="centering">
                            <div className="centering-tablet">
                                <label className="tab-inner-text" htmlFor="">Сукно<input className="tab-inner-elem" type="checkbox" name=""
                                        id="1"/></label>
                                <label className="tab-inner-text" htmlFor="">Брезент<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Синтипон<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Велдшнепт<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                            </div>
                        </div>
                    </div>
                    <span className="filter-tabs__elem tab-style desktop-hidden" data-tabs="style">Стиль
                        <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                            <path
                                d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                fill="#000000" />
                        </svg>
                    </span>
                    <div className="tab-style-inner js-tab-inner-disabled tab-inner" data-inner="style">
                        <div className="centering">
                            <div className="centering-tablet">
                                <label className="tab-inner-text" htmlFor="">Вортицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id="1"/></label>
                                <label className="tab-inner-text" htmlFor="">Модернизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Авангардизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Реализм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Барокко<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Конструктивизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Готика<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Классицизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Поп-арт<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Конструктивизм<input className="tab-inner-elem" type="checkbox"
                                        name="" id=""/></label>
                                <label className="tab-inner-text" htmlFor="">Готика<input className="tab-inner-elem" type="checkbox" name=""
                                        id=""/></label>
                            </div>
                        </div>
                    </div>
                    <div className="roll-up">Cвернуть фильтр</div>
                    <div className="show-pictures-mobile">
                        <button className="show-pictures-mobile__button">Показать картины</button>
                    </div>
                </div>
            </form>
        </div>
    )
}