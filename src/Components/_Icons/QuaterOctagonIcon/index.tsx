import * as React from "react";
import { BaseIconProps } from "../Shared/SharedData";

interface QuaterOctagonIconProps extends BaseIconProps {
  viewPortX: number;
  viewPortY: number;
}

const OctagonIcon: React.FunctionComponent<QuaterOctagonIconProps> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? "16"}
      height={props.size ?? "16"}
      style={props.style}
      className={props.className}
      viewBox={`${props.viewPortX} ${props.viewPortY} 16 16`}
    >
      <g fill={props.color}>
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
      </g>
    </svg>
  );
};

export default OctagonIcon;
