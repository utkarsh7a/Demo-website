import React from "react";
import brand from './brand.png';
function Homepage(){
    return(
        <div className="position-relative">
            <img src={brand} alt="brandimage" className="w-100"/>
            <div className="overlay">
                <h2>Uk Fashion</h2>
                <p>We have all types of clothes from all over the world. <br /> Must visit to our store and see for more..</p>
                <a href="#learn" className="btn learnMore">Shop now</a>
            </div>
        </div>
    );
}

export default Homepage;