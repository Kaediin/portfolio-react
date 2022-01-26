import React from "react";
import Resumeheader from "../sections/resume/resumeheader";
import Resumebiography from "../sections/resume/resumebiography";
import Resumetimelines from "../sections/resume/resumetimelines";

function Resume() {
    return (<div>
            <Resumeheader/>
            <Resumebiography/>
            <Resumetimelines/>
        </div>
    );
}

export default Resume
