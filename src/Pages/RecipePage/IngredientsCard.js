import classes from './IngredientsCard.module.css';

const IngredientsCard = (props) => {
    return <div className={classes.ingredientscard}>
        <span>Ingredients</span> 
        <ul>
            {props.ingredients.map((ingredient) => (
                <li>{ingredient.name}</li>
                ))}
        </ul>
        <button className={classes['ingredientscard-btn']}>Show Full List</button>
    </div>
}

export default IngredientsCard;