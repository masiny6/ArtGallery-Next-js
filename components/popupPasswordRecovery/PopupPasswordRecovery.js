import React, { useContext } from "react"
import OutsideClickHandler from 'react-outside-click-handler';
import { RateContext } from "../../context/RateContext"
import { useForm } from "react-hook-form"
import "./popupPasswordRecovery.scss"
import cn from "classnames"

export const PopupPasswordRecovery = (props) => {


    const {state, popupHideHandler, popupShowHandler} = useContext(RateContext)
    const data = props.data.popupPasswordRecovery

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => popupShowHandler("success");


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
                <form className="form-recovery js-form-recovery" action="#" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className={cn("fieldset-email", {"fieldset-error" : errors.email})}>
                        <legend className="label-email" >Введите свой e-mail</legend>
                        <input className="input-email" type="email" name="email" placeholder="E-mail" ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                        <span className="error">{errors.email && "Введите корректный email"}</span>
                    </fieldset>
                    <div className="button__inner">
                        <button className="button-recovery" type="submit">Восстановить пароль</button>
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