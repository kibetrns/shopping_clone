import React from "react";
import '../../styles/category-card.component.css'

let CategoryCard = ({title, image}) => {

    return(
        <div className="c-category-card">
            <p className="c-category-card__Title">{title}</p>
            <div className="c-category-card__ImageHolder">
                <img src= {image} alt="" />
            </div>
        </div>

    )

}

export default CategoryCard