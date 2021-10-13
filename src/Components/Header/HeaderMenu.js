import HeaderMenuLogo from './HeaderMenuLogo';
import classes from './HeaderMenu.module.css';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <div className={classes.header__menu}>
            <Link to="/"exact><HeaderMenuLogo/></Link>
            
            <nav>
                <ul className={classes['header__menu-items']}>
                    <li><Link className={classes['header__menu-link']} to="/recipeapp/blog">Recipes</Link></li>
                    <li><Link className={classes['header__menu-link']} to="/recipeapp/blog">Blog</Link></li>
                    <li><Link className={classes['header__menu-link']} to="/recipeapp/help">Help</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu;