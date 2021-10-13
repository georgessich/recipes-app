// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const RecipePage = (props) => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState({});
//   useEffect(() => {
//     const getRecipeById = async () => {
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/${props.pageId}/information`
//       );
//       if (!response.ok) {
//         throw new Error("Ooops!");
//       }

//       const responseData = await response.json();
//       setRecipe(responseData);
//     };
//     getRecipeById();
//   }, []);
  return (
    <section>
      <p>Helloooo from recipe page!</p>
      {/* <p>{recipe.title}</p> */}
    </section>
  );
};

export default RecipePage;
