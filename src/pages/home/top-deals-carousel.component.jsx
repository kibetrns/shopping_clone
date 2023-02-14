import React from "react";
import TopDealsCard from "./top-deals-card";
import "../../styles/top-deals-carousel.component.css"

let TopDealsCarousel = () => {

    //TODO("map list of top deas that is passed as prop")

    const TOP_DEALS = {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a exercitationem?",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Floremipsum.io%2Fassets%2Fimages%2Florem-ipsum-generator-custom-placeholder-text.jpg&imgrefurl=https%3A%2F%2Floremipsum.io%2F&tbnid=r2jzJfYw7jxFQM&vet=12ahUKEwjWpsjNq5X9AhXkSqQEHetfC04QMygNegUIARCBAg..i&docid=AHOKqKjlgkOhfM&w=1440&h=720&q=image%20of%20lorem&client=firefox-b-e&ved=2ahUKEwjWpsjNq5X9AhXkSqQEHetfC04QMygNegUIARCBAg",
        merchantLogo: "/src/assets/800px-EBay_logo.png",
        price: 4.29
      }

    return(
        <div className="c-Top-Deals-Carousel">
             <TopDealsCard
            title={TOP_DEALS.title}
            image={TOP_DEALS.image}
            price={TOP_DEALS.price}
            merchantLogo={TOP_DEALS.merchantLogo}
      />
      </div>
        
    )
}

export default TopDealsCarousel
