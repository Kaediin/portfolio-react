import React from "react";
import './projectBlock.css'

function ProjectBlock(props) {

    const project = props.project;
    var softwaresDom = [];
    project.softwares.forEach(software => {
        softwaresDom.push(<p className="software-row">{software}</p>)
    })

    return (<div id="container-component-project-block" className="hvr-grow">
        <div id="container-content">
            <h2>{project.type}</h2>
            <img src={"/portfolio/icons/"+project.icon} alt="project icon"/>
            <div id="container-software">{softwaresDom}</div>
            <hr/>
            <p id="description">{project.description}</p>
        </div>
    </div>);
}

export default ProjectBlock;
