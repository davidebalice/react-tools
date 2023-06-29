import React from "react";
import classes from "./Slide.module.css";
import img from "../../assets/img/slideImg.jpg";

const Slide = () => {
  return (
    <div className={classes.slideBar}>
      <div className={classes.slideBarInt}>
        <img src={img} alt="react" />
        <div className={classes.slideColumn}>
          <h1>React Tools</h1>
          <p>Some useful examples of React implementation</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
