import React from 'react'
import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { HeaderWhite } from '../../components/headerWhite/HeaderWhite'
import { ProductCardCatalog } from '../../components/productCardCatalog/ProductCardCatalog'
import { WorksCard } from '../../components/worksCard/WorksCard'
import { RateContext } from '../../context/RateContext'
import { PopupAuthorization } from '../../components/popupAuthorization/PopupAuthorization'
import { PopupRegistration } from '../../components/popupRegistration/PopupRegistration'
import { PopupPasswordRecovery } from '../../components/popupPasswordRecovery/PopupPasswordRecovery'
import { PopupSuccess } from '../../components/popupSuccess/PopupSuccess'

class ProductCard extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            favourite: false,

            parametrsButton: false,
            descriptionButton: false,

            showIncrease: false,

            //открытие и закрытие попапа
            showPopup: false,
            valuePopup: "",
            
            showHeader: false,
            valueHeader: "",
            searchValue: ""
        }
    }

    favouriteToggleHandler = () => {
        this.setState({
            favourite: !this.state.favourite
        })
    }

    parametrsPictureToggleHandler = () => {
        this.setState({
            parametrsButton: !this.state.parametrsButton
        })
    }

    descriptionPictureToggleHandler = () => {
        this.setState({
            descriptionButton: !this.state.descriptionButton
        })
    }

    toggleIncreaseHandler = () => {
        this.setState({
            showIncrease: !this.state.showIncrease
        })
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
            searchValue: ""
        })
    }
    toggleSearchOutHandler = () => {
        this.setState({
            showSearch: false,
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
                                favouriteToggleHandler: this.favouriteToggleHandler,
                                parametrsPictureToggleHandler: this.parametrsPictureToggleHandler,
                                descriptionPictureToggleHandler: this.descriptionPictureToggleHandler,
                                toggleIncreaseHandler: this.toggleIncreaseHandler,

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
                </Head>
                <div className="product-card-main">
                    <HeaderWhite data={this.props.data}/>
                    <ProductCardCatalog data={this.props.data}/>
                    <WorksCard data={this.props.data}/>
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
export default ProductCard
export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/productCard`)
    const data = await res.json()
    return {
      props: {data}, // will be passed to the page component as props
    }
  }