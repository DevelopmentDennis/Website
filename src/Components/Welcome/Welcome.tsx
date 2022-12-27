import * as React from "react";
import { FunctionComponent } from "react";
import Typical from "react-typical";
import "./Welcome.css";
import profilePicture from "../../images/developer_board.svg";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const TypingAnimation = React.memo(
    () => {
      return (
        <Typical
          steps={["Frontend", 2000, "Backend", 2000]}
          loop={Infinity}
          wrapper="b"
        />
      );
    },
    () => true
  ); // this line prevent re rendering

  // Todo Github, Xing, LinkedIn, Insta
  return (
    <div
      style={{
        display: "flex",
        height: "inherit",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="heading-white">Hi</p>
      <p className="text-white"> My name is Dennis Ostertag</p>
      <p className="text-white">
        Im a <TypingAnimation /> developer
      </p>

      <img
        style={{ borderRadius: "10%" }}
        src={profilePicture}
        alt="Profile"
      ></img>
    </div>
  );
};

export default Welcome;
