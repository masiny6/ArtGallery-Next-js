import React, { useContext, useEffect, useRef} from 'react'
import "./header.scss"
import { RateContext } from '../../context/RateContext'
import Link from 'next/link'
import cn from "classnames"
import OutsideClickHandler from 'react-outside-click-handler'


export const Header = (props) => {

  const {state, popupShowHandler, toggleHeaderHandler, toggleSearchHandler, searchValueHandler} = useContext(RateContext)
  const data = props.data.header
  //Фокус на инпут search
  const searchElementFocus = useRef(null);

  useEffect(() => {
    if (searchElementFocus.current) {
      searchElementFocus.current.focus();
    }
  }, []);

  //Открыти и закрытие "ещё"
  const moreHide = ["still-centering", "still-js"]
  const moreInput = typeof window !== 'undefined' ? document.querySelector(".still") : "undefined"
    
  if(state.showHeader && state.valueHeader === "more") {
      moreHide.splice(1,1)
      moreInput.classList.add("still-background-js")
  } else if(state.showHeader == false && state.valueHeader === "more") {
    state.valueHeader = ""
    moreInput.classList.remove("still-background-js")
  }

    return(
        <header className="main-header">
          <div className="centering main-header__centering">
            <div className="menu-and-logo">
              <input id="burger-menu" className="burger-menu" type="checkbox"/><label onClick={() => toggleHeaderHandler("mobile-menu")} className="menu-phone" htmlFor="burger-menu"></label>
              <div className="logo">
                {!!data.logo.desktop && !!data.logo.mobile ? <Link href="/"><a className="logo-link" href="/">
                  <p className="main-logo"><span className="main-logo__elem">{!!data.logo.desktop ? data.logo.desktop[0] : data.logo.mobile[0]}</span>{!!data.logo.desktop ? data.logo.desktop[1] : data.logo.mobile[1]}</p>
                  <p className="main-logo-mobile"><span className="main-logo__elem">{!!data.logo.mobile ? data.logo.mobile[0] : data.logo.desktop[0]}</span>{!!data.logo.mobile ? data.logo.mobile[1] : data.logo.desktop[1]}</p>
                </a></Link> : undefined}
              </div>
            </div>
            <nav className={cn("main-navigation", {"main-navigation-js" : !(state.showHeader && state.valueHeader === "mobile-menu")})}>
              <ul className="navigation">
                {!!data.menu.main ? data.menu.main.map((item, key)=> (
                  <li className="navigation__elem" key={item.name + key}><Link href={item.url}><a className="navigation__link" href={item.url}>{item.name}</a></Link></li>
                )) : undefined}
                <li className="navigation__elem"><a className="navigation__link still" href="#" onPointerEnter={() => toggleHeaderHandler("more")} onPointerLeave={() => toggleHeaderHandler("more")}>{data.menu.secondary.name}</a></li>
              </ul>
              <div className={moreHide.join(" ")} onPointerLeave={() => toggleHeaderHandler("more")}>
                <ul className="still-list">
                  {!!data.menu.secondary ? data.menu.secondary.secondaryItems.map((item, key) => (
                    <li className="still-list__elem" key={item.name + key}><Link href={item.url}><a className="still-list__link" href={item.url}>{item.name}</a></Link></li>
                  )) : undefined}
                  {!!data.lang.mobile ? <li className="still-list__elem hidden-desktop hidden-tablet"><a className="still-list__link" href={data.lang.mobile.url}>{data.lang.mobile.name}</a></li> : undefined}
                </ul>
                <p className="copyright-mobile hidden-desktop hidden-tablet">{data.copyright.name}</p>
              </div>
            </nav>
            <div className="account-and-etc">
              <div className="personal-account">
                <span className="personal-account__photo" onClick={() => popupShowHandler("authorization")}></span>
                {!!data.account ? <span className="personal-account__name">{data.account.name}</span> : undefined}
                <div className="drop-menu-account drop-menu-account-js">
                  <div className="centering-lists">
                    <ul className="first-section centering-lists__item">
                      <li className="first-section__elem centering-lists__general"><a className="centering-lists__link" href="#">Мой
                          профиль</a></li>
                      <li className="first-section__elem centering-lists__general"><a className="centering-lists__link" href="#">Мои
                          заказы</a></li>
                      <li className="first-section__elem centering-lists__general"><a className="centering-lists__link"
                          href="#">Сообщения</a></li>
                    </ul>
                    <ul className="second-section centering-lists__item">
                      <li className="second-section__elem centering-lists__general"><a className="centering-lists__link"
                          href="#">Настройки профиля</a></li>
                      <li className="second-section__elem centering-lists__general"><a className="centering-lists__link" href="#">Мои
                          работы</a></li>
                    </ul>
                    <ul className="third-section centering-lists__item">
                      <li className="third-section__elem centering-lists__general exit">
                        <a className="centering-lists__link exit__link" href="#"><span>Выйти</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="list-etc">
                <li className="list-etc__elem"><a className="list-etc__link favourites" href="#">
                    <svg className="svg-heart" viewBox="0 0 5 5">
                      <path id="Layer" className="shp0"
                        d="M3.45 0C4.22 0.01 4.84 0.62 4.84 1.39C4.84 1.76 4.7 2.11 4.43 2.38L2.57 4.23C2.48 4.32 2.34 4.32 2.25 4.23L0.41 2.38C-0.14 1.83 -0.14 0.95 0.41 0.4C0.97 -0.16 1.89 -0.13 2.42 0.44C2.68 0.16 3.05 0 3.45 0ZM3.45 -0.01L3.44 -0.01C3.44 -0.01 3.45 -0.01 3.45 -0.01ZM4.1 2.07C4.28 1.89 4.38 1.65 4.38 1.4C4.38 0.88 3.96 0.46 3.44 0.46C3.09 0.46 2.78 0.64 2.62 0.94C2.54 1.1 2.31 1.1 2.22 0.94C1.91 0.38 1.16 0.3 0.73 0.73C0.36 1.1 0.36 1.69 0.73 2.06L2.42 3.75L4.12 2.06L4.1 2.07Z" />
                    </svg>
                    <span className="counter-favourites counter">66</span>
                  </a></li>
                <li className="list-etc__elem"><a className="list-etc__link basket" href="#">
                    <svg className="svg-basket" viewBox="0 0 3 4">
                      <path id="Layer" className="shp0"
                        d="M1.46 0C1.46 0 1.46 0 1.45 0C1.45 0 1.45 0 1.45 0L1.46 0ZM1.45 0C1.85 0 2.18 0.33 2.18 0.73L2.91 0.73L2.91 3.64L0 3.64L0 0.73L0.73 0.73C0.73 0.33 1.06 0 1.45 0ZM1.45 0.36C1.25 0.36 1.09 0.52 1.09 0.72L1.82 0.72C1.82 0.52 1.66 0.36 1.46 0.36L1.45 0.36ZM0.37 1.09L0.37 3.27L2.55 3.27L2.55 1.09L0.37 1.09Z" />
                    </svg>
                    <span className="counter-basket counter">67</span>
                  </a></li>
                <li className="list-etc__elem">
                  <a className="list-etc__link search" href="#">
                  <OutsideClickHandler
                  onOutsideClick={() => {
                    setTimeout(function() {
                      toggleHeaderHandler("")
                    })
                    
                  }}
                > 
                    <svg className="svg-search" viewBox="0 0 4 4" onClick={() => toggleHeaderHandler("search")}>
                      <path id="Layer" className="shp0" d="M2.32 2.6L3.32 3.6L3.6 3.32L2.6 2.32L2.32 2.6Z" />
                      <path id="Layer" className="shp0"
                        d="M3.09 1.54C3.09 1.94 2.94 2.33 2.64 2.63C2.34 2.93 1.94 3.08 1.55 3.08C1.15 3.08 0.76 2.93 0.46 2.63C0.16 2.33 0.01 1.93 0.01 1.54C0.01 1.14 0.16 0.75 0.46 0.45C0.76 0.15 1.16 0 1.55 0C1.95 0 2.34 0.15 2.64 0.45C2.94 0.75 3.09 1.15 3.09 1.54ZM2.7 1.54C2.7 1.25 2.59 0.95 2.36 0.73C2.13 0.5 1.84 0.39 1.55 0.39C1.26 0.39 0.96 0.5 0.74 0.73C0.52 0.95 0.4 1.25 0.4 1.54C0.4 1.83 0.51 2.13 0.74 2.35C0.96 2.57 1.26 2.69 1.55 2.69C1.84 2.69 2.14 2.58 2.36 2.35C2.59 2.13 2.7 1.83 2.7 1.54Z" />
                    </svg>
                    </OutsideClickHandler>
                  </a>
                </li>
              </ul>
              <div className={cn("search-centering", {"search-centering-js" : !(state.showHeader && state.valueHeader === "search")})}>
                <form className="search-form" action="#">
                  <input className="search-form__input search-form__input-js" 
                  ref={
                    searchElementFocus => {
                      if (searchElementFocus) {
                        searchElementFocus.focus();
                      }
                    }
                  } onChange={searchValueHandler} value={state.searchValue} type="text" placeholder="Поиск..."/>
                  <button className="search-form__button" type="submit"></button>
                  <button className="search-form__button-clear" type="reset"></button>
                </form>
              </div>
              <div className="languages">
                <OutsideClickHandler
                  onOutsideClick={() => {
                    // if (state.showHeader = false && state.valueHeader == "language") {
                        toggleHeaderHandler("")
                    // }
                    
                  }}
                > 
                  {!!data.lang.desktopStatic ? <span className="languages__ru" onClick={() => toggleHeaderHandler("language")}>{data.lang.desktopStatic.name}</span> : undefined}
                
                <ul className={cn("languages-list", {"languages-list-js" : !(state.showHeader && state.valueHeader === "language")})}>
                  {!!data.lang.desktopList ? data.lang.desktopList.map((item, key) => (
                    <li className="languages-elem" key={item.name + key}><Link href={item.url}><a className="languages__en" href={item.url}>{item.name}</a></Link></li>
                  )) : undefined}
                </ul>
                </OutsideClickHandler>
              </div>
            </div>
          </div>
        </header>
    )
}