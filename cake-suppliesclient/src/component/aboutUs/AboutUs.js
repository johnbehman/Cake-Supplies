import React from "react";
import "./AboutUs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import logo from "../images/logo.png"
import img1 from "../images/img1.png"



export const AboutUs = () => {
    return (
        <>


{/* <Carousel className="main-Slide">
                <div>
                    <img src={img1} height="300px" width="200px"/>
                </div>
                <div>
                    <img src={logo} height="300px" width="200px"/>
                </div>
                <div>
                    <img src="assets/3.jpeg" height="300px" width="200px" />
                </div>
            </Carousel> */}
            <div className="mainAboutUs">
                <div className="mainPar">
                    <h2 className="headerAboutUs">About Us</h2>
                    <div className="">
                       <p className="info-paragraph">
                             Cake Supplies on Sale was established in 2013 by a team of young entrepreneurs that shared the same passion for cakes and pastries.
                            Within a year of selling our products on Amazon.com and reaching thousands of customers,
                           the team decided to expand its product selection and customer base to remain a forerunner in the industry.

                         Our mission is to provide the best quality products at the lowest price on the market and at the same time provide exemplary customer service.
                             To fulfill our client needs, we continue to grow our product variety and negotiate lower prices with our vendors.

                             Sincerely,
                            “Cake Supplies On Sale” Team
                        </p>
                     </div>
                 </div>
             </div>
         </>
    );
};