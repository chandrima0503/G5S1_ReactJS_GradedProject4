import { useState } from "react";
import MovieTile from "./sharedComponents/MovieTile";

import classes from "./SectionHeading.module.css";
import { NavLink } from "react-router-dom";

const SectionHeading = (resData) => {
  console.log(resData.sectionHeading);

  const [isHovered, setIsHovered] = useState(false);
  // const [redirectLink, setRedirectLink] = useState("");

  const exploreSectionMouseOverHandler = () => {
    setIsHovered(true);
  };

  const exploreSectionMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  // const onClickExploreHandler = () => {
  //   setRedirectLink(resData.link);
  // };
  return (
    <div className={classes.movieTags}>
      <div
        className={classes.sectionHeading}
        onMouseOver={exploreSectionMouseOverHandler}
        onMouseLeave={exploreSectionMouseLeaveHandler}
        // onClick={onClickExploreHandler}
      >
        <div>
          <h2>{resData.title}</h2>
        </div>
        {isHovered && (
          <NavLink to={resData.link}>
            <h2
              className={classes.exploreSection}
              // onClick={exploreSectionOnClickHandler}
            >
              Click here for more
            </h2>
          </NavLink>
        )}
        {!isHovered && <h2></h2>}
        <h2 className={classes.arrow}>{`>`}</h2>
      </div>
      <div className={classes.movieTile}>
        {resData.movieDetails.slice(0, 5).map((data) => {
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
              sectionHeading={resData.sectionHeading}
            ></MovieTile>
          );
        })}
      </div>
    </div>
  );
};
export default SectionHeading;
