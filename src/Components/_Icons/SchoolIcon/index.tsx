import * as React from "react";

interface SchoolIconProps {
  color: string;
  size?: string;
}

const SchoolIcon: React.FunctionComponent<SchoolIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.size ?? "24"}
      width={props.size ?? "24"}
      viewBox="0 0 24 24"
    >
      <g fill={props.color}>
        <path d="M21.7 17.7v-7.575l-9.7 5.3-12.425-6.8L12 1.825l12.45 6.8V17.7ZM12 22.1l-7.725-4.175V12.7L12 16.9l7.725-4.2v5.225Z" />
      </g>
    </svg>
  );
};

export default SchoolIcon;
