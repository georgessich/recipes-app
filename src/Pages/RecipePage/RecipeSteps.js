import classes from './RecipeSteps.module.css';

const RecipeSteps = (props) => {
  return (
    <div>
      <ul>
        {props.steps.map((step) => (
          <li>
            <span className={classes.recipe_step}>Step {step.number}</span>
            <p className={classes.recipe_text}>{step.step}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSteps;
