import React from "react"
import Link from "next/link"



export class WorksItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {

        const {
            data
        } = this.props

        return(
            <div className="grid__item js-grid__item">
                <div className="photo-works">
                    <img className="photo" src={data.pictureURL} alt=""/>
                </div>
                <div className="description-work">
                    <span className="attraction-new">{data.tag}</span>
                    <h4 className="description-work__title"><Link href={data.cardURL}><a className="description-work__link" href={data.cardURL}>{data.title}</a></Link></h4>
                    <p className="description-work__author"><Link href={data.authorURL}><a className="description-work__link" href={data.authorURL}>{data.author}</a></Link></p>
                    <p className="description-work__size">{data.size}</p>
                    <div className="price-and-icon">
                        <div className="price-section">
                        <p className="price">{Number(data.price).toLocaleString('ru-RU')} <span className="ruble">₽</span></p>
                        <span className="old-price">{Number(data.oldPrice).toLocaleString('ru-RU')}</span>
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
        )
    }
}