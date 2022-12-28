import * as React from "react";

export interface ChevronLeftIcon {
  color: string;
  size?: string;
}

const ChevronLeftIcon: React.FunctionComponent<ChevronLeftIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size ?? "24"}
      width={props.size ?? "24"}
      viewBox="0 0 24 24"
    >
      <g fill={props.color}>
        <path d="m14.05 18.6-6.625-6.625L14.05 5.35l1.975 1.975-4.65 4.65 4.65 4.65Z" />
      </g>
    </svg>
  );
};

export default ChevronLeftIcon;
