import IngridientSearchBar from './SearchBar/IngridientSearchBar';
import classes from './Ingridients.module.css';
const Ingridients = () => {
    return (
        <div className={classes.ingridients}>
            <div className={classes.ingridients__header}>
                <h3>Your Ingredients</h3>
            </div>
            <IngridientSearchBar />
        </div>
    )
}

export default Ingridients;