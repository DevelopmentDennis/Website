import * as React from "react";
import { FunctionComponent } from "react";
import { Animator, Fade } from "react-scroll-motion";
import { ResponsiveProps } from "../../App";
import modernProfileImage from "../../_Images/profile.webp";
import profileImage from "../../_Images/Profile.jpg";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";
import "./AboutMe.css";
import AboutMeTechnologies from "./AboutMeTechnologies";
import { COLOR_GREEN } from "../..";

interface AboutMeProps extends ResponsiveProps {}

const AboutMe: FunctionComponent<AboutMeProps> = (props) => {
  return (
    <div className="aboutme-layout h-100">
      <OctagonIcon
        viewPortX={8}
        viewPortY={8}
        className="background-icon abs-t-0 abs-r-0 rotate-90"
        size="50vh"
        color={COLOR_GREEN}
      />
      <div className="aboutme-img-container">
        <div className="aboutme-round-corners">
          <picture>
            <source srcSet={modernProfileImage} type="image/webp" />
            <img alt="Profile" src={profileImage} className="cover-img" />
          </picture>
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
