import React, { useContext } from "react"
import { RateContext } from "../../context/RateContext"
import "./beginner.scss"
import cn from "classnames"




export const Beginner = (props) => {

    const {state, popupShowHandler, popupHideHandler} = useContext(RateContext)
    const data = props.data.beginner

    return(
        <div className="beginner-section">
            <div className="section-header">
                {!!data.mainTitle ? <h2 className="section-title">{data.mainTitle}</h2> : undefined}
            </div>
            <div className="centering">
                <div className="beginner-video beginner-video-js" onClick={() => popupShowHandler("popupVideo")}>
                    <img className="beginner-video__preview" src={!!data.video.previewURL ? data.video.previewURL : undefined} alt=""/>
                    <p className="beginner-video__text">{!!data.video.previewText ? data.video.previewText : undefined}</p>
                </div>
                <div className="beginner-expert">
                    <a className="beginner-expert__link" href="#"><img className="beginner-expert__photo" src={!!data.article.previewURL ? data.article.previewURL : undefined} alt=""/></a>
                    <a className="beginner-expert__link title-underline" href="#"><h3 className="beginner-expert__title">{!!data.article.title ? data.article.title : undefined}</h3></a>
                    <a className="beginner-expert__link" href="#"><p className="beginner-expert__text">{!!data.article.description ? data.article.description : undefined}</p></a>
                </div>
            </div>
            <div className={cn("beginner-popup", {"beginner-popup-js" : !(state.showPopup && state.valuePopup === "popupVideo")})}>
                <div className="beginner-popup__inner">
                    <span className="beginner-popup__exit" href="#" onClick={popupHideHandler}></span>
                    <iframe className="beginner-popup__video" src={cn("", {"https://www.youtube.com/embed/R8Yd-M9vfI0?autoplay=1" : (state.showPopup && state.valuePopup === "popupVideo")})} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}