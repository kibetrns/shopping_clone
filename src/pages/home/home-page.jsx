import React, { useEffect, useState } from "react";
import HomePageHero from "./home-page-hero.component";
import GroupingHeader from "./grouping-header.component";
import Categories from "./categories.component";
import TopDealsCarousel from "./top-deals-carousel.component";
import TopProductsCarousel from "./top-products-carousel.component";

let HomePage = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let loadCategories = async () => {
      let response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      let data = await response.json();

      setCategories(data);
    };
    loadCategories();
  }, []);


  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    let allProducts = async () => {
      let response = await fetch("https://fakestoreapi.com/products");

      let data = await response.json();

      setAllProducts(data);
    };
    allProducts();
  }, []);

  const filterdTopProducts = allProducts.sort((a, b) => {
    const aProduct = a.rating.rate;
    const bProduct = b.rating.rate;
    return bProduct - aProduct;
  });

  const topFiveProducts = filterdTopProducts.slice(0, 5);

  const filteredTopDeals = allProducts.sort((a, b) => {
    return b.price - a.price;
  });

  //TODO("Find a way to display images of categories")

  const topFiveDeals = filteredTopDeals.slice(0, 5);

  const GROUPING_HEADER_TITLE_LEFT = {
    topCategories: "Top Categories",
    topDeals: "Top Deals",
    topProducts: "Top Products",
  };
  const GROUPING_HEADER_TITLE_RIGHT = {
    seeMore: "See More",
  };

  return (
    <>
      <HomePageHero />
      <GroupingHeader
        titleLeft={GROUPING_HEADER_TITLE_LEFT.topCategories}
        titleRight={GROUPING_HEADER_TITLE_RIGHT.seeMore}
      />
      <Categories categories={categories} />
      <GroupingHeader
        titleLeft={GROUPING_HEADER_TITLE_LEFT.topDeals}
        titleRight={GROUPING_HEADER_TITLE_RIGHT.seeMore}
      />
      <TopDealsCarousel topFiveDeals={topFiveDeals} />
      <GroupingHeader
        titleLeft={GROUPING_HEADER_TITLE_LEFT.topProducts}
        titleRight={GROUPING_HEADER_TITLE_RIGHT.seeMore}
      />
      <TopProductsCarousel topFiveProducts={topFiveProducts} />
    </>
  );
};

export default HomePage;
