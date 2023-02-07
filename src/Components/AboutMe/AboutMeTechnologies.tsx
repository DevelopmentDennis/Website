import * as React from "react";
import { Animator, batch, MoveIn, MoveOut } from "react-scroll-motion";
import { ResponsiveProps } from "../../App";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";

interface AboutMeTechnologiesProps extends ResponsiveProps {}

const AboutMeTechnologies: React.FunctionComponent<AboutMeTechnologiesProps> = (
  props
) => {
  const techList = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
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
    <div
      style={{
        height: "100%",
      }}
    >
      {!props.isLargeScreen && (
        <OctagonIcon
          viewPortX={8}
          viewPortY={0}
          size="50vh"
          className="background-icon"
          style={{
            left: 0,
          }}
          color="yellowgreen"
        />
      )}
      {props.isLargeScreen && techList}
      {!props.isLargeScreen && (
        <Animator
          style={{
            paddingTop: "3%",
            paddingLeft: "5%",
            paddingRight: "5%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          animation={batch(MoveIn(-1000, 100), MoveOut(-1000, 100))}
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
