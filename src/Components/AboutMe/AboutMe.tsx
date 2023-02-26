import * as React from "react";
import { FunctionComponent } from "react";
import { Animator, Fade } from "react-scroll-motion";
import { ResponsiveProps } from "../../App";
import profileImage from "../../_Images/Profile.jpg";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";
import "./AboutMe.css";
import AboutMeTechnologies from "./AboutMeTechnologies";

interface AboutMeProps extends ResponsiveProps {}

const AboutMe: FunctionComponent<AboutMeProps> = (props) => {
  return (
    <div
      style={{
        height: "100%",
      }}
      className="aboutme-layout"
    >
      <OctagonIcon
        viewPortX={8}
        viewPortY={8}
        className="background-icon"
        size="50vh"
        style={{
          top: 0,
          right: 0,
          transform: "rotate(90deg)",
        }}
        color="yellowgreen"
      />
      <div className="aboutme-img-container">
        <div className="aboutme-round-corners">
          <img className="cover-img" src={profileImage} alt="Profile"></img>
        </div>
      </div>
      <div className="aboutme-text-container">
        <Animator animation={Fade()}>
          <div>
            <p className="heading-white aboutme-title">1. About me</p>
            <p className="text-white aboutme-text">
              I'm a software developer from Germany. I started coding back in
              school and decided, that's what I want to do for a living. Here
              are a few technologies I have been working with recently:
            </p>
            {props.isLargeScreen && <p className="divider" />}
            {props.isLargeScreen && (
              <AboutMeTechnologies isLargeScreen={true} />
            )}
          </div>
        </Animator>
      </div>
    </div>
  );
};

export default AboutMe;
