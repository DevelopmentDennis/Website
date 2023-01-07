import React, { useEffect, useState } from "react";
import "./App.css";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Welcome from "./Components/Welcome/Welcome";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import "./App.css";
import RecentWork from "./Components/RecentWork/RecentWork";

export interface ResponsiveProps {
  isLargeScreen: boolean;
}

function App() {
  const [isLargeScreen, SetIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleStatusChange = (e: MediaQueryListEvent) => {
      SetIsLargeScreen(e.matches);
    };

    window
      .matchMedia("(min-width: 40em)")
      .addEventListener("change", handleStatusChange);
    return () => {
      window
        .matchMedia("(min-width: 40em)")
        .removeEventListener("change", handleStatusChange);
    };
  });

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
      <ScrollPage>
        <div className="scrollPage">
          <RecentWork isLargeScreen={isLargeScreen} />
        </div>
      </ScrollPage>
      <ScrollPage>
        <div className="scrollPage">
          <Projects isLargeScreen={isLargeScreen} />
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
