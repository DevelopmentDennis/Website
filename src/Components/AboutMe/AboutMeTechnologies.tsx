import * as React from "react";
import { Animator, Fade } from "react-scroll-motion";
import { ResponsiveProps } from "../../App";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";
import { COLOR_GREEN } from "../..";

interface AboutMeTechnologiesProps extends ResponsiveProps {}

const AboutMeTechnologies: React.FunctionComponent<AboutMeTechnologiesProps> = (
  props
) => {
  const techList = (
    <div
      className="d-flex d-row"
      style={{
        justifyContent: "space-around",
      }}
    >
      <ul className="dots">
        <li className="dots">React & React Native</li>
        <li className="dots">TypeScript</li>
        <li className="dots">Node.js</li>
      </ul>
      <ul className="dots">
        <li className="dots">C#</li>
        <li className="dots">Entity Framework Core</li>
        <li className="dots">Blazor</li>
        <li className="dots">Azure DevOps</li>
      </ul>
    </div>
  );

  return (
    <div className="w-100">
      {!props.isLargeScreen && (
        <OctagonIcon
          viewPortX={8}
          viewPortY={0}
          size="50vh"
          className="background-icon abs-l-0"
          color={COLOR_GREEN}
        />
      )}
      {props.isLargeScreen && techList}
      {!props.isLargeScreen && (
        <Animator
          className="h-100 d-flex d-column justify-center"
          style={{
            paddingTop: "3%",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
          animation={Fade()}
        >
          <p className="heading-white">1.1 About me - Techstack</p>
          <p className="text-white text-italic">
            What i have worked with recently
          </p>
          {techList}
        </Animator>
      )}
    </div>
  );
};

export default AboutMeTechnologies;
