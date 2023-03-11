import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal";
import SectionHeading from "../components/SectionHeading";

import classes from "./Home.module.css";

const Home = () => {
  const carousalImages = [
    { url: "assets/carousalImage/3Idiots.jpg" },
    { url: "assets/carousalImage/blackPanther.jpg" },
    { url: "assets/carousalImage/dangal.jpg" },
    { url: "assets/carousalImage/gameNight.jpg" },
  ];
  const resData = useLoaderData();
  // getMovieList(datas){
  //   // datas.map(data => )
  // }

  return (
    <div className={classes.home}>
      <div className={classes.imageCarousal}>
        <Carousal images={carousalImages} />
      </div>
      <div className={classes.tagList}>
        <SectionHeading
          movieDetails={resData["movies-coming"]}
          title="Coming Soon"
          link="/coming-soon"
          sectionHeading="movies-coming"
        ></SectionHeading>
        <SectionHeading
          movieDetails={resData["movies-in-theaters"]}
          title="Movies in Theater"
          link="/movies-in-theatre"
          sectionHeading="movies-in-theaters"
        ></SectionHeading>
        <SectionHeading
          movieDetails={resData["top-rated-india"]}
          title="Top Rated India"
          link="/top-indian-movies"
          sectionHeading="top-rated-india"
        ></SectionHeading>
        <SectionHeading
          movieDetails={resData["top-rated-movies"]}
          title="Top Rated"
          link="/top-rated"
          sectionHeading="top-rated-movies"
        ></SectionHeading>
      </div>
    </div>
  );
};
export default Home;
