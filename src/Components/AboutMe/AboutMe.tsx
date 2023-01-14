import * as React from "react";
import { FunctionComponent } from "react";
import { Animator, batch, MoveIn, MoveOut } from "react-scroll-motion";
import { ResponsiveProps } from "../../App";
import profileImage from "../../_Images/Profile.jpg";
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
      <div className="aboutme-img-container">
        <img className="cover-img" src={profileImage} alt="Profile"></img>
      </div>
      <div className="aboutme-text-container">
        <Animator animation={batch(MoveIn(1000, 100), MoveOut(1000, 100))}>
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
