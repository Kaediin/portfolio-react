import React from "react";
import "./bubble.css"

class Bubble extends React.Component {

    render() {

        const skill = this.props.skill
        //TODO: onclick https://stackoverflow.com/questions/59670425/circle-to-fill-a-container-animation
        return <div className="container-content-bubble" style={{width: skill.strength, height: skill.strength}}>
            {(() => {
                if (skill.icon !== undefined) {
                    return <img src={"/portfolio/icons/" + skill.icon} style={{width: 75}}/>
                } else {
                    return <h4>{skill.title}</h4>
                }
            })()}
        </div>
        // </div>
    }
}

export default Bubble
