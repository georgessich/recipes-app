import HeaderMenuLogo from './HeaderMenuLogo';
import classes from './HeaderMenu.module.css';
const HeaderMenu = () => {
    return (
        <div className={classes.header__menu}>
            <HeaderMenuLogo/>
            <nav>
                <ul className={classes['header__menu-items']}>
                    <li><a className={classes['header__menu-link']} href="#">Recipes</a></li>
                    <li><a className={classes['header__menu-link']} href="#">Blog</a></li>
                    <li><a className={classes['header__menu-link']} href="#">Help</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu;