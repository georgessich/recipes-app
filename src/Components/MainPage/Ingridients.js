import IngridientSearchBar from './SearchBar/IngridientSearchBar';
import IngridientCategories from './IngridientCategories';
import classes from './Ingridients.module.css';
const Ingridients = () => {
    return (
        <div className={classes.ingridients}>
            <div className={classes.ingridients__header}>
                <h3>Your Ingredients</h3>
            </div>
            <IngridientSearchBar />
            <IngridientCategories />
        </div>
    )
}

export default Ingridients;