import React, { useContext } from "react"
import { RateContext } from "../../context/RateContext"
import "./popupPasswordRecovery.scss"

export const PopupPasswordRecovery = () => {


    const {state, popupHideHandler, popupShowHandler} = useContext(RateContext)

    const popupHide = ["popup-recovery", "js-popup-recovery", "js-popup-close-general"]

    if(state.showPopup && state.valuePopup === "recovery") {
        popupHide.splice(2,1)
    }


    return(
        <div className={popupHide.join(" ")}>
            <div className="popup-recovery__centering">
                <span className="popup-recovery__close js-popup-general-close" onClick={popupHideHandler}></span>
                <div className="popup-header">
                    <span className="popup-header__title">Восстановить пароль</span>
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
        </div>
    )
}