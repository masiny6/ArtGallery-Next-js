import React from "react"
import Head from 'next/head'
import { RateContext } from "../context/RateContext"
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Slider } from '../components/slider/Slider'
import { Beginner } from '../components/beginner/Beginner'
import { Works } from '../components/works/Works'
import { Styles } from '../components/styles/Styles'
import { News } from '../components/news/News'
import { PopupAuthorization } from '../components/popupAuthorization/PopupAuthorization'
import { PopupRegistration } from '../components/popupRegistration/PopupRegistration'
import { PopupPasswordRecovery } from '../components/popupPasswordRecovery/PopupPasswordRecovery'
import { PopupSuccess } from '../components/popupSuccess/PopupSuccess'


export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            //открытие и закрытие попапа
            showPopup: false,
            valuePopup: "",
            //Появление language
            showHeader: false,
            valueHeader: ""
        }
    }
    //Открытие и закрытие попапа
    popupShowHandler = (valuePopup) => {
    this.setState({
        showPopup: true,
        valuePopup
    })
    }

    popupHideHandler = () => {
    this.setState({
        showPopup: false,
        valuePopup: ""
    })
    }
    //Открытие и закрытие элементов header
    toggleHeaderHandler = (valueHeader) => {
    const ShowAndHide = this.state.showHeader
    this.setState({
        showHeader: !ShowAndHide,
        valueHeader
    })
    }
    render() {
        return (
        <RateContext.Provider
                        value={{state: this.state,
                                popupShowHandler: this.popupShowHandler,
                                popupHideHandler: this.popupHideHandler,
                                toggleHeaderHandler: this.toggleHeaderHandler
                        }}>
                
        <React.Fragment>
            <Head>
            <title>ArtGallery</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <Header/>
                <main className="main-content">
                    <Slider/>
                    <Beginner/>
                    <Works/>
                    <Styles/>
                    <News/>
                </main>
                <Footer/>
                <PopupAuthorization/>
                <PopupRegistration/>
                <PopupPasswordRecovery/>
                <PopupSuccess/>
            </div>
        </React.Fragment>
        </RateContext.Provider> 
        )
    }
}
