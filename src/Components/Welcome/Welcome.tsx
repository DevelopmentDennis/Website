import * as React from "react";
import { FunctionComponent } from "react";
import Typical from "react-typical";
import "./Welcome.css";
import GithubIcon from "../_Icons/GithubIcon";
import XingIcon from "../_Icons/XingIcon";
import LinkedinIcon from "../_Icons/LinkedInIcon";
import { ResponsiveProps } from "../../App";

interface WelcomeProps extends ResponsiveProps {}

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

  return (
    <div className="welcome-container">
      <div className="welcome-text-container">
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
      <div className="welcome-icons-container">
        <a className="icon" href="https://github.com/DevelopmentDennis">
          <GithubIcon size="2.5em" color="whitesmoke" />
        </a>
        <a className="icon" href="https://www.xing.com/profile/Dennis_Ostertag">
          <XingIcon
            size="2.5em"
            color="whitesmoke"
            className="welcome-middle-icon"
          />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/dennis-ostertag-2a0773204/"
        >
          <LinkedinIcon size="2.5em" color="whitesmoke" />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
