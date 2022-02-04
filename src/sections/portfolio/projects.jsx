import React from "react";
import './projects.css'
import ProjectBlock from "../../components/projectBlock";

function Projects() {

    const projects = [
        {
            id: 0,
            type: "Android App",
            description: "This Android-project is a simple app that displays the Reflex-Online web-application in an app, with added functionality like: LED-lights to show the booking-status, scheduled log uploads, and automatic reboots.",
            company: "Reflex-online",
            icon: "ic-roommanager.png",
            softwares: [
                "Android",
                "XML",
                "Java | Kotlin"
            ],
            webUrl: "https://www.reflex-online.com/",
            details : {
                description: "Identify test robust leverage eye is foster user divide. Have streamlined information real and view x value long have innovation offshoring from overall overviews. Identify a is activity grow disruptive offshoring strategy runway normal close provide with heading win. Agile from immersion disruptive proposition level normal maximise. Going frameworks fruit loop tail have holistic survival." +
                    "X keeping offline empowerment proposition immersion capitalize empowerment identify operational offline performing generation with mentality. Of in along end diversity up world divide your override for. Keeping long overall runway leverage user diversity additional. Highway corporate mentality thinking disruptive on robust solution of start long. With innovation ballpark your low via fruit podcasting override low proposition fruit is disruptive.",
                skills: [
                    {
                        title: "Java",
                        icon: "ic-java.png",
                        strength: 75
                    },
                    {
                        title: "Kotlin",
                        icon: "ic-kotlin.png",
                        strength: 25
                    },
                    {
                        title: "Typescript",
                        icon: "ic-typescript.png",
                        strength: 50
                    }
                ]
            }
        },
        {
            id: 1,
            type: "Website",
            description: "A simple website for the restaurant chain Willie Wong in The Netherlands. This website is currently in the early stage of its development.",
            company: "WillieWong",
            icon: "ic-williewong.png",
            softwares: [
                "VueJS",
                "JavaScript",
            ],
            webUrl: "https://williewong.nl/",
            details : {
                description: "Identify test robust leverage eye is foster user divide. Have streamlined information real and view x value long have innovation offshoring from overall overviews. Identify a is activity grow disruptive offshoring strategy runway normal close provide with heading win. Agile from immersion disruptive proposition level normal maximise. Going frameworks fruit loop tail have holistic survival." +
                    "X keeping offline empowerment proposition immersion capitalize empowerment identify operational offline performing generation with mentality. Of in along end diversity up world divide your override for. Keeping long overall runway leverage user diversity additional. Highway corporate mentality thinking disruptive on robust solution of start long. With innovation ballpark your low via fruit podcasting override low proposition fruit is disruptive.",
                skills: [
                    {
                        title: "Java",
                        icon: "ic-java.png",
                        strength: 75
                    },
                    {
                        title: "Kotlin",
                        icon: "ic-kotlin.png",
                        strength: 25
                    },
                    {
                        title: "Typescript",
                        icon: "ic-typescript.png",
                        strength: 50
                    }
                ]
            }
        },
        {
            id: 2,
            type: "Web Application",
            description: "Eelloo their platform is primarily used as an e-assessment platform. Here candidates can take assessments for various work-related reasons (Recruitment, Employability, Promotion, etc).",
            company: "Eelloo",
            icon: "ic-eelloo.png",
            softwares: [
                "Java",
                "TypeScript",
                "PostgreSQL"
            ],
            webUrl: "https://eelloo.nl/",
            details : {
                description: "Identify test robust leverage eye is foster user divide. Have streamlined information real and view x value long have innovation offshoring from overall overviews. Identify a is activity grow disruptive offshoring strategy runway normal close provide with heading win. Agile from immersion disruptive proposition level normal maximise. Going frameworks fruit loop tail have holistic survival." +
                    "X keeping offline empowerment proposition immersion capitalize empowerment identify operational offline performing generation with mentality. Of in along end diversity up world divide your override for. Keeping long overall runway leverage user diversity additional. Highway corporate mentality thinking disruptive on robust solution of start long. With innovation ballpark your low via fruit podcasting override low proposition fruit is disruptive.",
                skills: [
                    {
                        title: "Java",
                        icon: "ic-java.png",
                        strength: 75
                    },
                    {
                        title: "Kotlin",
                        icon: "ic-kotlin.png",
                        strength: 25
                    },
                    {
                        title: "Typescript",
                        icon: "ic-typescript.png",
                        strength: 50
                    }
                ]
            }
        },
        {
            id: 3,
            type: "Web Application",
            description: "Ancora helps people take their health to the next level with a groundbreaking range of preventive health and care programs for employers, individuals and primary care providers.",
            company: "Ancora Health",
            icon: "ic-ancora.png",
            softwares: [
                "Java",
                "TypeScript",
                "Mongo",
                "GraphQL"
            ],
            webUrl: "https://ancora.health/",
            githubUrl: "https://ancora.health/",
            details : {
                description: "Identify test robust leverage eye is foster user divide. Have streamlined information real and view x value long have innovation offshoring from overall overviews. Identify a is activity grow disruptive offshoring strategy runway normal close provide with heading win. Agile from immersion disruptive proposition level normal maximise. Going frameworks fruit loop tail have holistic survival." +
                    "X keeping offline empowerment proposition immersion capitalize empowerment identify operational offline performing generation with mentality. Of in along end diversity up world divide your override for. Keeping long overall runway leverage user diversity additional. Highway corporate mentality thinking disruptive on robust solution of start long. With innovation ballpark your low via fruit podcasting override low proposition fruit is disruptive.",
                skills: [
                    {
                        title: "Java",
                        icon: "ic-java.png",
                        strength: 75
                    },
                    {
                        title: "Kotlin",
                        icon: "ic-kotlin.png",
                        strength: 25
                    },
                    {
                        title: "Typescript",
                        icon: "ic-typescript.png",
                        strength: 50
                    }
                ]
            }
        }
        //     type: "Mobile App",
        //     description: "In this app you can stay up to date with all of the latest rocket-news regarding SpaceX. This app shows all the launches, its details, and way more. Currently also in development for I(PAD-)OS.",
        //     icon: "ic-spacex.png",
        //     softwares: [
        //         "Kotlin",
        //         "Firebase",
        //         "RestAPI"
        //     ],
        // },
        // {
        //     type: "Web application",
        //     description: "This website is a recipebook application in which a user can create, update, read, and delete recipes. Each recipe has: method, ingredients, pictures, tags, and total time to make.",
        //     icon: "ic-recipebook.png",
        //     softwares: [
        //         "Django",
        //         "Firebase",
        //         "Python"
        //     ]
        // },
        // {
        //     type: "Android App",
        //     description: "With this app you easily setup a scavenger-hunt in which you can setup a quiz at each location. The app uses its GPS location to know if the user is in range of the target. This app is currently in beta-testing.",
        //     icon: "ic-scavengerhunt.png",
        //     softwares: [
        //         "Kotlin",
        //         "XML",
        //         "Firebase"
        //     ],
        //     githubUrl: "https://github.com/Kaediin/ScavengerHunt"
        // }
        // {
    ]

    const projectsDom = [];
    projects.forEach(project => {
        projectsDom.push(<ProjectBlock project={project} key={project.id}/>)
    })

    return (
        <section id="projects">
            <div id="container-content">
                <h1 className="header">Projects</h1>
                <div id="container-projects">
                    {projectsDom}
                </div>
            </div>
        </section>
    );
}

export default Projects
