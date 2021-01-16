import React from "react"
import "./titleCatalog.scss"


const TITLECATALOG_DATA = {
    mainTitle: "Каталог картин",
    backgroundURL: "/images/title-catalog.jpg"
}


export const TitleCatalog = () => {
    return(
        <div className="title-section">
            <div className="centering" style={{backgroundImage: `url(${!!TITLECATALOG_DATA.backgroundURL ? TITLECATALOG_DATA.backgroundURL : undefined})`}}>
                <h1 className="title-catalog">{!!TITLECATALOG_DATA.mainTitle ? TITLECATALOG_DATA.mainTitle : undefined}</h1>
            </div>
        </div>
    )
}