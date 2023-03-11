import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import FavoriteContext from "../../context/favorite-context";
import Button from "./Button";
import Card from "./Card";
import classes from "./MovieTile.module.css";

const MovieTile = (props) => {
  const favoriteCtx = useContext(FavoriteContext);

  const handleToggleFavorite = () => {
    favoriteCtx.toggleFavorite({
      id: props.data.id,
      sectionHeading: props.sectionHeading,
    });
  };

  return (
    <>
      <Card>
        <div className={classes["content-container"]}>
          <div className={classes["image-container"]}>
            <div className={classes.overlay}></div>
            <img className={classes.originalPoster} src={props.data.image} />
            <img className={classes.blurBackground} src={props.data.image} />
          </div>
          <div className={classes["details-add-fav-container"]}>
            <div className={classes["details-container"]}>
              <div className={classes["movie-title"]}>
                <h2>{props.data.title}</h2>
              </div>
              <div className={classes.genre}>
                <p>
                  <strong>Genre :</strong> {props.data.genre.join(",")}
                </p>
              </div>
              <div className={classes.genre}>
                <p>
                  <strong>Year :</strong> {props.data.year}
                </p>
              </div>
              <div className={classes.genre}>
                <p>
                  {" "}
                  <strong>Release Date :</strong> {props.data.releaseDate}
                </p>
              </div>
            </div>

            <div className={classes["button-container"]}>
              <Link
                className={classes.exploreLink}
                to={`/view/${props.data.id}/${props.sectionHeading}`}
              >
                {" "}
                <Button className={classes.exploreBtn} data="EXPLORE" />
              </Link>
              {/* <Button className={classes.favBtn} data="Add to Favourite" /> */}
              <FaHeart
                className={classes.favBtn}
                size="1.5rem"
                color={
                  favoriteCtx.movieIdsFavorited.has(props.data.id)
                    ? "red"
                    : "white"
                }
                onClick={handleToggleFavorite}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default MovieTile;
