import HeaderMenuLogo from './HeaderMenuLogo';
import classes from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <div className={classes.header__menu}>
            <NavLink to="/"exact><HeaderMenuLogo/></NavLink>
            
            <nav>
                <ul className={classes['header__menu-items']}>
                    <li><NavLink activeClassName={classes['header__link-active']} className={classes['header__menu-link']} to="/recipeapp/" exact>Recipes</NavLink></li>
                    <li><NavLink activeClassName={classes['header__link-active']} className={classes['header__menu-link']} to="/recipeapp/blog">Blog</NavLink></li>
                    <li><NavLink activeClassName={classes['header__link-active']} className={classes['header__menu-link']} to="/recipeapp/help">Help</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu;