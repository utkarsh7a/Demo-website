import React from "react";
import cultural from './cultural.png';
import western from './western.png';
import modern from './modern.png';

function Design(){
    return(
        <section className="mt-5 mb-3" id="design">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-md-12 ">
                        <h2 className="text-danger">Design</h2>
                        <p>We are providing different types of cloth from all over the world and provides a cloth with differnt culture.</p>
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <div className="col-md-4 ">
                        <div className="card">
                            <div className="card-title mt-3">
                                <h2>Cultural</h2>
                                {/* <h4>we are providing a branded clothes with different brands from all over the world with different culture.</h4> */}
                            </div>
                            <div className="card-body">
                                <img src={cultural} alt="cultural" className="img-fluid"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="card">
                            <div className="card-title mt-3">
                                <h2>Western</h2>
                                {/* <p>we are providing a branded clothes with different brands from all over the world with different culture.</p> */}
                            </div>
                            <div className="card-body">
                                <img src={western} alt="cultural" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="card">
                            <div className="card-title mt-3">
                                <h2>Modern</h2>
                                {/* <p>we are providing a branded clothes with different brands from all over the world with different culture.</p> */}
                            </div>
                            <div className="card-body">
                                <img src={modern} alt="modern" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}

export default Design;