import * as React from "react";
import { FunctionComponent } from "react";
import "./Projects.css";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const items = [
    <div style={{ border: "2px red solid" }} className="text-white">
      1
    </div>,
    <div className="text-white">2</div>,
    <div className="text-white">3</div>,
    <div className="text-white">4</div>,
    <div className="text-white">5</div>,
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );
};

export default Projects;
