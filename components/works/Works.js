import React from "react"
import Link from 'next/link'
import "./works.scss"
import { WorksItem } from "../worksItem/WorksItem";

const WORKS_DATA = {
    mainTitle: "Новые работы",
    sortingCards: {
        title: "Сортировать по",
        sortList: [
            {
                name: "Дате добавления",
                value: "value1"
            },
            {
                name: "Цене",
                value: "value2"
            },
            {
                name: "Популярности",
                value: "value3"
            },
        ]
    },
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

export class Works extends React.Component {


    constructor(props) {
        super(props);

        this.grid = React.createRef();
        this.msnry = false;
    }

    componentDidMount() {
        var msnry = new Masonry( this.grid.current, {
            itemSelector: '.works-section-masonry .js-grid__item',
            columnWidth: '.works-section-masonry .js-grid__sizer',
            gutter: '.works-section-masonry .js-grid__gutter',
            horizontalOrder: true,
            stamp: '.works-section-masonry .js-static-item',
            percentPosition: true
        });
        setTimeout(function() {
            msnry.layout();
        },1)
        
    }


    render() {
        return(
            <div className="works-section works-section-masonry">
                <div className="section-header">
                    <h2 className="section-title">{!!WORKS_DATA.mainTitle ? WORKS_DATA.mainTitle : undefined}</h2>
                    <div className="sort">
                        <p className="sort-text">{WORKS_DATA.sortingCards.title}</p>
                        <select className="sort-list sort-list-js" name="select" defaultValue="value2">
                            {WORKS_DATA.sortingCards.sortList.map((item, key) => (
                                <option className="sort-list__elem" key={item.name + key} value={item.value}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="centering grid js-grid" ref={this.grid}>
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
                    {WORKS_DATA.cards.map((item, key) => {
                        switch(key) {
                            case 2:
                                return (
                                    <React.Fragment key={item + key}>
                                        <WorksItem data={item} />
                                        <div className="grid__item grid__item_empty hidden-desktop hidden-mobile hidden-catalog js-grid__item"></div>
                                    </React.Fragment>
                                )
                                break;
                            case 6:
                                return (
                                    <React.Fragment key={item + key}>
                                        <WorksItem data={item} />
                                        <div className="grid__item grid__item_empty js-grid__item hidden-mobile"></div>
                                    </React.Fragment>
                                )
                                break;
                            case 7:
                                return (
                                    <React.Fragment key={item + key}>
                                        <WorksItem data={item} />
                                        <div className="grid__item grid__item_empty js-grid__item hidden-tablet hidden-mobile"></div>
                                    </React.Fragment>
                                )
                                break;
                            default:
                                return (
                                    <React.Fragment key={item + key}>
                                        <WorksItem data={item} />
                                    </React.Fragment>
                                )
                        }
                    })}
                </div>
                <div className="view-all">
                    <a className="view-all__link" href="#">Смотреть всё</a>
                    <a href="#" className="view-more-catalog">Посмотреть ещё</a>
                </div>
            </div>
        )
    }
    
}