import * as React from "react";
import { FunctionComponent } from "react";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ChevronRightIcon from "../_Icons/ChevronRightIcon";
import ChevronLeftIcon from "../_Icons/ChevronLeftIcon";
import GithubIcon from "../_Icons/GithubIcon";
import { ResponsiveProps } from "../../App";

interface ProjectsProps extends ResponsiveProps {}

const Projects: FunctionComponent<ProjectsProps> = (props) => {
  const indicatorStyles: React.CSSProperties = {
    color: "greenyellow",
    display: "inline-block",
    margin: "0 1%",
    cursor: "pointer",
  };

  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
  };

  // Hide arrows on mobile and only do 2x br on mobile
  return (
    <>
      <p
        className="heading-white"
        style={{ marginLeft: "5%", marginBottom: "2%" }}
      >
        3. Some of the projects i worked on
      </p>

      <Carousel
        showThumbs={false}
        infiniteLoop
        showArrows={props.isLargeScreen}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div onClick={onClickHandler} style={{ ...arrowStyles, left: 15 }}>
              <ChevronLeftIcon color="whitesmoke" size="70" />
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div onClick={onClickHandler} style={{ ...arrowStyles, right: 15 }}>
              <ChevronRightIcon color="whitesmoke" size="70" />
            </div>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <p
                style={{ ...indicatorStyles, color: "whitesmoke" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
                className="projects-indicator-dot"
              >
                ⬤
              </p>
            );
          }
          return (
            <p
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
              className="projects-indicator-dot"
            >
              ⬤
            </p>
          );
        }}
      >
        <div className="grid-centered">
          <p className="heading-white projects-title w-80">
            Tracking of changes for certain places on Google Maps
          </p>
          <p className="text-white projects-subtitle w-80">
            Private project -{" "}
            <a
              style={{ color: "greenyellow", display: "inline-flex" }}
              href="https://github.com/DevelopmentDennis/GooglePlayground"
            >
              View on Github
              <GithubIcon
                size="1.5em"
                color="greenyellow"
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
              style={{ color: "greenyellow", display: "inline-flex" }}
              href="https://github.com/DevelopmentDennis/HouseholdCostTracker"
            >
              View on Github
              <GithubIcon
                size="1.5em"
                color="greenyellow"
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
          <p className="heading-white w-80">Personal Website</p>
          <p className="text-white projects-subtitle w-80">
            Private project -{" "}
            <a
              style={{ color: "greenyellow", display: "inline-flex" }}
              href="https://github.com/DevelopmentDennis/Website"
            >
              View on Github
              <GithubIcon
                size="1.5em"
                color="greenyellow"
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
    </>
  );
};

export default Projects;
