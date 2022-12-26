import React from "react";
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
} from "react-scroll-motion";
import Welcome from "./Components/Welcome/Welcome";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(MoveIn(), ZoomIn());
  return (
    <ScrollContainer>
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
          <Welcome />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div
          style={{
            background: "yellow",
            flexGrow: 1,
            flexDirection: "column",
            display: "flex",
            height: "100%",
          }}
        >
          <Animator animation={FadeUp}>
            <AboutMe />
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage>
        <div style={{ background: "green", width: "100%", height: "100%" }}>
          <Animator animation={ZoomInScrollOut}>
            <Projects />
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage>
        <div style={{ background: "gray", width: "100%", height: "100%" }}>
          <Animator animation={ZoomInScrollOut}>
            <Projects />
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
