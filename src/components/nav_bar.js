import React from "react";
import './nav1.css';
function Navbar1(){
    return(
        <nav className="navbar navbar-expand-lg shadow sticky-top ">
            <a href="#brand"  className="navbar-brand"><span className="text-success ms-5" ><b>UK Fashion</b></span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item">
                    <a href="#home" className="nav-link ">Home</a>
                </li>

                <li className="nav-item">
                    <a href="#about" className="nav-link">About</a>
                </li>

                <li className="nav-item">
                    <a href="#services" className="nav-link">Services</a>
                </li>

                <li className="nav-item">
                    <a href="#design" className="nav-link">Design</a>
                </li>

                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>

                <li className="nav-item ">
                    <a href="#search" className="btn btn-sm mt-1 border mx-1">Search</a>
                </li>

                <li className="nav-item mt-1">
                    <a href="#contact" className="btn btn-sm btn-success">Register/Login</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar1;