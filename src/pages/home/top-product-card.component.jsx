import React from "react";
import "../../components/primary-button";
import PrimaryButton from "../../components/primary-button";
import "../../styles/top-product-card.component.css";

let ProductCard = ({
  title,
  image,
  currentPrice,
  previousPrice,
  percentageDiscount,
}) => {
  return (
    <div className="c-top-product-card">
      <h3 className="c-top-product-card__Title">{title}</h3>
      <div className="c-top-product-card__ComparisonCheck">
        <input type="checkbox" />
        <label> Add to compare</label>
        <br />
      </div>
      <div className="c-top-product-card__MiddleContent">
        <div className="c-top-product-card__MiddleConent">
          <div className="image-holder">
            <img src={image} alt="" />
          </div>
          <div className="c-top-product-card__Price">
            <h3>$ {currentPrice}</h3>
            <h4>$ {previousPrice}</h4>
          </div>
          <h4>{percentageDiscount}% off</h4>
          <PrimaryButton title={"View details"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
