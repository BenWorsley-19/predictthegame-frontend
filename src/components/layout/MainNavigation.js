// import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PredictTheGame</div>
      {/* <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/about' activeClassName={classes.active}>
              About
            </NavLink>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default MainNavigation;
