import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/sharedComponents/Button";
import Card from "../components/sharedComponents/Card";
import classes from "./FavouriteTile.module.css";

const FavouriteTile = (props) => {
  const handleClick = () => {
    props.handleRemoveIdFromFavorite({
      id: props.data.id,
      sectionHeading: props.data.sectionHeading,
    });
  };

  return (
    <>
      <Card>
        <div className={classes["content-container"]}>
          <Link
            className={classes.favRouterLink}
            to={`/view/${props.data.id}/${props.data.sectionHeading}`}
          >
            <div className={classes["image-container"]}>
              <div className={classes.overlay}></div>
              <img
                className={classes.originalPoster}
                src={props.data.posterurl}
              />
              <img
                className={classes.blurBackground}
                src={props.data.posterurl}
              />
            </div>
          </Link>
          <div className={classes["details-add-fav-container"]}>
            <div className={classes["details-container"]}>
              <div className={classes["movie-title"]}>
                <h2>{props.data.title}</h2>
              </div>
              <div className={classes.genre}>
                <p>
                  <strong>Genre :</strong> {props.data.genres.join(",")}
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

              <FaHeart
                className={classes.favBtn}
                size="1.5rem"
                color={"red"}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default FavouriteTile;
