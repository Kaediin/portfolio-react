import React from "react";
import '../sections/portfolio/landingpage.css'
import {Link} from "react-router-dom";
import "./nopage.css"

function Nopage() {
    return (<div id="redirect-link">
        <Link to="/"><h1>Oh oh! It seems you have been redirected to a page that doesnt exist! <br/>Click on any text to go back!</h1></Link>
        </div>
    );
}

export default Nopage
