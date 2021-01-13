import React, { useContext } from "react"
import { RateContext } from "../../context/RateContext"
import "./beginner.scss"

export const Beginner = () => {

    const {state, popupShowHandler, popupHideHandler} = useContext(RateContext)

    //Открыти и закрытие попапа с видео
    const popupVideoHide = ["beginner-popup", "beginner-popup-js"]
    const videoAutoplay = ["https://www.youtube.com/embed/R8Yd-M9vfI0"]
  
    if(state.showPopup && state.valuePopup === "popupVideo") {
        popupVideoHide.splice(1,1)
        videoAutoplay.push("?autoplay=1")
    }

    return(
        <div className="beginner-section">
            <div className="section-header">
                <h2 className="section-title">Не знаете с чего начать?</h2>
            </div>
            <div className="centering">
                <div className="beginner-video beginner-video-js" onClick={() => popupShowHandler("popupVideo")}>
                    <img className="beginner-video__preview" src="/images/background-video.jpg" alt=""/>
                    <p className="beginner-video__text">Видеобзор нашего ресурса возможности для пользователя</p>
                </div>
                <div className="beginner-expert">
                    <a className="beginner-expert__link" href="#"><img className="beginner-expert__photo" src="/images/expert-photo.jpg" alt=""/></a>
                    <a className="beginner-expert__link title-underline" href="#"><h3 className="beginner-expert__title">Выбор экспертов </h3></a>
                    <a className="beginner-expert__link" href="#"><p className="beginner-expert__text">Обзор нашего экспетра Элеоноры Рубинштейн-Загорской</p></a>
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