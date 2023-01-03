import * as React from "react";
import { FunctionComponent } from "react";
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ChevronRightIcon from "../_Icons/ChevronRightIcon";
import ChevronLeftIcon from "../_Icons/ChevronLeftIcon";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const indicatorStyles: React.CSSProperties = {
    color: "greenyellow",
    display: "inline-block",
    margin: "0 1%",
    fontSize: "1.5em",
    cursor: "pointer",
  };

  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
  };

  return (
    <>
      <p className="heading-white" style={{ marginLeft: "5%" }}>
        3. Some of the projects i worked on
      </p>

      <Carousel
        showThumbs={false}
        infiniteLoop
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
            >
              ⬤
            </p>
          );
        }}
      >
        <div className="grid-centered">
          <p className="heading-white w-80">
            Tracking of changes for certain places on Google Maps
          </p>
          <p className="text-white w-80">Private project</p>
          <p className="text-white w-80">
            Application that checks Google Places API on a regular schedule and
            notifys me about changes to the given place. Written in C# using
            Azure Functions. Hosted on Microsoft Azure.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="grid-centered">
          <p className="heading-white w-80">
            Loyalty program for a german supermarket chain
          </p>
          <p className="text-white w-80">Work project</p>
          <p className="text-white w-80">
            Worked on the development of a loyalty program, including a
            microservice backend architecture hosted on Microsoft Azure, using
            lots of different Azure Services. My main part was the development
            of the corresponding React Native mobile app.
          </p>
        </div>
        <div className="grid-centered">
          <p className="heading-white w-80">
            React Native App for tracking expenses
          </p>
          <p className="text-white w-80">Private project</p>
          <p className="text-white w-80">
            To not loose count of the expenses on food, rent etc, I developed my
            own app for visualisation of those. It is available on the Google
            Play Store.
          </p>
        </div>

        <div className="grid-centered">
          <p className="heading-white w-80">
            Blazor Desktop Business Application
          </p>
          <p className="text-white w-80">Work project</p>
          <p className="text-white w-80">
            To match certain legal requirements i worked on a small team to
            develop a Blazor Application and Backend to make it easier for small
            companies to create the documents needed.
          </p>
        </div>
        <div className="grid-centered">
          <p className="heading-white w-80">Personal Website</p>
          <p className="text-white w-80">Private project</p>
          <p className="text-white w-80">
            Working on the website you are currently visiting, using React and
            GitHub Actions for deploy at Microsoft Azure.
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default Projects;
