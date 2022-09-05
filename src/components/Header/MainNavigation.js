import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <a href="#a" className={classes.logo}>
        Estatery
      </a>
      <div className={classes.headerLeft}>
        <a className={classes.active} href="#b">Rent</a>
        <a href="#c">But</a>
        <a href="#d">Sell</a>
        <a href="#d">Manage Property</a>
        <a href="#d">Resources</a>
      </div>
      <div className={classes.headerRight}>
        <button type="button">Login</button>
        <button className={classes.active} type="button">Sign up</button>
      </div>
    </div>
  );
};

export default MainNavigation;
