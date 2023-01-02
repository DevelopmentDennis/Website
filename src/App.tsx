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
    </div>
  );
}

export default App;
