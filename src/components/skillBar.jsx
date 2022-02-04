import React from "react";
import "./skillBar.css"

class SkillBar extends React.Component {

    render() {
        return <div className="container-skill-item">
            <div className="container-content-skill">
                <div className="skill-item-image">
                    <img src={"/portfolio/icons/"+this.props.skill.icon}/>
                </div>
                <div className="cointainer-skill-progress">
                    <div className="skill-item-progress" style={{width: this.props.skill.strength+"%"}}/>
                </div>
            </div>
        </div>
    }
}

export default SkillBar;
