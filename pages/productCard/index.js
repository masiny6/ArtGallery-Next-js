import React from 'react'
import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { HeaderWhite } from '../../components/headerWhite/HeaderWhite'
import { ProductCardCatalog } from '../../components/productCardCatalog/ProductCardCatalog'
import { WorksCard } from '../../components/worksCard/WorksCard'

const ProductCard = () => {
    return(
        <React.Fragment>
        <Head>
            <title>ArtGallery</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="product-card-main">
            <HeaderWhite/>
            <ProductCardCatalog/>
            <WorksCard/>
            <Footer/>
        </div>
        </React.Fragment>
    )
}
export default ProductCard