import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import "./RecentWork.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../_Icons/WorkIcon";
import SchoolIcon from "../_Icons/SchoolIcon";
import IconPlus from "../_Icons/PlusIcon";
import { ResponsiveProps } from "../../App";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";

interface RecentWorkProps extends ResponsiveProps {}

const RecentWork: FunctionComponent<RecentWorkProps> = (props) => {
  const [currentlyDisplayedElement, SetCurrentlyDisplayedElement] = useState(0);

  const [isSmallHeight, SetIsSmallHeightScreen] = useState(false);

  useEffect(() => {
    SetIsSmallHeightScreen(window.matchMedia("(max-height: 60em)").matches);
  }, []);

  const timelineElements = [
    <VerticalTimelineElement
      key={1}
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
        Software Development for several different customers, in small and large
        teams, Frontend and Backend
      </p>
    </VerticalTimelineElement>,
    <VerticalTimelineElement
      key={2}
      className="vertical-timeline-element text-poppins"
      date="Jan 2018 - June 2019"
      dateClassName="recentwork-date-text"
      iconStyle={{ background: "yellowgreen" }}
      icon={<WorkIcon color="whitesmoke" />}
    >
      <h3 className="vertical-timeline-element-title">Working Student</h3>
      <h4 className="vertical-timeline-element-subtitle">KUKA Robotics</h4>
      <p>
        Software Development of support applications, endurance tests for robots
      </p>
    </VerticalTimelineElement>,
    <VerticalTimelineElement
      key={3}
      className="vertical-timeline-element text-poppins"
      date="Mar 2017 - July 2017"
      dateClassName="recentwork-date-text"
      iconStyle={{ background: "yellowgreen" }}
      icon={<WorkIcon color="whitesmoke" />}
    >
      <h3 className="vertical-timeline-element-title">Internship</h3>
      <h4 className="vertical-timeline-element-subtitle">KUKA Robotics</h4>
      <p>Development of drivers and virtualization for linux systems</p>
    </VerticalTimelineElement>,
    <VerticalTimelineElement
      key={4}
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
    </VerticalTimelineElement>,
  ];

  const GetDisplayMoreIcon = (direction: "-" | "+") => (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      iconStyle={{ background: "yellowgreen", cursor: "pointer" }}
      icon={<IconPlus color="whitesmoke" />}
      iconOnClick={() => {
        SetCurrentlyDisplayedElement((value) =>
          direction === "+" ? value + 1 : value - 1
        );
      }}
    ></VerticalTimelineElement>
  );

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
      <OctagonIcon
        size="50vh"
        viewPortX={8}
        viewPortY={0}
        className="background-icon"
        style={{
          right: 0,
          bottom: 0,
          transform: "rotate(180deg)",
        }}
        color="yellowgreen"
      />

      <VerticalTimeline>
        {!isSmallHeight && timelineElements}
        {isSmallHeight &&
          currentlyDisplayedElement > 0 &&
          GetDisplayMoreIcon("-")}
        {isSmallHeight &&
          timelineElements.slice(
            currentlyDisplayedElement,
            currentlyDisplayedElement + 2
          )}
        {isSmallHeight &&
          currentlyDisplayedElement + 2 < timelineElements.length &&
          GetDisplayMoreIcon("+")}
      </VerticalTimeline>
    </div>
  );
};

export default RecentWork;
