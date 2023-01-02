import * as React from "react";
import { FunctionComponent, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ChevronLeftIcon from "../_Icons/ChevronLeftIcon";
import ChevronRightIcon from "../_Icons/ChevronRightIcon";
import "./styles.css";

export interface CarouselItem {
  title: string;
  subtitle?: string;
  child: JSX.Element;
}

interface CarouselProps {
  data: CarouselItem[];
}

type Direction = "left" | "right";

const Carousel: FunctionComponent<CarouselProps> = (props) => {
  const [currentElement, SetCurrentElement] = useState(0);
  const [direction, SetDirection] = useState<Direction>("left");

  const moveLeft = () => {
    SetDirection("left");
    SetCurrentElement((previous) => getLeftClickNextIndex(previous));
  };

  const moveRight = () => {
    SetDirection("right");
    SetCurrentElement((previous) => getRightClickNextIndex(previous));
  };

  const getRightClickNextIndex = (current: number) =>
    current === props.data.length - 1 ? 0 : current + 1;

  const getLeftClickNextIndex = (current: number) =>
    current === props.data.length - 1 ? 0 : current + 1;

  const currentlyDisplayedElement = props.data.at(currentElement);
  const leftElement = props.data.at(getLeftClickNextIndex(currentElement));
  const rightElement = props.data.at(getRightClickNextIndex(currentElement));

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

      <TransitionGroup>
        <CSSTransition
          key={currentElement}
          timeout={2000}
          classNames={`fade-${direction}`}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <div className="grid-centered  el-hidden">
              <p className="heading-white">{leftElement?.title}</p>
              {leftElement?.subtitle == null ? null : (
                <p className="text-white">{leftElement.subtitle}</p>
              )}
              {leftElement?.child}
            </div>

            <div className="grid-centered">
              <p className="heading-white">
                {currentlyDisplayedElement?.title}
              </p>
              {currentlyDisplayedElement?.subtitle == null ? null : (
                <p className="text-white">
                  {currentlyDisplayedElement.subtitle}
                </p>
              )}
              {currentlyDisplayedElement?.child}
            </div>

            <div className="grid-centered  el-hidden">
              <p className="heading-white">{rightElement?.title}</p>
              {rightElement?.subtitle == null ? null : (
                <p className="text-white">{rightElement.subtitle}</p>
              )}
              {rightElement?.child}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>

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
              color: index === currentElement ? "yellowgreen" : "",
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
