import React, { useState } from "react";

const FavoriteContext = React.createContext({
  movieIdsFavorited: new Set(),
  favMovieDetails: {},
  addToFavorite: ({}) => {},
  removeFromFavorite: ({}) => {},
  toggleFavorite: ({}) => {},
});

export const FavoriteContextProvider = (props) => {
  const [movieIdsFavorited, setMovieIdsFavorited] = useState(new Set());
  const [favMovieDetails, setFavMovieDetails] = useState({});

  const addFinalMovieDetail = ({ id, sectionHeading }) => {
    const finalMovieDetail = {
      ...favMovieDetails,
    };

    if (sectionHeading in finalMovieDetail === false) {
      finalMovieDetail[sectionHeading] = new Set();
    }

    finalMovieDetail[sectionHeading].add(id);

    return finalMovieDetail;
  };

  const deleteFinalMovieDetail = ({ id, sectionHeading }) => {
    const finalMovieDetail = {
      ...favMovieDetails,
    };

    if (sectionHeading in finalMovieDetail) {
      finalMovieDetail[sectionHeading].delete(id);
    }

    return finalMovieDetail;
  };

  const handleAddToFavorite = ({ id, sectionHeading }) => {
    setMovieIdsFavorited(new Set([...movieIdsFavorited, id]));

    const finalMovieDetail = addFinalMovieDetail({ id, sectionHeading });
    setFavMovieDetails({
      ...finalMovieDetail,
    });
  };

  const handleRemoveFromFavorite = ({ id, sectionHeading }) => {
    const finalMovieIds = new Set([...movieIdsFavorited]);
    finalMovieIds.delete(id);

    setMovieIdsFavorited(finalMovieIds);

    const finalMovieDetail = deleteFinalMovieDetail({ id, sectionHeading });
    setFavMovieDetails({
      ...finalMovieDetail,
    });
  };

  const handleToggleFavorite = ({ id, sectionHeading }) => {
    if (movieIdsFavorited.has(id)) {
      handleRemoveFromFavorite({ id, sectionHeading });
    } else {
      handleAddToFavorite({ id, sectionHeading });
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        movieIdsFavorited: movieIdsFavorited,
        favMovieDetails: favMovieDetails,
        addToFavorite: handleAddToFavorite,
        removeFromFavorite: handleRemoveFromFavorite,
        toggleFavorite: handleToggleFavorite,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
