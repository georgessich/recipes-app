import { useState, useEffect } from "react";
import RecipeHeader from "./RecipeHeader";
import RecipeCard from "./RecipeCard";
import IngredientsCard from "./IngredientsCard";
import RecipeSteps from './RecipeSteps';
const RecipePageTest = (props) => {
  const [getRecipe, setGetRecipe] = useState({});
  const [httpError, setHttpError] = useState();
  const [getIngredient, setGetIngredient] = useState([]);
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    const getRecipeById = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${props.pageId}/information?apiKey=00963ead543544ac90beddb936f6a7ac`
      );
      if (!response.ok) {
        throw new Error("Ooops!");
      }
      const responseData = await response.json();
      setGetRecipe(responseData);
      const loadedIngredients = [];
      const loadedSteps = [];
      const ingredientsData = responseData.extendedIngredients;
      const stepsData = responseData.analyzedInstructions[0].steps;
      for (const key in ingredientsData) {
        loadedIngredients.push({
          id: key,
          name: ingredientsData[key].original,
        });
      }
      for (const key in stepsData) {
        loadedSteps.push({
          id: key,
          number: stepsData[key].number,
          step: stepsData[key].step
        })
      }
      setGetIngredient(loadedIngredients);
      console.log(loadedIngredients);
      setSteps(loadedSteps);
      console.log(loadedSteps);
    };
    getRecipeById().catch((error) => {
      setHttpError(error.message);
    });
  }, []);
  // const steps = getRecipe.analyzedInstructions[0].steps;
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section>
      <RecipeHeader title={getRecipe.title} prep={getRecipe.readyInMinutes} />
      <RecipeCard image={getRecipe.image} summary={getRecipe.summary} />
      <IngredientsCard ingredients={getIngredient} key={getIngredient.id}/>
      <RecipeSteps steps={steps}/>
    </section>
  );
};

export default RecipePageTest;
