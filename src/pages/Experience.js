import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="2017 - 2021" 
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title"> Bluevale Collegiate Institute </h3>
          <p> Ontario Secondary School Diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="2021 - Present" 
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title"> Queen's University, Kingston, Ontario </h3>
          <h4 className="vertical-timeline-element-subtitle"> Bachelor of Computer Science (Honours)  </h4>
          <p>Relevant Coursework: Data Structures, Algorithms, System Level Programming, Object-Oriented Programming</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience