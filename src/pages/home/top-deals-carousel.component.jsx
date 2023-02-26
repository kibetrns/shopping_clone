import React, { useEffect, useState } from "react";
import TopDealsCard from "./top-deals-card.component";
import defaultEbayLogo from "../../assets/800px-EBay_logo.png";
import "../../styles/top-deals-carousel.component.css";

let TopDealsCarousel = ({ topFiveDeals }) => {
  return (
    <div className="c-Top-Deals-Carousel">
      {topFiveDeals.map((topDeal) => (
        <TopDealsCard
          title={topDeal.title}
          image={topDeal.image}
          price={topDeal.price}
          merchantLogo={defaultEbayLogo}
        />
      ))}
    </div>
  );
};

export default TopDealsCarousel;
