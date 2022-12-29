import * as React from "react";

interface ChevronRightIconProps {
  color: string;
  size?: string;
}

const ChevronRightIcon: React.FunctionComponent<ChevronRightIconProps> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size ?? "24"}
      width={props.size ?? "24"}
      viewBox="0 0 24 24"
    >
      <g fill={props.color}>
        <path d="m9.4 18.6-1.975-1.975 4.65-4.65-4.65-4.65L9.4 5.35l6.625 6.625Z" />
      </g>
    </svg>
  );
};

export default ChevronRightIcon;
