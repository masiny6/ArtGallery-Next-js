import React from "react"
import Link from 'next/link'
import "./works.scss"
import Select from 'react-select'
import { WorksItem } from "../worksItem/WorksItem";



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
        const data = this.props.data.works
        return(
            <div className="works-section works-section-masonry">
                <div className="section-header">
                    <h2 className="section-title">{!!data.mainTitle ? data.mainTitle : undefined}</h2>
                    <div className="sort">
                        <p className="sort-text">{data.sortingCards.title}</p>
                        {/* <select className="sort-list sort-list-js" name="select" defaultValue="value2">
                            {data.sortingCards.sortList.map((item, key) => (
                                <option className="sort-list__elem" key={item.name + key} value={item.value}>{item.name}</option>
                            ))}
                        </select> */}
                        <Select 
                            className="sort-list sort-list-js stylish"
                            classNamePrefix="stylish"
                            options = {data.sortingCards.sortList}
                            placeholder={''}
                            defaultValue={data.sortingCards.sortList[0].options[0]}
                        />
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
                    {data.cards.map((item, key) => {
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