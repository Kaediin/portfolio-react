import React from "react";
import "./timeline.css"

function Timeline(props) {
    const timeline = props.timeline
    let children = [];
    timeline.subTimelines.forEach(sub => {
        var smallCicle = [];
        if (sub.isActive) {
            smallCicle.push(<div className="smallCircle"/>)
        }
        var divider = [];
        if (timeline.subTimelines[timeline.subTimelines.length - 1] !== sub) {
            divider.push(<hr className="subTimelineDivider"/>)
        }

        children.push(
            <div className="timelineChild">
                <div className="circleContainer">
                    {smallCicle}
                    <div className="line"/>
                </div>
                <div className="subTimelinePeriod"><p>{sub.period}</p></div>
                <div className="subTimelineFunction"><p>{sub.function}</p></div>
                {divider}
            </div>
        )
    })

    return (
        <div className="containerTimeline">
            <div className="containerTimelineTitle">
                <div className="circleContainer">
                    <div className="bigCircle"/>
                </div>
                <h2>{timeline.title}</h2>
            </div>
            {children}
            <div className="closingLine"/>
        </div>
    )
}

export default Timeline;
