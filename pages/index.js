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
import ReactDOM from "react-dom"


export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            //открытие и закрытие попапа
            showPopup: false,
            valuePopup: "",
            
            showHeader: false,
            valueHeader: "",

            showLanguage: false,

            showSearch: false

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

    toggleHeaderHandler = (valueHeader) => {
        this.setState({
            showHeader: !this.state.showHeader,
            valueHeader,
            showLanguage: false,
            showSearch: false,
        })
    }

    toggleLanguageHandler = () => {
        this.setState({
            showLanguage: !this.state.showLanguage,
        })
    }
    toggleLanguageOutHandler = () => {
        this.setState({
            showLanguage: false,
        })
    }

    toggleSearchHandler = () => {
        this.setState({
            showSearch: !this.state.showSearch,
        })
    }
    toggleSearchOutHandler = () => {
        this.setState({
            showSearch: false,
        })
    }

    searchValueHandler = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }


    render() {
        return (
        <RateContext.Provider
                        value={{state: this.state,
                                popupShowHandler: this.popupShowHandler,
                                popupHideHandler: this.popupHideHandler,
                                toggleHeaderHandler: this.toggleHeaderHandler,
                                toggleLanguageHandler: this.toggleLanguageHandler,
                                toggleLanguageOutHandler: this.toggleLanguageOutHandler,
                                toggleSearchHandler: this.toggleSearchHandler,
                                toggleSearchOutHandler: this.toggleSearchOutHandler,
                                searchValueHandler: this.searchValueHandler
                        }}>
                
        <React.Fragment>
            <Head>
            <title>ArtGallery</title>
            <link rel="icon" href="/favicon.ico" />
            <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
            {this.state.showPopup ? <style jsx>{`
                body {
                    overflow-y: hidden;
                }
            `}</style> : undefined}
            </Head>
            <div className="main">
                <Header data={this.props.data}/>
                <main className="main-content">
                    <Slider data={this.props.data}/>
                    <Beginner data={this.props.data}/>
                    <Works data={this.props.data}/>
                    <Styles data={this.props.data}/>
                    <News data={this.props.data}/>
                </main>
                <Footer data={this.props.data}/>
                {(this.state.showPopup && this.state.valuePopup === "authorization") ? <PopupAuthorization data={this.props.data}/> : undefined}
                {(this.state.showPopup && this.state.valuePopup === "registr") ? <PopupRegistration data={this.props.data}/> : undefined}
                {(this.state.showPopup && this.state.valuePopup === "recovery") ? <PopupPasswordRecovery data={this.props.data}/> : undefined}
                {(this.state.showPopup && this.state.valuePopup === "success") ? <PopupSuccess data={this.props.data}/> : undefined}
            </div>
        </React.Fragment>
        </RateContext.Provider> 
        )
    }
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/home`)
    const data = await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }