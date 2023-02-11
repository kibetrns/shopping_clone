import React from "react";

let NavBar = () => {
  return (
    <div className="c-nav">
      <div className="c-nav__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Shopping.com_logo.png"
          alt=""
        />
      </div>
      <div className="c-menu">
        <div className="c-menu__nav-link">
          <ul>
            <li className="c-menu__nav-link--all-categories">
              <h3>All Categories</h3>
              <span class="material-icons">menu</span>
            </li>
            <li>
              <h4>Top Categories</h4>
            </li>
            <li>
              <h4>Top Deals</h4>
            </li>
            <li>
              <h4>Top Products</h4>
            </li>
          </ul>
        </div>
        <div className="c-menu__social-link">
          <ul>
            <li>
              <span class="material-icons">install_desktop</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
