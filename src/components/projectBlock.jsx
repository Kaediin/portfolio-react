import React from "react";
import './projectBlock.css'
import CircleButton from "./circleButton";

function ProjectBlock(props) {

    const project = props.project;
    var softwaresDom = [];
    project.softwares.forEach(software => {
        softwaresDom.push(<p className="software-row">{software}</p>)
    })

    const iconsFolder = "/portfolio/icons/"

    return (<div id="container-component-project-block" className="hvr-grow">
        <div id="container-content">
            <h2><strong>{project.company}</strong></h2>
            <p id="project-company">{project.type}</p>
            <img src={iconsFolder + project.icon} alt="project icon"/>
            <div id="container-software">{softwaresDom}</div>
            <hr/>
            <p id="description">{project.description}</p>
        </div>
        <div id="container-icons">
            {(() => {
                let icons = []
                if (project.webUrl !== undefined) {
                    icons.push(<CircleButton url={project.webUrl} image={iconsFolder + "ic-globe.png"}
                                             imageAltText="Website" invert={true}/>)
                }
                if (project.githubUrl !== undefined) {
                    icons.push(<CircleButton url={project.githubUrl} image={iconsFolder + "ic-github.png"}
                                             imageAltText="Github" invert={true}/>)
                }
                return icons
            })()}
        </div>
    </div>);
}

export default ProjectBlock;
