import * as React from "react";
import { FunctionComponent, useState } from "react";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ChevronRightIcon from "../_Icons/ChevronRightIcon";
import ChevronLeftIcon from "../_Icons/ChevronLeftIcon";
import GithubIcon from "../_Icons/GithubIcon";
import { ResponsiveProps } from "../../App";
import GooglePlayIcon from "../_Icons/GooglePlayIcon";
import OctagonIcon from "../_Icons/QuaterOctagonIcon";
import { COLOR_GREEN, COLOR_WHITE } from "../..";

interface ProjectsProps extends ResponsiveProps {}

const Projects: FunctionComponent<ProjectsProps> = (props) => {
  const NUMBER_OF_PROJECTS = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };

  const indicatorStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "8%",
  };

  // Hide arrows on mobile and only do 2x br on mobile
  return (
    <>
      <p className="heading-white" style={{ marginLeft: "5%" }}>
        3. Some of the projects i worked on
      </p>

      <Carousel
        showThumbs={false}
        infiniteLoop
        showIndicators={false}
        showArrows={props.isLargeScreen}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div onClick={onClickHandler} style={{ ...arrowStyles, left: 15 }}>
              <ChevronLeftIcon color={COLOR_WHITE} size="70" />
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div onClick={onClickHandler} style={{ ...arrowStyles, right: 15 }}>
              <ChevronRightIcon color={COLOR_WHITE} size="70" />
            </div>
          )
        }
        onChange={(index) => setCurrentPage(index)}
      >
        <div className="grid-centered">
          <p className="heading-white projects-title w-80">
            Tracking of changes for certain places on Google Maps
          </p>
          <p className="text-white projects-subtitle w-80">
            Private project -{" "}
            <a
              style={{ color: COLOR_GREEN, display: "inline-flex" }}
              target="_blank"
              rel="noreferrer"
              aria-label="View on Github"
              href="https://github.com/DevelopmentDennis/GooglePlayground"
            >
              View on Github
              <GithubIcon
                size="1.5em"
                color={COLOR_GREEN}
                style={{ marginLeft: "5px" }}
              />
            </a>
          </p>
          <p className="text-white w-80 projects-text">
            Azure Functions .NET Core App that checks Google Places API on a
            regular schedule and notifys me about changes to the given place.
          </p>
        </div>
        <div className="grid-centered">
          <p className="heading-white projects-title w-80">
            Loyalty program for a german supermarket chain
          </p>
          <p className="text-white projects-subtitle w-80">Work project</p>
          <p className="text-white w-80 projects-text">
            Azure Functions (and lots of other Azure Services) microservice
            backend architecture. Frontend website written with React and the
            corresponding Mobile App with React Native.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="grid-centered">
          <p className="heading-white projects-title w-80">
            React Native App for tracking expenses
          </p>
          <p className="text-white projects-subtitle w-80">
            Private project -{" "}
            <a
              style={{ color: COLOR_GREEN, display: "inline-flex" }}
              target="_blank"
              aria-label="View on Github"
              rel="noreferrer"
              href="https://github.com/DevelopmentDennis/HouseholdCostTracker"
            >
              View on Github
              <GithubIcon
                size="1.5em"
                color={COLOR_GREEN}
                style={{ marginLeft: "5px" }}
              />
            </a>{" "}
            -{" "}
            <a
              style={{ color: COLOR_GREEN, display: "inline-flex" }}
              target="_blank"
              rel="noreferrer"
              aria-label="View on Google Play"
              href="https://play.google.com/store/apps/details?id=com.monthlycosttracker"
            >
              View on Google Play
              <GooglePlayIcon
                size="1.5em"
                color={COLOR_GREEN}
                style={{ marginLeft: "5px" }}
              />
            </a>
          </p>
          <p className="text-white w-80 projects-text">
            To not loose count of the expenses on food, rent etc, I developed my
            own app for visualisation of those. It is available on the Google
            Play Store.
          </p>
        </div>

        <div className="grid-centered">
          <p className="heading-white projects-title w-80">
            Blazor Desktop Business Application
          </p>
          <p className="text-white projects-subtitle w-80">Work project</p>
          <p className="text-white w-80 projects-text">
            To match certain legal requirements i worked on a small team to
            develop a Blazor Application and Backend to make it easier for small
            companies to create the documents needed.
          </p>
        </div>
        <div className="grid-centered">
          <p className="heading-white projects-title w-80">Personal Website</p>
          <p className="text-white projects-subtitle w-80">
            Private project -{" "}
            <a
              style={{ color: COLOR_GREEN, display: "inline-flex" }}
              target="_blank"
              rel="noreferrer"
              aria-label="View on Github"
              href="https://github.com/DevelopmentDennis/Website"
            >
              View on Github
              <GithubIcon
                size="1.5em"
                color={COLOR_GREEN}
                style={{ marginLeft: "5px" }}
              />
            </a>
          </p>
          <p className="text-white w-80 projects-text">
            Working on the website you are currently visiting, using React and
            GitHub Actions for deploy at Microsoft Azure.
          </p>
        </div>
      </Carousel>

      <div className="w-100 d-flex d-row justify-center" style={indicatorStyle}>
        {[...Array(NUMBER_OF_PROJECTS)].map((_, index) => {
          return (
            <p
              style={{
                backgroundColor: index === currentPage ? COLOR_WHITE : "black",
                marginLeft: "1%",
                marginRight: "1%",
                borderStyle: "solid",
                borderRadius: "100%",
                borderColor: COLOR_WHITE,
                borderWidth: "1px",
                width: "10px",
                height: "10px",
              }}
              key={index}
              aria-label={`carousel indicator: ${index}`}
              className="projects-indicator-dot"
            ></p>
          );
        })}
      </div>

      <OctagonIcon
        size="50vh"
        viewPortX={8}
        viewPortY={8}
        className="background-icon abs-b-0 abs-l-0"
        style={{
          transform: "rotate(-90deg)",
        }}
        color={COLOR_GREEN}
      />
    </>
  );
};

export default Projects;
