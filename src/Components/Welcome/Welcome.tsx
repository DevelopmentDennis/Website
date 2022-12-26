import * as React from "react";
import { FunctionComponent } from "react";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <div>
      <p
        style={{
          color: "whitesmoke",
          fontFamily: "PoppinsRegular",
          fontSize: "5em",
        }}
      >
        Hi
      </p>
    </div>
  );
};

export default Welcome;
