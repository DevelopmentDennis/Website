import * as React from "react";
import { FunctionComponent } from "react";
import "./RecentWork.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../_Icons/WorkIcon";
import SchoolIcon from "../_Icons/SchoolIcon";

interface RecentWorkProps {}

// Add mobile layout button on top and bottom and show exactly 2 elements

const RecentWork: FunctionComponent<RecentWorkProps> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="heading-white">2. Where i worked</p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element text-poppins"
          date="July 2019 - present"
          dateClassName="recentwork-date-text"
          iconStyle={{ background: "yellowgreen" }}
          icon={<WorkIcon color="whitesmoke" />}
        >
          <h3 className="vertical-timeline-element-title">
            Professional Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            AraCom IT Services AG
          </h4>
          <p>
            Software Development for several different customers, in small and
            large teams, Frontend and Backend
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-poppins"
          date="Jan 2018 - June 2019"
          dateClassName="recentwork-date-text"
          iconStyle={{ background: "yellowgreen" }}
          icon={<WorkIcon color="whitesmoke" />}
        >
          <h3 className="vertical-timeline-element-title">Working Student</h3>
          <h4 className="vertical-timeline-element-subtitle">KUKA Robotics</h4>
          <p>
            Software Development of support applications, endurance tests for
            robots
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-poppins"
          date="Mar 2017 - July 2017"
          dateClassName="recentwork-date-text"
          iconStyle={{ background: "yellowgreen" }}
          icon={<WorkIcon color="whitesmoke" />}
        >
          <h3 className="vertical-timeline-element-title">Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">KUKA Robotics</h4>
          <p>Development of drivers and virtualization for linux systems</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element text-poppins"
          date="2014 - 2019"
          dateClassName="recentwork-date-text"
          iconStyle={{ background: "yellowgreen" }}
          icon={<SchoolIcon color="whitesmoke" />}
        >
          <h3 className="vertical-timeline-element-title">
            Studies in Technical Computer Sciences
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Applied Sciences, Augsburg
          </h4>
          <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default RecentWork;
