import { useContext, useEffect, useState } from "react";
import { getFavorites } from "../App";
import FavoriteContext from "../context/favorite-context";
import FavouriteTile from "./FavouriteTile";

import classes from "./Favourite.module.css";

const Favourite = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const [isLoading, setIsLoading] = useState(true);

  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFavorites(favoriteCtx.favMovieDetails);

      setFavoriteData(data);

      console.log(data);
      setIsLoading(false);
    })();
  }, []);

  const handleRemoveIdFromFavorite = ({ id, sectionHeading }) => {
    favoriteCtx.removeFromFavorite({ id, sectionHeading });

    setFavoriteData(favoriteData.filter((each) => each.id !== id));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>My Favourites</h1>
        </div>
        <div className={classes.favList}>
          {isLoading && <div>Loading</div>}
          {!isLoading &&
            favoriteData.map((each) => {
              return (
                <FavouriteTile
                  data={each}
                  handleRemoveIdFromFavorite={handleRemoveIdFromFavorite}
                ></FavouriteTile>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Favourite;
