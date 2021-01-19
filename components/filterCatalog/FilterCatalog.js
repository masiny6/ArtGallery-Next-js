import React, { useEffect } from "react"
import "./filterCatalog.scss"
import Slider, { Range } from 'rc-slider';
import Select from 'react-select'
import 'rc-slider/assets/index.css';
import cn from "classnames"


const FILTER_DATA = {
    author: {
        title: "Автор",
        elementsSelect: {
            A: ["Абулафия Крайнова", "Арменинов Тринедул", "Ассадулин Нефёдов", "Ашихмин Шадурахов"],
            B: ["Бабурин Константин", "Бабуркин Вениамин", "Балутин Перламутр", "Бенвенист Трамп", "Бердюгин Битюг"]
        },
        // elementsSelect: {
        //     A: [{value: "Абулафия Крайнова", label: "Абулафия Крайнова"}, {value: "Арменинов Тринедул", label: "Арменинов Тринедул"}, {value: "Ассадулин Нефёдов", label: "Ассадулин Нефёдов"}, {value: "Ашихмин Шадурахов", label: "Ашихмин Шадурахов"}],
        //     B: [{value: "Бабурин Константин", label: "Бабурин Константин"}, {value: "Бабуркин Вениамин", label: "Бабуркин Вениамин"}, {value: "Балутин Перламутр", label: "Балутин Перламутр"}, {value: "Бенвенист Трамп"}, {value: "Бердюгин Битюг", label: "Бердюгин Битюг"}]
        // }
    },
    genre: {
        title: "Жанр",
        elements: ["Вортицизм", "Модернизм", "Авангардизм", "Реализм", "Барокко", "Конструктивизм", "Готика", "Классицизм", "Поп-арт", "Натюрморт"]
    },
    color: {
        title: "Цвет",
        elements: ["Красный", "Белый", "Синий", "Чёрный"]
    },
    topic: {
        title: "Тема",
        elements: ["Вортицизм", "Модернизм", "Авангардизм", "Реализм", "Барокко", "Готика", "Классицизм", "Поп-арт", "Натюрморт"]
    },
    material: {
        title: "Материал",
        elements: ["Сукно", "Брезент", "Синтипон", "Велдшнепт"]
    },
    style: {
        title: "Стиль",
        elements: ["Вортицизм", "Модернизм", "Авангардизм", "Реализм", "Барокко", "Конструктивизм", "Готика", "Классицизм", "Натюрморт"]
    }
}

export class FilterCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInputs: [200000, 800000],
            filterNameActive: "author",
            collapsExpand: false
        }
    }
    collapsExpandHandler = () => {
        if(this.state.filterNameActive != "") {
            this.setState({
                collapsExpand: !this.state.collapsExpand,
                filterNameActive: ""
            })
        } else {
            this.setState({
                collapsExpand: !this.state.collapsExpand,
                filterNameActive: "author"
            })
        }
        
    }
    filterToggleHandler = (filterNameActive) => {
        this.setState({
            filterNameActive
        })
    }
    //RangeSlider
    onSliderChange = (value) => {
        this.setState({
            valueInputs: value,
          });
    };

    onMinChange = (e) => {
        let min = +e.target.value || 0
        if (min > this.state.valueInputs[1]) {
            min = this.state.valueInputs[1]
        }
        let valueInputs = [min, this.state.valueInputs[1]]
        this.setState({
            valueInputs
        });
    };

    onMaxChange = (e) => {
        let max = +e.target.value || 1000000
        if (max < this.state.valueInputs[0]) {
            max = this.state.valueInputs[0]
        }
        let valueInputs = [this.state.valueInputs[0], max]
        this.setState({
            valueInputs
        });
    };

    render() {
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
                                    <input className="conclusion-min" id="conclusion-min-js" type="number" value={this.state.valueInputs[0]} onChange={this.onMinChange}/>
                                    <span className="conclusion-line"></span>
                                    <input className="conclusion-max" id="conclusion-max-js" type="number" value={this.state.valueInputs[1]} onChange={this.onMaxChange}/>
                                </div>
                                <div className="filter-price__inner">
                                    <span className="filter-price__title">Цена</span>
                                    {/* <input className="filter-price__range" id="range-price-js"/> */}
                                    <Range className="filter-price__range"
                                        onChange={this.onSliderChange}
                                        min={0}
                                        max={1000000}
                                        value={this.state.valueInputs}
                                        defaultValue={[200000, 800000]}
                                        allowCross={false}
                                    />
                                    <span className="filter-price__min">0</span>
                                    <span className="filter-price__max">max</span>
                                </div>
                            </div>
                            <div className="filter-size">
                                <span className="filter-size__title">Размер</span>
                                {/* <input className="filter-size__range" id="range-size-js"/> */}
                                <Range className="filter-size__range"
                                    min={0}
                                    max={40}
                                    defaultValue={[10, 30]}
                                    marks={{ 0: "S", 10: "M", 20: "L", 30: "XL", 40: "XXL" }} 
                                    step={null}
                                    allowCross={false}
                                />
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
                            <div className={cn("filter-tabs", {"filter-tabs-js" : this.state.collapsExpand})}>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "author"}, "tab-author")} onClick={() => this.filterToggleHandler("author")} data-tabs="author" >{!!FILTER_DATA.author.title ? FILTER_DATA.author.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "genre"}, "tab-genre")} onClick={() => this.filterToggleHandler("genre")} data-tabs="genre">{!!FILTER_DATA.genre.title ? FILTER_DATA.genre.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "color"}, "tab-color")} onClick={() => this.filterToggleHandler("color")} data-tabs="color">{!!FILTER_DATA.color.title ? FILTER_DATA.color.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "topic"}, "tab-topic")} onClick={() => this.filterToggleHandler("topic")} data-tabs="topic">{!!FILTER_DATA.topic.title ? FILTER_DATA.topic.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "material"}, "tab-material")} onClick={() => this.filterToggleHandler("material")} data-tabs="material">{!!FILTER_DATA.material.title ? FILTER_DATA.material.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "style"}, "tab-style")} onClick={() => this.filterToggleHandler("style")} data-tabs="style">{!!FILTER_DATA.style.title ? FILTER_DATA.style.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <span className={cn("filter-tabs__elem", "tab-author", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand})} data-tabs="author">{!!FILTER_DATA.author.title ? FILTER_DATA.author.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-author-inner", {"js-tab-inner-active" : this.state.filterNameActive == "author", "js-tab-inner-disabled" : this.state.filterNameActive != "author"}, "tab-inner")} data-inner="author">
                            <div className="centering">
                                <div className="centering-tablet">
                                    <span className="tab-author-inner__text">Начните вводить имя или фамилию автора</span>
                                    <select className="author-list author-list-js" name="select">
                                        <optgroup className="author-list__title" label="А">
                                            {!!FILTER_DATA.author.elementsSelect ? FILTER_DATA.author.elementsSelect.A.map((item, key) => (
                                                <option className="author-list__elem" value={item} key={item + key}>{item}</option>
                                            )) : undefined}
                                        </optgroup>
                                        <optgroup className="author-list__title" label="Б">
                                            {!!FILTER_DATA.author.elementsSelect ? FILTER_DATA.author.elementsSelect.B.map((item, key) => (
                                                <option className="author-list__elem" value={item} key={item + key}>{item}</option>
                                            )) : undefined}
                                        </optgroup>
                                    </select>
                                    <div className="autocomplete__options js-autocomplete-options"></div>
                                </div>
                            </div>
                        </div>
                        <span className={cn("filter-tabs__elem", "tab-genre", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand})} data-tabs="genre">{!!FILTER_DATA.genre.title ? FILTER_DATA.genre.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-genre-inner", {"js-tab-inner-active" : this.state.filterNameActive == "genre", "js-tab-inner-disabled" : this.state.filterNameActive != "genre"}, "tab-inner")} data-inner="genre">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!FILTER_DATA.genre ? FILTER_DATA.genre.elements.map((item, key) => (
                                        <label className="tab-inner-text" htmlFor="" key={item + key}>{item}
                                            <input className="tab-inner-elem" type="checkbox" name="" id=""/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span className={cn("filter-tabs__elem", "tab-color", "desktop-hidden", "js-filter-tabs-border", {"filter-tabs-js" : this.state.collapsExpand})} data-tabs="color">{!!FILTER_DATA.color.title ? FILTER_DATA.color.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-color-inner", {"js-tab-inner-active" : this.state.filterNameActive == "color", "js-tab-inner-disabled" : this.state.filterNameActive != "color"}, "tab-inner")} data-inner="color">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!FILTER_DATA.color ? FILTER_DATA.color.elements.map((item, key) => (
                                        <label className="tab-inner-text" htmlFor="" key={item + key}>{item}
                                            <input className="tab-inner-elem" type="checkbox" name="" id=""/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span className={cn("filter-tabs__elem", "tab-topic", "desktop-hidden", "js-filter-tabs-border", {"filter-tabs-js" : this.state.collapsExpand})} data-tabs="topic">{!!FILTER_DATA.topic.title ? FILTER_DATA.topic.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-topic-inner", {"js-tab-inner-active" : this.state.filterNameActive == "topic", "js-tab-inner-disabled" : this.state.filterNameActive != "topic"}, "tab-inner")} data-inner="topic">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!FILTER_DATA.topic ? FILTER_DATA.topic.elements.map((item, key) => (
                                        <label className="tab-inner-text" htmlFor="" key={item + key}>{item}
                                            <input className="tab-inner-elem" type="checkbox" name="" id=""/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span className={cn("filter-tabs__elem", "tab-material", "desktop-hidden", "js-filter-tabs-border", {"filter-tabs-js" : this.state.collapsExpand})} data-tabs="material">{!!FILTER_DATA.material.title ? FILTER_DATA.material.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-material-inner", {"js-tab-inner-active" : this.state.filterNameActive == "material", "js-tab-inner-disabled" : this.state.filterNameActive != "material"}, "tab-inner")} data-inner="material">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!FILTER_DATA.material ? FILTER_DATA.material.elements.map((item, key) => (
                                        <label className="tab-inner-text" htmlFor="" key={item + key}>{item}
                                            <input className="tab-inner-elem" type="checkbox" name="" id=""/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span className={cn("filter-tabs__elem", "tab-style", "desktop-hidden", "js-filter-tabs-border", {"filter-tabs-js" : this.state.collapsExpand})} data-tabs="style">{!!FILTER_DATA.style.title ? FILTER_DATA.style.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-style-inner", {"js-tab-inner-active" : this.state.filterNameActive == "style", "js-tab-inner-disabled" : this.state.filterNameActive != "style"}, "tab-inner")} data-inner="style">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!FILTER_DATA.style ? FILTER_DATA.style.elements.map((item, key) => (
                                        <label className="tab-inner-text" htmlFor="" key={item + key}>{item}
                                            <input className="tab-inner-elem" type="checkbox" name="" id=""/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <div className={cn("roll-up", {"roll-up-js" : this.state.collapsExpand})} onClick={this.collapsExpandHandler}>{this.state.collapsExpand ? "Развернуть фильтр" : "Свернуть фильтр"}</div>
                        <div className={cn("show-pictures-mobile", {"js-show-pictures-mobile" : this.state.collapsExpand})}>
                            <button className="show-pictures-mobile__button">Показать картины</button>
                        </div>
                    </div>
                </form>
            </div>
        )
                                }
}