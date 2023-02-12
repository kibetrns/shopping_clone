import React from "react";
import '../styles/search-bar.css'

let SearchBar = () => {
    return(
        <div className="c-searchBar">
            <div className="c-SearchBar__Filter">
                <p>Search By</p>
                <span class="material-icons">arrow_drop_down</span>
            </div>
            <div className="vertical-line"/>
            <input type="text" placeholder="What are you shopping for?" className="c-SearchBar__Input"/>
            <button className="c-SeachBar__Button">
                Search
            </button>
            

        </div>
    )
}

export default SearchBar