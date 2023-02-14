import React from "react";
import "../styles/primary-button.css"

let PrimaryButton = ({title}) => {

    return(
        <button className="primary-button">{title}</button>
    )
}

export default PrimaryButton