import classes from './IngridientSearchBar.module.css'
import SearchAddBtn from './SearchAddBtn';
const IngridientSearchBar = () => {
    return (
        <form className={classes.searchform} action="/" method="get">
            <label htmlFor="search-bar">
            <span className={classes.search__label}>Search Ingredients</span>
        </label>
            <input className={classes.searchform__input} id="search-bar"type="text" placeholder="Search ingredients" />
            <button className={classes.searchbtn} type="submit"><SearchAddBtn /></button>
        </form>
        
    )
}

export default IngridientSearchBar;