import classes from './HelpMenu.module.css';
import { NavLink } from 'react-router-dom';
const HelpMenu = () => {
    return <nav className={classes.help__menu}>
        <ul className={classes.help__list} >
            <li><NavLink to="/recipeapp/help/genquest" activeClassName={classes['help__link-active']} className={classes.help__link}>General Questions</NavLink></li>
            <li><NavLink to="/recipeapp/help/userprofile" activeClassName={classes['help__link-active']} className={classes.help__link}>User Profile</NavLink></li>
            <li><NavLink to="/recipeapp/help/foodcooking" activeClassName={classes['help__link-active']} className={classes.help__link}>Food Cooking</NavLink></li>
            <li><NavLink to="/recipeapp/help/datamanagement" activeClassName={classes['help__link-active']} className={classes.help__link}>Data Management</NavLink></li>
        </ul>
    </nav>
}

export default HelpMenu;