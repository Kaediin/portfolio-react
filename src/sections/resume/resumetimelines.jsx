import React from "react";
import "./resumetimelines.css"
import Timeline from "../../components/timeline";

function Resumetimelines(){
    let timelines = [
        {
            title: 'Experience',
            subTimelines: [
                {
                    isActive: true,
                    period: '06 2021 - Present',
                    function: 'Back-end Java developer at Ancora Health (Freelancing)'
                },
                {
                    isActive: true,
                    period: '04 2021 - Present',
                    function: 'Web developer for restaurant chain WillieWong (Freelancing)'
                },
                {
                    isActive: true,
                    period: '01 2020 - Present',
                    function: 'Java Software developer at Eelloo (Freelancing)'
                },
                {
                    isActive: true,
                    period: '06 2020 - Present',
                    function: 'Android App Developer at Reflex-Online (Freelancing)'
                },
                {
                    isActive: false,
                    period: '05 2019 - 10 2019',
                    function: 'Internship (Java) software developer at Eelloo'
                },
            ]
        },
        {
            title: 'Education',
            subTimelines: [
                {
                    isActive: false,
                    period: '09 2020 - 06 2021',
                    function: 'Artificial Intelligence at University of Applied Sciences Utrecht (4.0 GPA)'
                },
                {
                    isActive: false,
                    period: '09 2018 - 12 2019',
                    function: 'Software Development at intermediate vocational education (ROC) Almere-Buiten'
                },
                {
                    isActive: false,
                    period: '09 2014 - 06 2018',
                    function: 'Mavo at Helen Parkhurst daltonschool in Almere'
                },
            ]
        },
        {
            title: 'Hobbies',
            subTimelines: [
                {
                    isActive: true,
                    period: 'Building apps',
                    function: 'I like to experiment with new technologies and grow my knowledge with upcoming' +
                        'software. For example I’ve developed an app that tracks all SpaceX rocket launches and a cookbook' +
                        'web-app for my mother’s recipes.'
                },
                {
                    isActive: true,
                    period: 'Sports',
                    function: 'I like to stay active. I do this by going to the gym, going for a run, or playing a soccer-match.'
                },
            ]
        },
    ]

    return (
        <section id="timelines">
            <div className="container-timeline">
                <Timeline timeline={timelines[0]}/>
            </div>
            <div className="container-timeline">
                <Timeline timeline={timelines[1]}/>
            </div>
            <div className="container-timeline">
                <Timeline timeline={timelines[2]}/>
            </div>
        </section>
    )
}

export default Resumetimelines;
