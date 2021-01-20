import React from "react"
import "./titleCatalog.scss"





export const TitleCatalog = (props) => {
    const data = props.data.titleCatalog
    return(
        <div className="title-section">
            <div className="centering" style={{backgroundImage: `url(${!!data.backgroundURL ? data.backgroundURL : undefined})`}}>
                <h1 className="title-catalog">{!!data.mainTitle ? data.mainTitle : undefined}</h1>
            </div>
        </div>
    )
}