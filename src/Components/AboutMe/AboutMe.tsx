import * as React from "react";
import { FunctionComponent } from "react";
import { Animator, MoveIn } from "react-scroll-motion";
import profileImage from "../../_Images/Profile.jpg";
import "./AboutMe.css";

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "10% 40% 10% 35% 5%",
        gridTemplateRows: "15% 70% 5%",
      }}
    >
      <div />
      <div />
      <div />
      <div />
      <div />

      <div />
      <div
        style={{
          backgroundColor: "dimgray",
          borderRadius: "10%",
          width: "90%",
        }}
      >
        <img
          className="cover-img"
          style={{
            borderRadius: "10%",
          }}
          src={profileImage}
          alt="Profile"
        ></img>
      </div>

      <div />
      <Animator animation={MoveIn(1000, 0)}>
        <div>
          <p className="heading-white">About me</p>
          <p className="text-white">
            Hello! My name is Dennis and i am a software developer from Germany.
            I started coding back in school and decided, that's what i want to
            do for a living. Here are a few technologies i have been working
            with recently:
          </p>
          <br />
          <p className="divider" />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ul>
              <li>React & React Native</li>
              <li>TypeScript</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>C#</li>
              <li>Entity Framework Core</li>
              <li>Blazor</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        </div>
      </Animator>
    </div>
  );
};

export default AboutMe;
