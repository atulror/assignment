import classes from "./SubNavigation.module.css";
import { Fragment } from "react";

const SubNavigation = () => {
  return (
    <Fragment>
      <div className={classes.topnav}>
        <div className={classes.left}>
          <h1>Search Properties to rent</h1>
        </div>
        <div className={classes.right}>
          <input type="text" placeholder="Search with Search Bar" />
        </div>
      </div>
    </Fragment>
  );
};
export default SubNavigation;
