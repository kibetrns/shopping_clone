import React from "react";
import SearchBar from "../../components/search-bar"
import '../../styles/home-page-hero.component.css'

let HomePageHero = () => {

    return(
        <div className="hero">
            <h1 className="hero__title">Search over a million products on Shopping.com</h1>
            <SearchBar />
        </div>
    )
}

export default HomePageHero