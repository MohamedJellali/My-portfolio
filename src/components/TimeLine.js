import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase,faGraduationCap,faUniversity,faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline,VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeLine() {
    return (
        <div>
            <div className="timeline">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000000' }}
            date=" April 2021 - present"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h1>Full Stack Javascript Instructor</h1>
            <h1>April 2021 - present</h1>
            <p>GoMyCode</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000000' }}
            date=" March 2021"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h1>Full Stack Js Web Developer-Training</h1>
            <h1>Aug 2020 - March 2021</h1>
            <p>GoMyCode</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000000' }}
            date=" 2017 - 2020"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h1>Customer and Production Quality Engineer</h1>
            <h1>2017-2020</h1>
            <p>VALEO</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000000' }}
            date="Nov 2015"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h1>National Engineer Diploma</h1>
            <h1> 2012-2015 </h1>
            <p>National Engineering School of Monastir « ENIM »</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#000000' }}
            date="July 2012"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h1>Preparatory Engineering Cycle</h1>
            <h1> 2010-2012 </h1>
            <p>Preparatory Engineering Institute of El Manar</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAngleDoubleUp} />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
        </div>
    )
}

export default TimeLine
