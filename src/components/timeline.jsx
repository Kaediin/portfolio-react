import React from "react";
import "./timeline.css"

function Timeline(props) {
    const timeline = props.timeline
    let children = [];
    timeline.subTimelines.forEach(sub => {
        var smallCicle = [];
        if (sub.isActive){
            smallCicle.push(<div className="smallCircle"></div>)
        }
        children.push(
            <div className="timelineChild">
                <div className="circleContainer">
                    {smallCicle}
                    <div className="line"></div>
                </div>
                <div className="subTimelinePeriod"><p>{sub.period}</p></div>
                <div className="subTimelineFunction"><p>{sub.function}</p></div>
            </div>
        )
    })

    return (
        <div className="containerTimeline">
            <div className="containerTimelineTitle">
                <div className="circleContainer">
                    <div className="bigCircle"></div>
                </div>
                <h2>{timeline.title}</h2>
            </div>
            {children}
            <div className="closingLine"></div>
        </div>
    )
}

export default Timeline;
