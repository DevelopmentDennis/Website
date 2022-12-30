import * as React from "react";
import { FunctionComponent } from "react";
import Carousel, { CarouselItem } from "../Carousel";
import "./Projects.css";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const items: CarouselItem[] = [
    {
      title: "Loyalty program app for a german supermarket chain",
      subtitle: "Work project",
      child: (
        <p className="text-white text-left">
          Worked on the development of a loyalty program, including a
          microservice backend architecture hosted on Microsoft Azure, using
          lots of different Azure Services. My main part was the development of
          the corresponding React Native mobile app.
        </p>
      ),
    },
    {
      title: "React Native App for tracking expenses",
      subtitle: "Private project",
      child: (
        <p className="text-white text-left">
          To not loose count of the expenses on food, rent etc, I developed my
          own app for visualisation of those. It is available on the Google Play
          Store.
        </p>
      ),
    },
    {
      title: "Tracking of changes for certain places on Google Maps",
      subtitle: "Private project",
      child: (
        <p className="text-white text-left">
          Application that checks Google Places API on a regular schedule and
          notifys me about changes to the given place. Written in C# using Azure
          Functions. Hosted on Microsoft Azure.
        </p>
      ),
    },
    {
      title: "Blazor Desktop Business Application",
      subtitle: "Work project",
      child: (
        <p className="text-white text-left">
          To match certain legal requirements i worked on a small team to
          develop a Blazor Application and Backend to make it easier for small
          companies to create the documents needed.
        </p>
      ),
    },
    {
      title: "Personal Website",
      subtitle: "Private project",
      child: (
        <p className="text-white text-left">
          Working on the website you are currently visiting, using React.
        </p>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="heading-white" style={{ marginLeft: "5%" }}>
        Some of the projects i worked on
      </p>
      <Carousel data={items} />
    </div>
  );
};

export default Projects;
