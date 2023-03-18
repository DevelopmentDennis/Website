import React, { useEffect, useState } from "react";
import "./App.css";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Welcome from "./Components/Welcome/Welcome";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import "./App.css";
import RecentWork from "./Components/RecentWork/RecentWork";
import AboutMeTechnologies from "./Components/AboutMe/AboutMeTechnologies";

export interface ResponsiveProps {
  isLargeScreen: boolean;
}

function App() {
  const [isLargeScreen, SetIsLargeScreen] = useState(true);

  useEffect(() => {
    SetIsLargeScreen(window.matchMedia("(min-width: 74em)").matches);
  }, []);

  return (
    <ScrollContainer snap="proximity">
      <ScrollPage>
        <div className="scrollPage">
          <Welcome isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="scrollPage">
          <AboutMe isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      {!isLargeScreen && (
        <ScrollPage className="scrollPage">
          <AboutMeTechnologies isLargeScreen={isLargeScreen} />
        </ScrollPage>
      )}
      <ScrollPage>
        <div className="scrollPage">
          <RecentWork isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="scrollPage">
          <Projects isLargeScreen={isLargeScreen} />
        </div>
        <a
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
            fontSize: "1.2em",
            zIndex: 2,
          }}
          className="text-white"
          href="/Privacy.html"
          target="_blank"
        >
          Privacy Statement
        </a>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
