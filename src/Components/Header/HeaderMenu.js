import HeaderMenuLogo from './HeaderMenuLogo';
import classes from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';
import DeskNav from './DeskNav';
import MobileNav from './MobileNav';
const HeaderMenu = () => {
    return (
        <div className={classes.header__menu}>
            <NavLink to="/recipes-app/"exact><HeaderMenuLogo/></NavLink>
            
            <div className={classes.header__nav}>
                <DeskNav />
                <MobileNav/>
            </div>
        </div>
    )
}

export default HeaderMenu;