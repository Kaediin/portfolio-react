import React from "react";
import {Link} from "react-scroll";
import "./navbar.css"

const duration = 500;

function Navbar() {
    return (
        <nav id="navbar">
            <div id="container-navbar">
                <ul>
                    <Link to="home" spy={true} smooth={true} duration={duration} activeClass="active"><li>Home</li></Link>
                    <Link to="about" spy={true} smooth={true} duration={duration} activeClass="active"><li>About</li></Link>
                    <Link to="projects" spy={true} smooth={true} duration={duration} activeClass="active"><li>Projects</li></Link>
                    <Link to="contact" spy={true} smooth={true} duration={duration} activeClass="active"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
