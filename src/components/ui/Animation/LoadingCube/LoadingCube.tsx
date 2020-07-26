import React from "react";
import classes from "./LoadingCube.module.css";

const LoadingCube = () => {
  return (
    <>
      <div className={classes.center}>
        <div className={classes.loader}></div>
      </div>
    </>
  );
};

export default LoadingCube;
