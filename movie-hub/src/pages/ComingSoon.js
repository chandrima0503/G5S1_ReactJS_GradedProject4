import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal";
import MovieTile from "../components/sharedComponents/MovieTile";
import classes from "./ComingSoon.module.css";
const ComingSoon = (props) => {
  const carousalImages = [
    { url: "assets/carousalImage/gameNight.jpg" },
    { url: "assets/carousalImage/Annhilation.jpg" },
    { url: "assets/carousalImage/hannah.jpg" },
    { url: "assets/carousalImage/TheLodgers.jpg" },
    { url: "assets/carousalImage/beastOfBurden.jpg" },
  ];
  console.log(props.sectionHeading);
  const comingSoonData = useLoaderData();

  return (
    <>
      <div className={classes.comingSoon}>
        <div className={classes.imageCarousal}>
          <Carousal images={carousalImages} />
        </div>
        <div className={classes.movieListGrid}>
          <div className={classes.movieListHeadingContainer}>
            <h1>Coming Soon in Theaters . . . </h1>
          </div>
          <div className={classes.movieListContainer}>
            {comingSoonData.map((data) => {
              const movieData = {
                id: data.id,
                title: data.title,
                genre: data.genres,
                image: data.posterurl,
                year: data.year,
                releaseDate: data.releaseDate,
              };
              return (
                <MovieTile
                  key={data.id}
                  data={movieData}
                  path="coming-soon"
                  sectionHeading={props.sectionHeading}
                ></MovieTile>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ComingSoon;
