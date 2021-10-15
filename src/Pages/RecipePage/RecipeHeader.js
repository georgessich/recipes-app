import classes from "./RecipeHeader.module.css";
const RecipeHeader = (props) => {
  return (
    <div className={classes.recipeheader}>
      <h2 className={classes.recipeheader__title}>{props.title}</h2>
      <span className={classes.recipeheader__prep}>prep.time: </span>
      <span className={classes.recipeheader__time}>{props.prep} mins</span>
    </div>
  );
};

export default RecipeHeader;
