import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const MainNavigation = ({ entireSearchData }) => {
  return (
    <div className={classes.navigation}>
      <div className={classes.homeNav}>
        <NavLink className={classes.navLink} to={"/home"} end>
          {" "}
          <h2>MovieHub</h2>{" "}
        </NavLink>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/home"}
            end
          >
            Home{" "}
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/coming-soon"}
            end
          >
            Coming soon{" "}
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/movies-in-theatre"}
            end
          >
            Movies in theater
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/top-indian-movies"}
            end
          >
            Top rated India
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/top-rated"}
            end
          >
            Top rated
          </NavLink>
        </p>
      </div>
      <div>
        <Search entireSearchData={entireSearchData} />
      </div>
      <div className={classes.favouriteNav}>
        <NavLink className={classes.favouriteNavLink} to={"/favorites"}>
          {" "}
          <p>My Favourites</p>
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
