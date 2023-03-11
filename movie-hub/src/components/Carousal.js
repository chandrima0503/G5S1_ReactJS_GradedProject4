import { useState } from "react";

import classes from "./Carousal.module.css";
const Carousal = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevBtnHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextBtnHandler = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <div className={classes.carousal}>
        <div className={classes.leftBtn} onClick={prevBtnHandler}>{`<`}</div>
        <div className={classes.rightBtn} onClick={nextBtnHandler}>{`>`}</div>
        <img src={images[currentIndex].url} alt="movie name" />
        <div className={classes.shade}></div>
      </div>
    </>
  );
};
export default Carousal;
