import React from "react";
import image1 from './Group 1.png';
import './index.css';
import image2 from './Vector.png';
import image3 from './t-vec2.png';

function Navbar() {
    function toggler() {
        var tog = document.getElementById("toggler-item");

        tog.style.display = "flex";

        tog.style.justifyContent = "center";

        tog.style.alignItems = "center";

        var tog3 = document.getElementById("toggler");

        tog3.style.display = "none";

        var cross2 = document.getElementById("cross-sign");

        cross2.style.display = "block";
    }

    function cross() {
        var tog5 = document.getElementById("toggler-item");

        tog5.style.display = "none";

        var tog8 = document.getElementById("toggler");

        tog8.style.display = "block";

        var cross7 = document.getElementById("cross-sign");

        cross7.style.display = "none";
    }

    return <div id="main-div">
        <div id="navbar">
            <div>
                <img src={image1} alt="" />
            </div>
            <div id="links-1">
                <a id="anchor-1" href="#">Home</a>
                <a id="anchor-2" href="#">About Us</a>
                <a id="anchor-3" href="#">Blog</a>
                <a id="anchor-4" href="#">Contact</a>
            </div>
            <div id="links-2">
                <a href="#" id="anchor-5">Connect Now</a>
            </div>
            <div id="toggler">
                <img src={image2} onClick={toggler}/>
            </div>
            <div id="cross-sign">
                <img src={image3} onClick={cross} id="cross5"/>
            </div>
        </div>
        <div id="toggler-item">
            <div id="nav-i">
                <a id="anchor-6" href="#">Home</a>
                <a id="anchor-7" href="#">About Us</a>
                <a id="anchor-8" href="#">Blog</a>
                <a id="anchor-9" href="#">Contact</a>
                <a id="anchor-10" href="#">Connect Now</a>
            </div>
        </div>
    </div>
}

export default Navbar;