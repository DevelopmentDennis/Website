import * as React from "react";
import { FunctionComponent } from "react";
import Typical from "react-typical";
import "./Welcome.css";
import GithubIcon from "../_Icons/GithubIcon";
import XingIcon from "../_Icons/XingIcon";
import LinkedinIcon from "../_Icons/LinkedInIcon";
import { ResponsiveProps } from "../../App";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";
import { COLOR_GREEN, COLOR_WHITE } from "../..";

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
      <OctagonIcon
        size="50vh"
        className="background-icon abs-t-0 abs-l-0"
        viewPortX={8}
        viewPortY={8}
        color={COLOR_GREEN}
      />
      <OctagonIcon
        viewPortX={8}
        viewPortY={8}
        size="50vh"
        className="background-icon abs-b-0 abs-r-0 rotate-180"
        color={COLOR_GREEN}
      />
      <div className="welcome-text-container">
        <div>
          <p className="text-white mb-0">Hi, my name is</p>
          <p className="heading-white welcome-name mt-0">Dennis Ostertag</p>
          <p className="text-white">
            Im a <TypingAnimation /> developer
          </p>
        </div>
      </div>
      <div className="welcome-icons-container">
        <a
          className="icon"
          href="https://github.com/DevelopmentDennis"
          aria-label="View on Github"
        >
          <GithubIcon size="2.5em" color={COLOR_WHITE} />
        </a>
        <a
          className="icon"
          href="https://www.xing.com/profile/Dennis_Ostertag"
          aria-label="View on Xing"
        >
          <XingIcon
            size="2.5em"
            color={COLOR_WHITE}
            className="welcome-middle-icon"
          />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/dennis-ostertag-2a0773204/"
          aria-label="View on Linkedin"
        >
          <LinkedinIcon size="2.5em" color={COLOR_WHITE} />
        </a>
      </div>
    </div>
  );
};

export default Welcome;
