import React from "react"
import "./breadCrumbCatalogMobile.scss"
import Link from "next/link"

export const BreadCrumbCatalogMobile = () => {
    return(
        <div className="bread-crumb">
            <Link href="/"><a className="bread-crumb__link">Назад</a></Link>
        </div>
    )
}