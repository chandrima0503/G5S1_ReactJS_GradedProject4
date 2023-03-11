import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal";
import MovieTile from "../components/sharedComponents/MovieTile";
import classes from "./MovieInTheatre.module.css";
const MoviesInTheatre = (props) => {
  const carousalImages = [
    { url: "assets/carousalImage/blackPanther.jpg" },
    { url: "assets/carousalImage/Annhilation.jpg" },
    { url: "assets/carousalImage/hannah.jpg" },
    { url: "assets/carousalImage/TheLodgers.jpg" },
    { url: "assets/carousalImage/beastOfBurden.jpg" },
  ];
  const moviesInTheatreData = useLoaderData();

  return (
    <>
      <div className={classes.moviesInTheatre}>
        <div className={classes.imageCarousal}>
          <Carousal images={carousalImages} />
        </div>
        <div className={classes.movieListGrid}>
          <div className={classes.movieListHeadingContainer}>
            <h1>Movies In Theatre </h1>
          </div>
          <div className={classes.movieListContainer}>
            {moviesInTheatreData.map((data) => {
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
export default MoviesInTheatre;
