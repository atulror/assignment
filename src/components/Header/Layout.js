import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import SubNavigation from './SubNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <SubNavigation/>
      <main className={classes.main}>{props.children}</main>
      <p className={classes.para}>Must enter location to use filters</p>
    </Fragment>
  );
};

export default Layout;