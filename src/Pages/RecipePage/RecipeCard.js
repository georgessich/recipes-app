import classes from './RecipeCard.module.css';

const RecipeCard = (props) => {
  return (
    <div className={classes.recipecard}>
      <img className={classes.recipecard__img} src={props.image} alt="dish" />
      <div className={classes.recipecard__summary} dangerouslySetInnerHTML={{__html: props.summary}}/>
    </div>
  );
};

export default RecipeCard;
