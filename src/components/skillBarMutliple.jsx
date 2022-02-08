import React from "react";
import SkillBar from "./skillBar";
import "./skillBarMutliple.css"

class SkillBarMutliple extends React.Component{

    render() {

        const skillBars = []
        this.props.skills.forEach(skill => skillBars.push(<SkillBar skill={skill}/>))

        return <div id="container-skill-multiple">
            <h3>My time spent on the various software at {this.props.company}</h3>
            {skillBars}
        </div>
    }
}

export default SkillBarMutliple
