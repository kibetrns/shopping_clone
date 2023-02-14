import React from "react";
import PrimaryButton from "../../components/primary-button";
import "../../styles/top-deals-card.css"

let TopDealsCard = ({title, image, merchantLogo, price}) => {

    return(
        <div className="c-top-deals-card">
            <h3 className="c-top-deals-card__Title">{title}</h3>
            <div className="c-top-deals-card__ComparisonCheck">
                <input type="checkbox"/>
                <label> Add to compare</label><br/>
            </div>
            <div className="c-top-deals-card__MiddleContent">
                <div className="c-top-deals-card__MiddleConent">
                    <div className="image-holder">
                        <img src={image} alt="" />
                    </div>
                    <div className="merchant-info-section">
                        <div className="merchant-logo-holder">
                            <img src={merchantLogo} alt="" />
                        </div>
                        <span class="material-icons">info</span>
                    </div>
                    <h4>$ {price}</h4>
                    <PrimaryButton title="Get the deal"/>
                </div>

            </div>
        </div>
        
    )
}

export default TopDealsCard