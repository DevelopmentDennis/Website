import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  ZoomOut,
  FadeOut,
} from "react-scroll-motion";
import Welcome from "./Components/Welcome/Welcome";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import "./App.css";
import RecentWork from "./Components/RecentWork/RecentWork";

function App() {
  const ZoomInScrollOut = batch(Sticky(), ZoomOut());
  const FadeUp = batch(MoveIn(-1000, 0));

  return (
    <div>
      <ScrollContainer snap="mandatory">
        <ScrollPage>
          <div
            style={{
              flexGrow: 1,
              background: "black",
              flexDirection: "column",
              display: "flex",
              height: "100%",
            }}
          >
            <Welcome />
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              background: "black",
              flexGrow: 1,
              flexDirection: "column",
              display: "flex",
              height: "100%",
            }}
          >
            <AboutMe />
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              background: "black",
              flexGrow: 1,
              flexDirection: "column",
              display: "flex",
              height: "100%",
            }}
          >
            <RecentWork />
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              background: "black",
              flexGrow: 1,
              flexDirection: "column",
              display: "flex",
              height: "100%",
            }}
          >
            <Projects />
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
