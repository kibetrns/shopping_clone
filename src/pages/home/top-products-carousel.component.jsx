import React from "react";
import ProductCard from "./top-product-card.component";


let TopProductsCarousel = () => {


        //TODO("map list of top deas that is passed as prop")

        const TOP_PRODUCTS = {
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a exercitationem?",
            image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Floremipsum.io%2Fassets%2Fimages%2Florem-ipsum-generator-custom-placeholder-text.jpg&imgrefurl=https%3A%2F%2Floremipsum.io%2F&tbnid=r2jzJfYw7jxFQM&vet=12ahUKEwjWpsjNq5X9AhXkSqQEHetfC04QMygNegUIARCBAg..i&docid=AHOKqKjlgkOhfM&w=1440&h=720&q=image%20of%20lorem&client=firefox-b-e&ved=2ahUKEwjWpsjNq5X9AhXkSqQEHetfC04QMygNegUIARCBAg",
            merchantLogo: "/src/assets/800px-EBay_logo.png",
            currentPrice: 2.29,
            previousPrice: 4.29,
            percentageDiscount: 50
          }
    
        return(
            <div className="c-Top-Deals-Carousel">
                 <ProductCard
                title={TOP_PRODUCTS.title}
                image={TOP_PRODUCTS.image}
                currentPrice={TOP_PRODUCTS.currentPrice}
                previousPrice={TOP_PRODUCTS.previousPrice}
                percentageDiscount={TOP_PRODUCTS.percentageDiscount}
          />
          </div>   
        )
}

export default TopProductsCarousel