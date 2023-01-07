// icon:plus | Ant Design Icons https://ant.design/components/icon/ | Ant Design
import * as React from "react";
import { BaseIconProps } from "../Shared/SharedData";

interface PlusIconProps extends BaseIconProps {}

const IconPlus: React.FunctionComponent<PlusIconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width={props.size ?? "30"}
      height={props.size ?? "30"}
      style={props.style}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={props.color}>
        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
      </g>
    </svg>
  );
};

export default IconPlus;
