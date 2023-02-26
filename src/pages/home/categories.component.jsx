import React, { useEffect, useState } from "react";
import CategoryCard from "./category-card.component";
import dummyImage from "../../assets/todo_.jpeg";
import "../../styles/categories.component.css";

let Categories = ({categories}) => {


  return (
    <div className="c-Categories-Carousel">
      {categories.map((category) => (
        <CategoryCard title={category} image={dummyImage} />
      ))}
    </div>
  );
};

export default Categories;
