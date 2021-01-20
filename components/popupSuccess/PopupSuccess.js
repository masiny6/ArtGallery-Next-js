import React, { useContext } from "react"
import OutsideClickHandler from 'react-outside-click-handler';
import { RateContext } from "../../context/RateContext"
import "./popupSuccess.scss"
import cn from "classnames"

export const PopupSuccess = (props) => {


    const {state, popupHideHandler} = useContext(RateContext)
    const data = props.data.popupSuccess

    return(
        <div className={cn("popup-success", "js-popup-success", {"js-popup-close-general" : !(state.showPopup && state.valuePopup === "success")})}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    popupHideHandler()
                }}
                > 
            <div className="popup-success__centering">
                <span className="popup-success__close js-popup-general-close" onClick={popupHideHandler}></span>
                <div className="popup-header">
                    <span className="popup-header__title">{!!data.mainTitle ? data.mainTitle : undefined}</span>
                </div>
                <p className="popup-success__text">Мы отправили на ваш e-mail инструкцию по сбросу пароля</p>
                <img className="popup-success__img" src="/images/tick-success.png" alt=""/>
            </div>
            </OutsideClickHandler>
        </div>
    )
}