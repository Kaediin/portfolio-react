import React from "react";
import Resumeheader from "../sections/resume/resumeheader";
import Resumebiography from "../sections/resume/resumebiography";
import Resumetimelines from "../sections/resume/resumetimelines";
import Footer from "../sections/footer";
import "./resume.css"

function Resume() {
    return (<div id="resume">
            <div id="resume-content">
                <Resumeheader/>
                <Resumebiography/>
                <Resumetimelines/>
            </div>
            <Footer/>
        </div>
    );
}

export default Resume
