import React from "react";
import './about.css'
import TypeWriter from "typewriter-effect"

function About() {
    return (
        <section id="about">
            <div id="container-content">
                <h1 className="header">About me</h1>
                <img src="/portfolio/profile-picture.jpg" alt="Profile picture"/>
                <h2><TypeWriter
                    onInit={(typewriter)=> {
                        typewriter
                            .changeDelay(50)
                            .typeString("Hello, my name is Kaedin Schouten")
                            .start()
                    } }/></h2>
                <p id="text-about"><TypeWriter
                    onInit={(typewriter)=> {
                        typewriter
                            .pauseFor(2500)
                            .changeDelay(5)
                            .typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus. Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis. Pellentesque mollis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus. Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis. Pellentesque mollis<br/><br/> non eros ac facilisis. Ut consequat gravida dui a volutpat. Praesent facilisis vulputate pellentesque. Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis. Pellentesque mollis vehicula lorem, ac semper sapien dapibus at. Aliquam erat volutpat. Cras eleifend aliquet magna quis pretium. Pellentesque sit amet est nec metus euismod molestie sit amet ac nulla. Aenean eu tristique mi, ut porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt magna non ex mattis cursus. Quisque efficitur dui et urna sagittis pharetra. In suscipit nisl semper venenatis mattis. Pellentesque mollis<br/><br/> tellus. Pellentesque odio justo, fermentum et neque in, congue dictum purus. Donec eu convallis enim, eu.")
                            .start()
                    } }/></p>
            </div>
        </section>
    );
}

export default About
