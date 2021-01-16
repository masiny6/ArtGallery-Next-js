import React, { useContext } from "react"
import { RateContext } from "../../context/RateContext"
import "./beginner.scss"

const BEGINNER_DATA = {
    mainTitle: "Не знаете с чего начать?",
    video: {
        previewURL: "/images/background-video.jpg",
        previewText: "Видеобзор нашего ресурса возможности для пользователя",
        popup: {
            videouURL: "https://www.youtube.com/embed/R8Yd-M9vfI0"
        }
    },
    article: {
        previewURL: "/images/expert-photo.jpg",
        title: "Выбор экспертов",
        description: "Обзор нашего экспетра Элеоноры Рубинштейн-Загорской"
    },
}


export const Beginner = () => {

    const {state, popupShowHandler, popupHideHandler} = useContext(RateContext)

    //Открыти и закрытие попапа с видео
    const popupVideoHide = ["beginner-popup", "beginner-popup-js"]
    const videoAutoplay = [`${BEGINNER_DATA.video.popup.videouURL}`]
  
    if(state.showPopup && state.valuePopup === "popupVideo") {
        popupVideoHide.splice(1,1)
        videoAutoplay.push("?autoplay=1")
    }

    return(
        <div className="beginner-section">
            <div className="section-header">
                {!!BEGINNER_DATA.mainTitle ? <h2 className="section-title">{BEGINNER_DATA.mainTitle}</h2> : undefined}
            </div>
            <div className="centering">
                <div className="beginner-video beginner-video-js" onClick={() => popupShowHandler("popupVideo")}>
                    <img className="beginner-video__preview" src={!!BEGINNER_DATA.video.previewURL ? BEGINNER_DATA.video.previewURL : undefined} alt=""/>
                    <p className="beginner-video__text">{!!BEGINNER_DATA.video.previewText ? BEGINNER_DATA.video.previewText : undefined}</p>
                </div>
                <div className="beginner-expert">
                    <a className="beginner-expert__link" href="#"><img className="beginner-expert__photo" src={!!BEGINNER_DATA.article.previewURL ? BEGINNER_DATA.article.previewURL : undefined} alt=""/></a>
                    <a className="beginner-expert__link title-underline" href="#"><h3 className="beginner-expert__title">{!!BEGINNER_DATA.article.title ? BEGINNER_DATA.article.title : undefined}</h3></a>
                    <a className="beginner-expert__link" href="#"><p className="beginner-expert__text">{!!BEGINNER_DATA.article.description ? BEGINNER_DATA.article.description : undefined}</p></a>
                </div>
            </div>
            <div className={popupVideoHide.join(" ")}>
                <div className="beginner-popup__inner">
                    <span className="beginner-popup__exit" href="#" onClick={popupHideHandler}></span>
                    <iframe className="beginner-popup__video" src={videoAutoplay.join("")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}