import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";

const Search = ({ entireSearchData }) => {
  const [searchedFor, setSearchedFor] = useState("");

  const [movieExist, setMovieExist] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [linkClicked, setLinkClicked] = useState(false);

  // const RequiredDataArray = [movieTitles, movieImgs]
  useEffect(() => {
    if (searchedFor) {
      const lowercaseSearchedFor = searchedFor.toLowerCase();

      const searchList = entireSearchData.filter((each) => {
        if (each.title.toLowerCase().includes(lowercaseSearchedFor)) {
          setMovieExist(true);
          return true;
        } else {
          setMovieExist(false);
          return false;
        }
      });

      setMovieData(searchList);

      console.log(searchList);
    } else {
      setMovieExist(false);
      setMovieData([]);
    }
  }, [searchedFor, entireSearchData]);

  const searchedForHandler = (event) => {
    setSearchedFor(event.target.value);
    setLinkClicked(false);
  };
  const onClickHandler = () => {
    setSearchedFor("");
    setLinkClicked(true);
  };
  // console.log(eachSectionDetail);
  return (
    <>
      <div className={classes.searchSection}>
        <div className={classes.searchInputandIcon}>
          <div className={classes.inputSection}>
            <input
              type="text"
              placeholder="enter movie name"
              className={classes.input}
              value={searchedFor}
              onChange={searchedForHandler}
            />
          </div>
          <div className={classes.icon}>
            <FaSistrix color="white" />
          </div>
        </div>
        <div className={classes.movieListSection}>
          {!movieExist &&
            movieData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={
                    !linkClicked
                      ? classes.movieImgandTitleContainer
                      : classes.movieImgandTitleContainerHide
                  }
                >
                  <div className={classes.imgContainer}>
                    <img src={data.posterurl} alt={data.title} />
                  </div>
                  <div className={classes.movieTitle}>
                    <Link
                      to={`/view/${data.id}/${data.movieSectionName}`}
                      onClick={onClickHandler}
                    >
                      {" "}
                      {data.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          {movieExist && <div></div>}
        </div>
      </div>
    </>
  );
};

export default Search;
