import React from 'react'
import Head from 'next/head'
import { HeaderWhite } from "../../components/headerWhite/HeaderWhite"
import { TitleCatalog } from '../../components/titleCatalog/TitleCatalog'
import { BreadCrumbCatalogMobile } from '../../components/breadCrumbCatalogMobile/BreadCrumbCatalogMobile'
import { FilterCatalog } from '../../components/filterCatalog/FilterCatalog'
import { Footer } from '../../components/footer/Footer'
import { PopularFilterCatalog } from '../../components/popularFilterCatalog/PopularFilterCatalog'
import { Works } from '../../components/works/Works'
import { RateContext } from '../../context/RateContext'
import { PopupAuthorization } from '../../components/popupAuthorization/PopupAuthorization'
import { PopupRegistration } from '../../components/popupRegistration/PopupRegistration'
import { PopupPasswordRecovery } from '../../components/popupPasswordRecovery/PopupPasswordRecovery'
import { PopupSuccess } from '../../components/popupSuccess/PopupSuccess'

class Catalog extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            //открытие и закрытие попапа
            showPopup: false,
            valuePopup: "",
            
            showHeader: false,
            valueHeader: "",
            searchValue: ""
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
            valueHeader
        })
    }

    toggleSearchHandler = (valueHeader) => {
        this.setState({
            showHeader: !this.state.showHeader,
            valueHeader,
            searchValue: ""
        })
    }

    searchValueHandler = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }


    render() {
        return(
            <RateContext.Provider
            value={{state: this.state,
                    popupShowHandler: this.popupShowHandler,
                    popupHideHandler: this.popupHideHandler,
                    toggleHeaderHandler: this.toggleHeaderHandler,
                    toggleSearchHandler: this.toggleSearchHandler,
                    searchValueHandler: this.searchValueHandler
            }}>
                <React.Fragment>
                <Head>
                    <title>ArtGallery</title>
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
                </Head>
                <div className="popular-filter-main">
                <HeaderWhite/>
                <main className="catalog-main">
                    <TitleCatalog/>
                    <BreadCrumbCatalogMobile/>
                    <FilterCatalog/>
                    <PopularFilterCatalog/>
                    <Works/>
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

export default Catalog