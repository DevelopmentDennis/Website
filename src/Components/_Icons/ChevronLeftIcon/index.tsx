import * as React from "react";
import { BaseIconProps } from "../Shared/SharedData";

interface ChevronLeftIconProps extends BaseIconProps {}

const ChevronLeftIcon: React.FunctionComponent<ChevronLeftIconProps> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size ?? "24"}
      width={props.size ?? "24"}
      style={props.style}
      viewBox="0 0 24 24"
    >
      <g fill={props.color}>
        <path d="m14.05 18.6-6.625-6.625L14.05 5.35l1.975 1.975-4.65 4.65 4.65 4.65Z" />
      </g>
    </svg>
  );
};

export default ChevronLeftIcon;
