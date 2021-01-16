import React from 'react'
import Head from 'next/head'
import { HeaderWhite } from "../../components/headerWhite/HeaderWhite"
import { TitleCatalog } from '../../components/titleCatalog/TitleCatalog'
import { BreadCrumbCatalogMobile } from '../../components/breadCrumbCatalogMobile/BreadCrumbCatalogMobile'
import { FilterCatalog } from '../../components/filterCatalog/FilterCatalog'
import { Footer } from '../../components/footer/Footer'
import { PopularFilterCatalog } from '../../components/popularFilterCatalog/PopularFilterCatalog'
import { Works } from '../../components/works/Works'

const Catalog = () => {
    return(
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
        </div>
        </React.Fragment>
    )
}

export default Catalog