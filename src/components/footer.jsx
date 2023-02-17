import React from "react";
import "./../styles/footer.css"


let Footer = () => {

    return(

        <div className="c-footer">
            <div className="c-footer__Top">

                <div className="about">
                    <h4>About</h4>
                    <div className="about-content">
                        <a href=""><p>Home</p></a>
                        <a href=""><p>About Us</p></a>
                        <a href=""><p>Jobs</p></a>
                        <a href=""><p>Contact us</p></a>
                        <a href=""><p>Privacy</p></a>
                        <a href=""><p>User Agreement</p></a>
                        <a href=""><p>Return and Refund Policy</p></a> 
                    </div>
                </div>

                <div className="helpful-Stuff">
                    <h4>Helpful Stuff</h4>
                    <div className="helpful-stuff-content">
                        <a href=""><p>Site Index</p></a>
                        <a href=""><p>Top Products</p></a>
                        <a href=""><p>Top Deals</p></a>
                    </div>
                </div>

                <div className="eBay-Family">
                    <h4>e-Bay</h4>
                    <div className="eBay-Family-content">
                        <a href=""><p>eBay User Aggreement</p></a>
                        <a href=""><p>Free Local Classifieds</p></a>
                    </div>
                </div>

                <div className="shopping-Sites">
                    <h4>Shopping Sites</h4>
                    <div className="shopping-Sites__Container">

                        <a href="">
                            <div className="country-image-and-name-container">
                                <div className="country-image-card-holder">
                                    <img src="/src/assets/flag-of-France.png" alt="" />
                                </div>
                                <p>France</p>
                            </div>
                        </a>

                        <a href="">
                            <div className="country-image-and-name-container">
                                <div className="country-image-card-holder">
                                    <img src="/src/assets/flag-of-Germany.png" alt="" />
                                </div>
                                <p>Germany</p>
                            </div>
                        </a>

                        <a href="">
                            <div className="country-image-and-name-container">
                                <div className="country-image-card-holder">
                                    <img src="/src/assets/flag-of-United-Kingdom.png" alt="" />
                                </div>
                                <p>United Kingdom</p>
                            </div>
                        </a>

                        <a href="">
                            <div className="country-image-and-name-container">
                                <div className="country-image-card-holder">
                                    <img src="/src/assets/flag-of-Italy.png" alt="" />
                                </div>
                                <p>Italy</p>
                            </div>
                        </a>

                        <a href="">
                            <div className="country-image-and-name-container">
                                <div className="country-image-card-holder">
                                    <img src="/src/assets/flag-of-Spain.png" alt="" />
                                </div>
                                <p>Spain</p>
                            </div>
                        </a>

                        <a href="">
                            <div className="country-image-and-name-container">
                                <div className="country-image-card-holder">
                                    <img src="/src/assets/flag-of-United-States-of-America.png" alt="" />
                                </div>
                                <p>USA</p>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
            
            <div className="c-footer__Middle">
                <p>
                Shopping.com is a leading price comparison site that allows you to shop online for the best deals and 
                lowest prices. Our mission is to help consumers use the power of information to easily find, 
                compare and buy products online - in less time and for the best price! You can read unbiased product reviews and 
                compare prices online. Online shopping has never been as easy! Browse our large selection of fashion, clothing, 
                consumer electronics, home and garden products now.
                </p>
            </div>

            <div className="c-footer__Copyright">
                Copyright © 2019-2023 eBay Inc. All Rights Reserved
            </div>

        </div>

    )
}

export default Footer;