import classes from './CardsMenuSearchBar.module.css'

const CardsMenuSearchBar = (props) => {
    return (
        <form className={classes.searchform} action="/" method="get">
            <label htmlFor="search-bar">
            <span className={classes.search__label}>Search Dishes</span>
        </label>
            <input className={classes.searchform__input} id="search-bar"type="text" placeholder="Search dishes" name="s" value={props.searchQuery} onInput={(e) => props.setSearchQuery(e.target.value)}/>
            <button className={classes.searchbtn} type="submit"></button>
        </form>
    )
}

export default CardsMenuSearchBar;