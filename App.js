import React, { Fragment } from "react"
import { RateContext } from "./context/RateContext"
import { Catalog } from "./pages/catalog/Catalog"
import { Home } from "./pages/home/Home"
import { ProductCard } from "./pages/productCard/ProductCard"
// import "./scss/app.scss"


export default class App extends React.Component {
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
        return(
            <RateContext.Provider
                    value={{state: this.state,
                            popupShowHandler: this.popupShowHandler,
                            popupHideHandler: this.popupHideHandler,
                            toggleHeaderHandler: this.toggleHeaderHandler
                    }}>
            </RateContext.Provider>
        )
    }
}