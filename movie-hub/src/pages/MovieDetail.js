import { useLoaderData, useParams } from "react-router-dom";
import classes from "./MovieDetail.module.css";

const MovieDetail = () => {
  const movie = useLoaderData();

  // console.log(movieList);

  const ratings = movie.ratings;
  function calcAverageRating(ratings) {
    const initialRating = 0;
    return parseFloat(
      ratings.reduce(
        (accumulator, currentRating) => accumulator + currentRating,
        initialRating
      ) / ratings.length
    ).toFixed(1);
  }

  const avgRating = calcAverageRating(ratings);

  return (
    <>
      <div className={classes.movieDetail}>
        <div className={classes.movieDetailContainer}>
          <div className={classes.movieDetailPaddingContainer}>
            <div className={classes["image-container"]}>
              <div className={classes.overlay}></div>
              <img className={classes.originalPoster} src={movie.posterurl} />
              <img className={classes.blurBackground} src={movie.posterurl} />
            </div>
            <div className={classes.contentContainer}>
              <h3>
                <strong>Rating</strong>: {`${avgRating}`}
              </h3>
              <h3>
                <strong>Genre</strong> : {movie.genres.join(",")}
              </h3>
              <h3>
                <strong>Year</strong> : {movie.year}
              </h3>
              <h3>
                <strong>Actors</strong> : {movie.actors.join(",")}
              </h3>
              <h3>
                <strong>IMDb rating</strong>:{" "}
                {movie.imdbRating === ""
                  ? `not available`
                  : `${movie.imdbRating}`}
              </h3>
            </div>
          </div>
        </div>

        <div className={classes.synopsisContainer}>
          <div className={classes.movieTitle}>
            <h1>{movie.title}</h1>
          </div>
          <br />
          <br />
          <div className={classes.synopsis}>
            <h2>{movie.storyline}</h2>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
