import { Console } from "console";
import * as React from "react";
import { FunctionComponent, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ChevronLeftIcon from "../_Icons/ChevronLeftIcon";
import ChevronRightIcon from "../_Icons/ChevronRightIcon";
import "./styles.css";

export interface CarouselItem {
  title: string;
  subtitle?: string;
  children: JSX.Element;
}

interface CarouselProps {
  data: CarouselItem[];
}

const Carousel: FunctionComponent<CarouselProps> = (props) => {
  const [currentElement, SetCurrentElement] = useState(0);

  const moveLeft = () => {
    SetCurrentElement((previous) =>
      previous === 0 ? props.data.length - 1 : previous - 1
    );
  };

  const moveRight = () => {
    SetCurrentElement((previous) =>
      previous === props.data.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10% 80% 10%",
        gridTemplateRows: "70% 10%",
        height: "inherit",
      }}
    >
      <div className="grid-centered" onClick={moveLeft}>
        <ChevronLeftIcon color="white" size="70" />
      </div>

      <div className="grid-centered">
        <p className="heading-white">{props.data[currentElement].title}</p>
        {props.data[currentElement].subtitle == null ? null : (
          <p className="text-white">{props.data[currentElement].subtitle}</p>
        )}
        {props.data[currentElement].children}
      </div>

      <div className="grid-centered" onClick={moveRight}>
        <ChevronRightIcon color="white" size="70" />
      </div>
      <div />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {props.data.map((el, index) => (
          <p
            key={index}
            className="text-white"
            style={{
              color: index == currentElement ? "yellowgreen" : "",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            ⬤
          </p>
        ))}
      </div>

      <div />
    </div>
  );
};

export default Carousel;
