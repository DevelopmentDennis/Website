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
        <div className="app-scrollPage">
          <Welcome isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="app-scrollPage">
          <AboutMe isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      {!isLargeScreen && (
        <ScrollPage className="app-scrollPage">
          <AboutMeTechnologies isLargeScreen={isLargeScreen} />
        </ScrollPage>
      )}
      <ScrollPage>
        <div className="app-scrollPage">
          <RecentWork isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="app-scrollPage">
          <Projects isLargeScreen={isLargeScreen} />
        </div>
        <a
          className="app-privacy-statement text-white"
          href="/Privacy.html"
          aria-label="Privacy Statement"
          target="_blank"
        >
          Privacy Statement
        </a>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
