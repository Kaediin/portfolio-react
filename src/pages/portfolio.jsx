import React from "react";
import Landingpage from "../sections/portfolio/landingpage";
import Navbar from "../sections/portfolio/navbar";
import About from "../sections/portfolio/about";
import Projects from "../sections/portfolio/projects";
import Contact from "../sections/portfolio/contact";
import Footer from "../sections/footer";
import Skills from "../sections/portfolio/skills";

class Portfolio extends React.Component{
    render() {
        return <div>
            <Landingpage />
            <Navbar/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    }


}

export default Portfolio
