import React from "react";
import "./skills.css"
import Bubble from "../../components/bubble";

class Skills extends React.Component{

    render() {
        const skills = [
            {
                title: "Java",
                icon: "ic-java.png",
                strength: 160
            },
            {
                title: "Python",
                icon: "ic-python.png",
                strength: 140
            },
            {
                title: "Kotlin",
                icon: "ic-kotlin.png",
                strength: 140
            },
            {
                title: "TypeScript",
                icon: "ic-typescript.png",
                strength: 135
            },
            {
                title: "Creative Problem Solving",
                strength: 150
            },
            {
                title: "Will to learn",
                strength: 160
            },
            {
                title: "Team player",
                strength: 150
            },
            {
                title: "Perseverance",
                strength: 145
            },
        ]
        shuffle(skills)
        console.log('hello world')
        const bubblessContainer = []
        skills.forEach(skill => bubblessContainer.push(<Bubble skill={skill}/>))

        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }

        return <section id="skills">
            <div id="container-content">
                <h1 className="header">Skills</h1>
                <div id="container-skills">
                    {bubblessContainer}
                </div>
            </div>
        </section>
    }
}

export default Skills;
