import React from "react";
import './landingpage.css'
import ButtonLandingPage from "../../components/buttonLandingPage";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const arrowPath = "/portfolio/icons/ic-arrow.png";

function Landingpage() {
    return (
        <section id="home">
            <div id="container-content">
                <h1 id="name">Kaedin Schouten</h1>
                <p id="title">Software Developer</p>
                <div id="container-nav-button">
                    <div className="button" id="button-about-me">
                        <LinkScroll to="about" spy={true} smooth={true} duration={500}><ButtonLandingPage text="About me" imagePath={arrowPath} altText="arrow"/></LinkScroll>
                    </div>
                    <div className="button" id="button-cv">
                        <Link to="/Resume"><ButtonLandingPage text="Curriculum Vitae" imagePath={arrowPath}
                                           altText="arrow"/></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landingpage
