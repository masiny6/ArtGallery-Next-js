import React from "react"
import Link from "next/link"


export default class NewsItem extends React.Component {

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
            <React.Fragment>
                <div className="news-photo-container">
                    <img className="news-photo" src={data.pictureURL} alt=""/>
                </div>
                <div className="news">
                    <div className="news__header">
                        <Link href={data.newsURL}><a className="news__link-teg" href={data.newsURL}>{data.tag}</a></Link><span className="news-data">{data.date}</span>
                    </div>
                    <a className="news__link-title" href="#">
                        <h5 className="news__title">{data.title}</h5>
                    </a>
                    <p className="news__text">{data.description}</p>
                    <a className="news__link-look" href="#">Смотреть и читать
                        <svg className="svg-arrow" viewBox="0 0 12 4">
                            <path id="Layer" className="shp0" d="M0 1.24L11.36 1.24L11.36 1.89L0 1.89L0 1.24Z" />
                            <path id="Layer" className="shp0"
                                d="M9.41 3.15L10.07 3.15L10.07 2.84L10.4 2.84L10.4 2.53L10.73 2.53L10.73 2.22L11.05 2.22L11.05 0.94L10.73 0.94L10.73 0.62L10.4 0.62L10.4 0.31L10.07 0.31L10.07 0L9.41 0L9.41 0.31L9.41 0.62L9.73 0.62L9.73 0.94L10.08 0.94L10.08 2.22L9.73 2.22L9.73 2.53L9.41 2.53L9.41 2.84L9.41 3.15Z" />
                        </svg>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}