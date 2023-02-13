import React from "react";
import '../../styles/grouping-header.component.css'

let GroupingHeader= ({titleLeft, titleRight}) => {

    return(
        <div className="c-grouping-header">
            <hr />
            <div className="c-grouping-header-content">
                <h3 className="c-grouping-header-content__Title-Left">{titleLeft}</h3>
                <p className="c-grouping-header-content__Title-Right">{titleRight}</p>
            </div>
            <hr />
        </div>
    )
}

export default GroupingHeader