import classes from './IngridientSearchBar.module.css'
import SearchAddBtn from './SearchAddBtn';
const IngridientSearchBar = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const findIngredients = (ingredients, query) => {
        
    }
    return (
        <form className={classes.searchform} action="/" method="get">
            <label htmlFor="search-bar">
            <span className={classes.search__label}>Search Ingredients</span>
        </label>
            <input className={classes.searchform__input} id="search-bar"type="text" placeholder="Search ingredients" name="s"/>
            <button className={classes.searchbtn} type="submit"><SearchAddBtn /></button>
        </form>
        
    )
}

export default IngridientSearchBar;