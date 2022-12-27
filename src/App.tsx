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

function App() {
  const ZoomInScrollOut = batch(Sticky(), ZoomOut());
  const FadeUp = batch(MoveIn(), ZoomIn());

  const scrollRef = useRef<HTMLInputElement>(null);

  return (
    <ScrollContainer snap="proximity">
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
          <Animator animation={FadeOut(0.8, 0)}>
            <Welcome />
          </Animator>
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
        <div
          ref={scrollRef}
          style={{ background: "gray", width: "100%", height: "100%" }}
        >
          <Animator animation={ZoomInScrollOut}>
            <Projects />
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
