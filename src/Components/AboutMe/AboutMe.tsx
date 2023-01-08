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
      <div />
      <div />
      <div />
      <div />
      <div />

      <div />
      <div className="aboutme-img-container">
        <img className="cover-img" src={profileImage} alt="Profile"></img>
      </div>

      <div />
      <Animator animation={batch(MoveIn(1000, 100), MoveOut(1000, 100))}>
        <div>
          <p className="heading-white aboutme-title">1. About me</p>
          <p className="text-white aboutme-text">
            Hello! My name is Dennis and I am a software developer from Germany.
            I started coding back in school and decided, that's what i want to
            do for a living. Here are a few technologies i have been working
            with recently:
          </p>
          <br />
          {props.isLargeScreen && <p className="divider" />}
          {props.isLargeScreen && <AboutMeTechnologies isLargeScreen={true} />}
        </div>
      </Animator>
    </div>
  );
};

export default AboutMe;
