import * as React from "react";

export interface AboutMeProps {
  color: string;
  height?: string;
  width?: string;
}

const WorkIcon: React.FunctionComponent<AboutMeProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height ?? "24"}
      width={props.width ?? "24"}
    >
      <g fill={props.color}>
        <path d="M3.95 22.125q-1.175 0-2-.837-.825-.838-.825-2.013V8.25q0-1.175.825-2t2-.825h3.275v-1.95q0-1.175.825-2t2-.825h3.9q1.175 0 2 .825t.825 2v1.95h3.275q1.175 0 2 .825t.825 2v11.025q0 1.175-.825 2.013-.825.837-2 .837Zm6.1-16.7h3.9v-1.95h-3.9Z" />
      </g>
    </svg>
  );
};

export default WorkIcon;
