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
            title: 'Key skills',
            subTimelines: [
                {
                    isActive: true,
                    period: 'Developing in a fast-paced environment',
                    function: 'I am able to focus wel at the task at hand. I am used to working in fast-paced environments with a continuous-integration work-flow.'
                },
                {
                    isActive: true,
                    period: 'Creative problem solving',
                    function: 'When developing I often run into situations which require a different approach than usual. I always like to attack a problem from different angles and to come up with the best and most efficient solution. I believe there is always another way.'
                },
                {
                    isActive: true,
                    period: 'Always willing to learn',
                    function: 'New software (tools) popup every day. I am always willing to learn new (and old!) technologies. I am never afraid to jump in the deep end and figure thing out.'
                },
                {
                    isActive: true,
                    period: 'Working in a team',
                    function: 'Teamwork is essential in a developing-environment. I am not afraid to ask for help and I can learn very well from others.'
                },
            ]
        },
        {
            title: 'Hobbies',
            subTimelines: [
                {
                    isActive: true,
                    period: 'Building apps',
                    function: 'I like to experiment with new technologies and grow my knowledge with upcoming ' +
                        'software. For example I’ve developed an app that tracks all SpaceX rocket launches and a cookbook-' +
                        'webapp for my mother’s recipes.'
                },
                {
                    isActive: true,
                    period: 'Sports',
                    function: 'I like to stay active. I do this by going to the gym, walking my dog, going for a run, and playing a soccer-match.'
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
            <div className="container-timeline">
                <Timeline timeline={timelines[3]}/>
            </div>
        </section>
    )
}

export default Resumetimelines;
