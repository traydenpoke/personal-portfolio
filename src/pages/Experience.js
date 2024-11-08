import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Bluevale Collegiate Institute </h3>
          <p> Ontario Secondary School Diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Queen's University, Kingston, Ontario </h3>
          <h4 className="vertical-timeline-element-subtitle"> Bachelor of Computing (Honours)  </h4>
          <p>Relevant Coursework: Data Structures, Algorithms, System Level Programming, Object-Oriented Programming.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 - Present"
          iconStyle={{ background: "rgb(33, 130, 243", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Safety Power Inc., Mississauga, Ontario </h3>
          <h4 className="vertical-timeline-element-subtitle"> Assistant Software Designer </h4>
          <p>Assisting senior engineers and developers in developing environmental control technology to reduce emissions for Fortune 500 clients. Designing and optimizing full-stack software across Python, JavaScript, Linux, and embedded systems to enhance automation and improve performance.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div >
  );
}

export default Experience;