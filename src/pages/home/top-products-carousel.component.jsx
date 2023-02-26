import React, { useEffect, useState } from "react";
import ProductCard from "./top-product-card.component";
import "../../styles/top-products-carousel.component.css";

let TopProductsCarousel = ({ topFiveProducts }) => {
  const TOP_PRODUCT_CARD = {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a exercitationem?",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Floremipsum.io%2Fassets%2Fimages%2Florem-ipsum-generator-custom-placeholder-text.jpg&imgrefurl=https%3A%2F%2Floremipsum.io%2F&tbnid=r2jzJfYw7jxFQM&vet=12ahUKEwjWpsjNq5X9AhXkSqQEHetfC04QMygNegUIARCBAg..i&docid=AHOKqKjlgkOhfM&w=1440&h=720&q=image%20of%20lorem&client=firefox-b-e&ved=2ahUKEwjWpsjNq5X9AhXkSqQEHetfC04QMygNegUIARCBAg",
    merchantLogo: "/src/assets/800px-EBay_logo.png",
    currentPrice: 2.29,
    previousPrice: 4.29,
    percentageDiscount: 50,
  };

  return (
    <div className="c-Product-Carousel">
      {topFiveProducts.map((topProduct) => (
        <ProductCard
          title={topProduct.title}
          image={topProduct.image}
          currentPrice={topProduct.price}
          previousPrice={topProduct.price * 0.5}
          percentageDiscount={50}
        />
      ))}
    </div>
  );
};

export default TopProductsCarousel;
