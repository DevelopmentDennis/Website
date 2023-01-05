import React from "react";
import "./App.css";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Welcome from "./Components/Welcome/Welcome";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import "./App.css";
import RecentWork from "./Components/RecentWork/RecentWork";

function App() {
  return (
    <ScrollContainer snap="proximity">
      <ScrollPage>
        <div className="scrollPage">
          <Welcome />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="scrollPage">
          <AboutMe />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="scrollPage">
          <RecentWork />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="scrollPage">
          <Projects />
          <a
            style={{
              position: "absolute",
              bottom: "0",
              right: "15px",
              fontSize: "1em",
            }}
            className="text-white"
            href="/Privacy.html"
            target="_blank"
          >
            Datenschutzerklärung
          </a>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
