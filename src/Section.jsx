import React from "react";
import './section.css';
import image7 from './window-vec.png';
import image8 from './Apple-vec.png';
import image9 from './Group 276.png';

function Section() {
    return <div id="main-sec">
        <div id="sec-div">
            <div id="div-1">
                <p id="para-1">Why Wait to Connect with your favourite People?</p>
                <p id="para-2">Now its easy to join your friends & family with <span id="para-3">ka-net</span>. Download and connect seemlessly with anyone around the world.</p>
                <div id="div-5">
                    <a id="anchor-11" href="#">Download Now</a>
                    <div id="image-d">
                        <img src={image7} />
                        <img src={image8} />
                    </div>
                </div>
            </div>
            <div id="image-d2">
                <img src={image9} id="image-9"/>
            </div>
        </div>
    </div>
}

export default Section;