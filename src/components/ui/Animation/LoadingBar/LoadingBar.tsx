import React from "react";
import classes from "./LoadingBar.module.css";

const LoadingBar = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.bar}></div>
    </div>
  );
};

export default LoadingBar;
