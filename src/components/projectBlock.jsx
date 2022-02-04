import React, {useRef} from "react";
import './projectBlock.css'
import CircleButton from "./circleButton";
import SkillBarMutliple from "./skillBarMutliple";

class ProjectBlock extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    showDetails(e) {
        if (e.nativeEvent.path[1].classList.contains('show-details')){
            e.nativeEvent.path[1].classList.remove('show-details')
            e.nativeEvent.path[1].classList.add('hvr-grow')
            this.forceUpdate()
        } else {
        e.nativeEvent.path[1].classList.add('show-details')
        e.nativeEvent.path[1].classList.remove('hvr-grow')
        }
    }

    render() {
        const project = this.props.project;
        var softwaresDom = [];
        project.softwares.forEach(software => {
            softwaresDom.push(<p className="software-row">{software}</p>)
        })
        const iconsFolder = "/portfolio/icons/"

        const domCompany = <h2><strong>{project.company}</strong></h2>
        const domType = <p id="project-company">{project.type}</p>
        const domIcon = <img id="project-logo" src={iconsFolder + project.icon} alt="project icon"/>
        const domNavIcons = <div id="container-icons">
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

        return <div ref={this.myRef} id="container-component-project-block" className="start-animation hvr-grow"
                    onClick={this.showDetails}>
            <div id="container-content">
                {domCompany}
                {domType}
                {domIcon}
                <div id="container-software">{softwaresDom}</div>
                <hr/>
                <p id="description">{project.description}</p>
                {domNavIcons}
            </div>
            <div id="container-content-details">
                <div id="container-details-header">
                    <div id="container-details-icon-text">
                        <div id="container-details-header-left">
                            <img id="details-image" src={iconsFolder + project.icon} alt="project icon"/>
                        </div>
                        <div id="container-details-header-right">
                            <h2><strong>{project.company}</strong></h2>
                            <p id="project-company">{project.type}</p>
                        </div>
                    </div>
                    <div id="container-details-header-right-icons">
                        {domNavIcons}
                    </div>
                </div>
                <p>{project.details.description}</p>
                <div id="container-details-skills">
                    <SkillBarMutliple skills={project.details.skills}/>
                </div>
            </div>

        </div>;
    }
}

export default ProjectBlock;
