import React, { useContext } from "react"
import OutsideClickHandler from 'react-outside-click-handler';
import { RateContext } from "../../context/RateContext"
import "./popupPasswordRecovery.scss"
import cn from "classnames"

export const PopupPasswordRecovery = (props) => {


    const {state, popupHideHandler, popupShowHandler} = useContext(RateContext)
    const data = props.data.popupPasswordRecovery


    return(
        <div className={cn("popup-recovery", "js-popup-recovery", {"js-popup-close-general" : !(state.showPopup && state.valuePopup === "recovery")})}>
                <OutsideClickHandler
                onOutsideClick={() => {
                    popupHideHandler()
                }}
                > 
            <div className="popup-recovery__centering">
                <span className="popup-recovery__close js-popup-general-close" onClick={popupHideHandler}></span>
                <div className="popup-header">
                    <span className="popup-header__title">{!!data.mainTitle ? data.mainTitle : undefined}</span>
                </div>
                <form className="form-recovery js-form-recovery" action="">
                    <fieldset className="fieldset-email">
                        <legend className="label-email">Введите свой e-mail</legend>
                        <input className="input-email" type="email" name="email" placeholder="E-mail" required/>
                    </fieldset>
                    <div className="button__inner">
                        <button className="button-recovery" type="submit" onClick={() => popupShowHandler("success")}>Восстановить пароль</button>
                    </div>
                </form>
                <div className="forgotten-password">
                    <span className="forgotten-password__text">Вспомнили пароль?</span>
                    <span className="forgotten-password__button js-forgotten-password__button" onClick={() => popupShowHandler("authorization")}>Авторизоваться</span>
                </div>
            </div>
            </OutsideClickHandler>
        </div>
    )
}