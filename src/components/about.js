import React from "react";
import image from './about.png';

function About(){
    return(
        <section id="about" className="about section-padding mt-5 mb-5 bg-light">
        <div class="container">
            <div class="row">
                <div className="col-lg-4 col-md-12 col-12 " >
                    <div className="about-img">
                        <img src={image} alt="" className="img-fluid image border border-light border-3 " />
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 ps-lg-5 md-5">
                    <div className="about-text">
                        <h2>We provide best quality</h2>
                        <p>We provide a best quality of clothes with different <br /> brands from all over the world.</p>
                        <a href="#link" className="btn btn-warning">Shop now</a>
                    </div>
                </div>
            </div>

            
        </div>
    </section>

    );
}
export default About;