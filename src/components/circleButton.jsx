import React from "react";
import "./circleButton.css"

function CircleButton(props) {

    return <div id="container-circle-button">
        <div id="container-content-circle-button">
            <a href={props.url} target="_blank"><img src={props.image} alt={props.imageAltText} className={props.invert ? 'invert' : ''}/></a>
        </div>
    </div>
}

export default CircleButton
