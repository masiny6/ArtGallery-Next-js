import React, { useEffect } from "react"
import "./filterCatalog.scss"
import Slider, { Range } from 'rc-slider';
import Select from 'react-select'
import 'rc-slider/assets/index.css';
import cn from "classnames"
import ReactDOM from "react-dom"




export class FilterCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInputs: [200000, 800000],
            valueInputsSize: [10, 30],
            filterNameActive: "author",
            collapsExpand: false,
            checkbox: {}
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

    resetButton = () => {
        this.setState({
            valueInputs: [200000, 800000],
            checkbox: {}
        });
    }
    onChangeFavorite = (e) =>{
        let itemKey = e.target.id;
        let itemChecked = e.target.checked;
        let checkbox = this.state.checkbox
        checkbox[itemKey] = itemChecked
        this.setState({
            checkbox: checkbox
        })
    };

    
    render() {
        const data = this.props.data.filter
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
                                <button className="button-reset__inner js-button-reset__inner" type="reset" data-variant="0" onClick={this.resetButton}>Сбросить фильтр</button>
                            </div>
                        </div>
                    </div>
                    <div className="secondary-filter">
                        <div className="centering">
                            <div className={cn("filter-tabs", {"filter-tabs-js" : this.state.collapsExpand})}>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "author"}, "tab-author")} onClick={() => this.filterToggleHandler("author")} data-tabs="author" >{!!data.author.title ? data.author.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "genre"}, "tab-genre")} onClick={() => this.filterToggleHandler("genre")} data-tabs="genre">{!!data.genre.title ? data.genre.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "color"}, "tab-color")} onClick={() => this.filterToggleHandler("color")} data-tabs="color">{!!data.color.title ? data.color.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "topic"}, "tab-topic")} onClick={() => this.filterToggleHandler("topic")} data-tabs="topic">{!!data.topic.title ? data.topic.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "material"}, "tab-material")} onClick={() => this.filterToggleHandler("material")} data-tabs="material">{!!data.material.title ? data.material.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                                <span className={cn("filter-tabs__elem", {"js-filter-tabs" : this.state.filterNameActive == "style"}, "tab-style")} onClick={() => this.filterToggleHandler("style")} data-tabs="style">{!!data.style.title ? data.style.title : undefined}
                                    <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                        <path
                                            d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                            fill="#000000" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <span onClick={() => this.filterToggleHandler("author")} className={cn("filter-tabs__elem", "tab-author", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand}, {"js-filter-tabs-border" : this.state.filterNameActive == "author"})} data-tabs="author">{!!data.author.title ? data.author.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-author-inner", "tab-inner", "js-tab-inner-border", {"js-tab-inner-active" : this.state.filterNameActive == "author", "js-tab-inner-disabled" : this.state.filterNameActive != "author"}, "tab-inner")} data-inner="author">
                            <div className="centering">
                                <div className="centering-tablet">
                                    <span className="tab-author-inner__text">Начните вводить имя или фамилию автора</span>
                                    {/* <select className="author-list author-list-js" name="select">
                                        <optgroup className="author-list__title" label="А">
                                            {!!data.author.elementsSelect ? data.author.elementsSelect.A.map((item, key) => (
                                                <option className="author-list__elem" value={item} key={item + key}>{item}</option>
                                            )) : undefined}
                                        </optgroup>
                                        <optgroup className="author-list__title" label="Б">
                                            {!!data.author.elementsSelect ? data.author.elementsSelect.B.map((item, key) => (
                                                <option className="author-list__elem" value={item} key={item + key}>{item}</option>
                                            )) : undefined}
                                        </optgroup>
                                    </select> */}
                                    <Select className="author-list author-list-js"
                                        options = {data.author.elementsSelect}
                                        isMulti
                                        placeholder={''}
                                    />
                                    <div className="autocomplete__options js-autocomplete-options">{}</div>
                                </div>
                            </div>
                        </div>
                        <span onClick={() => this.filterToggleHandler("genre")} className={cn("filter-tabs__elem", "tab-genre", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand}, {"js-filter-tabs-border" : this.state.filterNameActive == "genre"})} data-tabs="genre">{!!data.genre.title ? data.genre.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-genre-inner", "tab-inner", "js-tab-inner-border", {"js-tab-inner-active" : this.state.filterNameActive == "genre", "js-tab-inner-disabled" : this.state.filterNameActive != "genre"}, "tab-inner")} data-inner="genre">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!data.genre ? data.genre.elements.map((item, key) => (
                                        <label className={cn("tab-inner-text", {"js-tab-inner-text" : this.state.checkbox[item+key]})} htmlFor={item + key} key={item + key}>{item}
                                            <input className="tab-inner-elem" onChange={this.onChangeFavorite} type="checkbox" name="" id={item + key}/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span onClick={() => this.filterToggleHandler("color")} className={cn("filter-tabs__elem", "tab-color", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand}, {"js-filter-tabs-border" : this.state.filterNameActive == "color"})} data-tabs="color">{!!data.color.title ? data.color.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-color-inner", "tab-inner", "js-tab-inner-border", {"js-tab-inner-active" : this.state.filterNameActive == "color", "js-tab-inner-disabled" : this.state.filterNameActive != "color"}, "tab-inner")} data-inner="color">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!data.color ? data.color.elements.map((item, key) => (
                                        <label className={cn("tab-inner-text", {"js-tab-inner-text" : this.state.checkbox[item+key]})} htmlFor={item + key} key={item + key}>{item}
                                            <input className="tab-inner-elem" onChange={this.onChangeFavorite} type="checkbox" name="" id={item + key}/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span onClick={() => this.filterToggleHandler("topic")} className={cn("filter-tabs__elem", "tab-topic", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand}, {"js-filter-tabs-border" : this.state.filterNameActive == "topic"})} data-tabs="topic">{!!data.topic.title ? data.topic.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-topic-inner", "tab-inner", "js-tab-inner-border", {"js-tab-inner-active" : this.state.filterNameActive == "topic", "js-tab-inner-disabled" : this.state.filterNameActive != "topic"}, "tab-inner")} data-inner="topic">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!data.topic ? data.topic.elements.map((item, key) => (
                                        <label className={cn("tab-inner-text", {"js-tab-inner-text" : this.state.checkbox[item+key]})} htmlFor={item + key} key={item + key}>{item}
                                            <input className="tab-inner-elem" onChange={this.onChangeFavorite} type="checkbox" name="" id={item + key}/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span onClick={() => this.filterToggleHandler("material")} className={cn("filter-tabs__elem", "tab-material", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand}, {"js-filter-tabs-border" : this.state.filterNameActive == "material"})} data-tabs="material">{!!data.material.title ? data.material.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-material-inner", "tab-inner", "js-tab-inner-border", {"js-tab-inner-active" : this.state.filterNameActive == "material", "js-tab-inner-disabled" : this.state.filterNameActive != "material"}, "tab-inner")} data-inner="material">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!data.material ? data.material.elements.map((item, key) => (
                                        <label className={cn("tab-inner-text", {"js-tab-inner-text" : this.state.checkbox[item+key]})} htmlFor={item + key} key={item + key}>{item}
                                            <input className="tab-inner-elem" onChange={this.onChangeFavorite} type="checkbox" name="" id={item + key}/>
                                        </label>
                                    )) : undefined}
                                </div>
                            </div>
                        </div>
                        <span onClick={() => this.filterToggleHandler("style")} className={cn("filter-tabs__elem", "tab-style", "desktop-hidden", {"filter-tabs-js" : this.state.collapsExpand}, {"js-filter-tabs-border" : this.state.filterNameActive == "style"})} data-tabs="style">{!!data.style.title ? data.style.title : undefined}
                            <svg className="tab-arrow" viewBox="0 0 11 7" fil="#000">
                                <path
                                    d="M0.55 1.5L1.96 0.09L6.91 5.03L5.5 6.45L0.55 1.5ZM4.09 5.03L9.04 0.09L10.45 1.5L5.5 6.45L4.09 5.03Z"
                                    fill="#000000" />
                            </svg>
                        </span>
                        <div className={cn("tab-style-inner", "tab-inner", "js-tab-inner-border", {"js-tab-inner-active" : this.state.filterNameActive == "style", "js-tab-inner-disabled" : this.state.filterNameActive != "style"}, "tab-inner")} data-inner="style">
                            <div className="centering">
                                <div className="centering-tablet">
                                    {!!data.style ? data.style.elements.map((item, key) => (
                                        <label className={cn("tab-inner-text", {"js-tab-inner-text" : this.state.checkbox[item+key]})} htmlFor={item + key} key={item + key}>{item}
                                            <input className="tab-inner-elem" onChange={this.onChangeFavorite} type="checkbox" name="" id={item + key}/>
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