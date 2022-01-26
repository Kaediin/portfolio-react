import React from "react";
import "./resumeheader.css"

function Resumeheader() {
    return (<section id="cvheader">
            <div id="container-content">
                <div id="container-left">
                    <h1>Kaedin Schouten</h1>
                    <p>Software Developer Freelancer</p>
                    <br/>
                    <table>
                        <tr>
                            <td className="column-left"><strong>Date of birth</strong></td>
                            <td>February 8th 2002, Almere, The Netherlands</td>
                        </tr>
                        <tr>
                            <td className="column-left"><strong>Phone</strong></td>
                            <td>(+31) 6 46 44 60 75</td>
                        </tr>
                        <tr>
                            <td className="column-left"><strong>Email</strong></td>
                            <td><a href="mailto:skaedin@gmail.com">skaedin@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td className="column-left"><strong>KVK</strong></td>
                            <td>80897800</td>
                        </tr>
                    </table>
                </div>
                <div id="container-right">
                    <img src="/portfolio/profile-picture.jpg" alt="profile picture"/>
                </div>
            </div>
        </section>
    )
}

export default Resumeheader
