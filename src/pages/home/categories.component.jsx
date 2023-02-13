import React from "react";
import CategoryCard from "./category-card.component";
import '../../styles/categories.component.css'

let Categories = () => {

    const categoryTitle = "Clothing and Accessories"
    const categoryImage = "/src/assets/img_1_10000000.jpg"

    return(
        <div className="c-Categories-Carousel">
            <CategoryCard  
        title={categoryTitle}
        image={categoryImage}
      />
        </div>
    )
}

export default Categories