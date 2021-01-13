import React, { useContext } from "react"
import { RateContext } from "../../context/RateContext"
import "./popupSuccess.scss"

export const PopupSuccess = () => {


    const {state, popupHideHandler, popupShowHandler} = useContext(RateContext)

    const popupHide = ["popup-success", "js-popup-success", "js-popup-close-general"]

    if(state.showPopup && state.valuePopup === "success") {
        popupHide.splice(2,1)
    }

    return(
        <div className={popupHide.join(" ")}>
            <div className="popup-success__centering">
                <span className="popup-success__close js-popup-general-close" onClick={popupHideHandler}></span>
                <div className="popup-header">
                    <span className="popup-header__title">Успех!</span>
                </div>
                <p className="popup-success__text">Мы отправили на ваш e-mail инструкцию по сбросу пароля</p>
                <img className="popup-success__img" src="/images/tick-success.png" alt=""/>
            </div>
        </div>
    )
}