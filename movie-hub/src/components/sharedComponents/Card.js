import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={classes["main-container"]}>{props.children}</div>
    </>
  );
};
export default Card;
