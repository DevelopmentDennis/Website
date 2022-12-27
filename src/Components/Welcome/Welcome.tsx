import * as React from "react";
import { FunctionComponent } from "react";
import Typical from "react-typical";
import "./Welcome.css";
import profilePicture from "../../images/Profile.jpg";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10% 35% 10% 35% 5%",
        gridTemplateRows: "5% 90% 5%",
      }}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div>
        <p className="heading-white">Hi</p>
        <p className="text-white"> My name is Dennis Ostertag</p>
        <p className="text-white">
          Im a{" "}
          <Typical
            steps={["Frontend", 2000, "Backend", 2000]}
            loop={Infinity}
            wrapper="b"
          />{" "}
          developer
        </p>
      </div>
      <div />
      <img
        style={{ borderRadius: "10%" }}
        src={profilePicture}
        alt="Profile"
      ></img>
    </div>
  );
};

export default Welcome;
