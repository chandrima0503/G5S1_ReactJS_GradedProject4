// mport logo from "./logo.svg";
// import './App.css';

// import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import Root from "./pages/Root";
import MoviesInTheatre from "./pages/MoviesInTheatre";
import TopIndianMovies from "./pages/TopIndianMovies";
import TopMovies from "./pages/TopMovies";
import MovieDetail from "./pages/MovieDetail";
import Favourite from "./pages/Favourite";

const loaderFunction = async () => {
  const response = await fetch("/assets/json/data.json");
  const resData = await response.json();
  return resData;
};

const dataPromise = loaderFunction();

/**
 *
 * @param {{[key: movieSection]: Set<movieIds>}} movieSectionMovieIdsMapper
 * @returns any[]
 */
const getMovie = async (movieSectionMovieIdsMapper) => {
  const data = await dataPromise;

  return Object.entries(movieSectionMovieIdsMapper).reduce(
    (acc, [movieSection, movieIdSet]) => {
      const currentMovieSectionData = data[movieSection].reduce(
        (finalFilteredMoviesInSection, movie) => {
          if (movieIdSet.has(movie.id)) {
            movie.sectionHeading = movieSection;
            finalFilteredMoviesInSection =
              finalFilteredMoviesInSection.concat(movie);
          }
          return finalFilteredMoviesInSection;
        },
        []
      );

      acc = acc.concat(currentMovieSectionData);

      return acc;
    },
    []
  );
};

const movieLoader = async ({ params }) => {
  const movieId = params.movieId;
  const movieSection = params.movieSection;

  const result = await getMovie({
    [movieSection]: new Set([movieId]),
  });

  return result[0];
};

export const getFavorites = async (params) => {
  return getMovie(params);
};

// const eachSection = data.map((eachSectionData) => eachSectionData);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => {
      const datas = await dataPromise;

      const movieDetails = Object.entries(datas).reduce(
        (acc, eachMovieTuple) => {
          const [movieSectionKey, movieListUnderMovieSectionKey] =
            eachMovieTuple;

          const result = movieListUnderMovieSectionKey.map((eachMovieDtl) => {
            const finalData = {
              movieSectionName: movieSectionKey,
              id: eachMovieDtl.id,
              title: eachMovieDtl.title,
              posterurl: eachMovieDtl.posterurl,
            };

            return finalData;
          });

          acc.push(...result);

          return acc;
        },
        []
      );

      return movieDetails;
    },
    children: [
      // {
      //   path: "",
      //   element: <Home />,
      //   loader: loaderFunction,

      // },
      { index: true, path: "home", element: <Home />, loader: loaderFunction },

      {
        path: "coming-soon",
        element: <ComingSoon sectionHeading="movies-coming" />,
        loader: async () => {
          // console.log("hello");
          const newData = await dataPromise;
          return newData["movies-coming"];
        },
      },

      {
        path: "movies-in-theatre",
        element: <MoviesInTheatre sectionHeading="movies-in-theaters" />,
        loader: async () => {
          // console.log("hello");
          const newData = await dataPromise;
          console.log(newData);
          return newData["movies-in-theaters"];
        },
      },

      {
        path: "top-indian-movies",
        element: <TopIndianMovies sectionHeading="top-rated-india" />,
        loader: async () => {
          // console.log("hello");
          const newData = await dataPromise;
          return newData["top-rated-india"];
        },
      },

      {
        path: "top-rated",
        element: <TopMovies sectionHeading="top-rated-movies" />,
        loader: async () => {
          // console.log("hello");
          const newData = await dataPromise;
          return newData["top-rated-movies"];
        },
      },

      {
        path: "view/:movieId/:movieSection",
        element: <MovieDetail />,
        loader: movieLoader,
      },

      {
        path: "favorites",
        element: <Favourite sectionHeading="Favorite" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
