import * as React from "react";
import { BaseIconProps } from "../Shared/SharedData";

export interface GooglePlayIconProps extends BaseIconProps {}

const GooglePlayIcon: React.FunctionComponent<GooglePlayIconProps> = (
  props
) => {
  return (
    <svg
      width={props.size ?? "50"}
      height={props.size ?? "50"}
      style={props.style}
      className={props.className}
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="_x31_03-GooglePlay_x2C__play_x2C__google_play_x2C__apps">
        <g>
          <g>
            <g>
              <path
                d="M280.572,246.052L49.721,477.526c-11.034-10.465-16.997-24.819-16.997-40.374V74.096      c0-15.849,6.263-30.207,17.597-40.968L280.572,246.052z M280.572,246.052"
                fill="#2299F8"
              />
              <g>
                <path
                  d="M480.104,255.62c0,20.938-11.34,39.477-30.131,49.95l-65.605,36.482l-81.428-75.367       l-22.367-20.634l86.193-86.429l83.207,46.056C468.764,216.152,480.104,234.69,480.104,255.62L480.104,255.62z M480.104,255.62"
                  fill="#FFC107"
                />
                <path
                  d="M280.572,246.052L50.321,33.127c2.981-2.996,6.862-5.685,10.739-8.077       c18.787-11.363,41.456-11.667,60.839-0.895l244.867,135.467L280.572,246.052z M280.572,246.052"
                  fill="#5ACF5F"
                />
              </g>
              <path
                d="M384.367,342.053L121.899,487.095c-9.243,5.386-19.688,7.774-29.826,7.774      c-10.734,0-21.469-2.69-31.013-8.668c-4.182-2.394-8.058-5.384-11.339-8.675l230.851-231.475l22.367,20.634L384.367,342.053z       M384.367,342.053"
                fill="#F84437"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default GooglePlayIcon;
