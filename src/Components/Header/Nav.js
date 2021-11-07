import { NavLink } from "react-router-dom";
import classes from './HeaderMenu.module.css';
const Nav = (props) => {
  return (
      <ul className={classes["header__menu-items"]}>
        <li onClick={() => props.isMobile && props.closeMobileNav()}>
          <NavLink
            activeClassName={classes["header__link-active"]}
            className={classes["header__menu-link"]}
            to="/recipeapp/favourites/"
          >
            Recipes
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileNav()}>
          <NavLink
            activeClassName={classes["header__link-active"]}
            className={classes["header__menu-link"]}
            to="/recipeapp/blog"
          >
            Blog
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileNav()}>
          <NavLink
            activeClassName={classes["header__link-active"]}
            className={classes["header__menu-link"]}
            to="/recipeapp/help"
          >
            Help
          </NavLink>
        </li>
      </ul>
  );
};

export default Nav;