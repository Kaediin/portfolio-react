import React from "react";
import './buttonLandingPage.css'

function ButtonLandingPage(props){
    return (<div id="container-component-button">
        <p id="container-component-button-text">{props.text}</p>
        <img id="container-component-button-image" src={props.imagePath} alt={props.altText}/>
    </div>);
}

export default ButtonLandingPage;
