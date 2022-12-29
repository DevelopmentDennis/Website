import * as React from "react";
import { FunctionComponent } from "react";
import Typical from "react-typical";
import "./Welcome.css";
import profilePicture from "../../_Images/developer_board.svg";
import GithubIcon from "../_Icons/GithubIcon";
import XingIcon from "../_Icons/XingIcon";
import LinkedinIcon from "../_Icons/LinkedInIcon";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const TypingAnimation = React.memo(
    () => {
      return (
        <Typical
          steps={["Frontend", 2000, "Backend", 2000]}
          loop={Infinity}
          wrapper="b"
        />
      );
    },
    () => true
  );

  // Todo Github, Xing, LinkedIn, Insta
  return (
    <div
      style={{
        display: "flex",
        height: "inherit",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 5,
          alignItems: "center",
        }}
      >
        <div>
          <p className="text-white" style={{ marginBottom: 0 }}>
            Hi, my name is
          </p>
          <p className="heading-white name" style={{ marginTop: 0 }}>
            Dennis Ostertag
          </p>
          <p className="text-white">
            Im a <TypingAnimation /> developer
          </p>
        </div>
      </div>
      <div
        style={{
          flex: 0,
          flexDirection: "column",
        }}
      >
        <a
          className="icon"
          style={{ margin: 10 }}
          href="https://github.com/DevelopmentDennis"
        >
          <GithubIcon size="40" color="white" />
        </a>
        <a
          className="icon"
          style={{ margin: 10 }}
          href="https://www.xing.com/profile/Dennis_Ostertag"
        >
          <XingIcon size="40" color="white" />
        </a>
        <a
          className="icon"
          style={{ margin: 10 }}
          href="https://www.linkedin.com/in/dennis-ostertag-2a0773204/"
        >
          <LinkedinIcon size="40" color="white" />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
