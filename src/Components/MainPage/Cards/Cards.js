import { useEffect, useState, useContext, useMemo } from "react";
import classes from "./Cards.module.css";
import Card from "./Card";
import ReactPaginate from "react-paginate";
import SearchContext from "../MainContext/main-context";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import photo from "../../../images/istockphoto-684539464-612x612.jpg";
const Cards = (props) => {
  let numOfRecipes = 12;
  const [recipes, setRecipes] = useState([]);
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [amount, setTotalAmount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const { addIngredients } = useContext(SearchContext);
  const memoizedRecipes = useMemo(() => [recipes, setRecipes], [recipes]);
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${
          props.searchQuery
        }&type=${
          props.course
        }&includeIngredients=${addIngredients.toString()}&cuisine=${
          props.cuisine
        }&intolerances=${props.intolerance}&diet=${props.diet}&sort=${
          props.sortButton
        }&number=12&offset=0&addRecipeInformation=true&apiKey=00963ead543544ac90beddb936f6a7ac`
      );
      if (!response.ok) {
        throw new Error("Ooops!");
      }
      const responseData = await response.json();
      const loadedRecipes = [];
      const results = responseData.results;
      const totalResults = responseData.totalResults;
      setTotalAmount(totalResults);
      setPageCount(Math.ceil(amount / numOfRecipes));
      for (const key in results) {
        loadedRecipes.push({
          id: results[key].id,
          title: results[key].title,
          img: results[key].image,
          readyInMinutes: results[key].readyInMinutes,
          vegan: results[key].vegan,
          healthScore: results[key].healthScore,
          glutenFree: results[key].glutenFree,
          dairyFree: results[key].dairyFree,
        });
      }

      setRecipes(loadedRecipes);
      setIsLoading(false);
      console.log(results);
      console.log(responseData);

      console.log(pageCount);
      console.log(amount);
      console.log(props.course);
    };
    getRecipes().catch((error) => {
      setHttpError(error.message);
    });
  }, [
    amount,
    addIngredients,
    pageCount,
    props.searchQuery,
    props.course,
    props.cuisine,
    props.diet,
    props.intolerance,
    props.sortButton,
  ]);

  const fetchRecipes = async (currentPage) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${
        props.searchQuery
      }&type=${
        props.course
      }&includeIngredients=${addIngredients.toString()}&cuisine=${
        props.cuisine
      }&intolerances=${props.intolerance}&diet=${props.diet}&sort=${
        props.sortButton
      }&number=12&offset=${currentPage}&addRecipeInformation=true&apiKey=00963ead543544ac90beddb936f6a7ac`
    );
    const responseData = await response.json();
    const loadedRecipes = [];
    const results = responseData.results;
    for (const key in results) {
      loadedRecipes.push({
        id: results[key].id,
        title: results[key].title,
        img: results[key].image,
        readyInMinutes: results[key].readyInMinutes,
        vegan: results[key].vegan,
        healthScore: results[key].healthScore,
        glutenFree: results[key].glutenFree,
        dairyFree: results[key].dairyFree,
      });
    }
    setRecipes(loadedRecipes);
  };

  const handlePageClick = async (data) => {
    let currentPage = (data.selected - 1) * numOfRecipes + numOfRecipes;
    const recipesNextPage = await fetchRecipes(currentPage);
    console.log(recipesNextPage);
    console.log(currentPage);
  };

  if (isLoading) {
    return (
      <div className={classes.cards}>
        <LoadingSpinner />
      </div>
    );
  }

  if (amount === 0) {
    return (
      <div className={classes.cards}>
        <div  className={classes.cards__error}>
          <img src={photo} />
          <p>Couldn't find anything...</p>
        </div>
      </div>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  console.log(memoizedRecipes);
  return (
    <div className={classes.cards}>
      <ul className={classes.cards_recipes}>
        {memoizedRecipes[0].map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            img={recipe.img}
            title={recipe.title}
            readyInMinutes={recipe.readyInMinutes}
            vegan={recipe.vegan}
            healthScore={recipe.healthScore}
            dairyFree={recipe.dairyFree}
            glutenFree={recipe.glutenFree}
            pageId={props.pageId}
            setPageId={props.setPageId}
            addFavs={props.addFavs}
            recipe={recipe}
          />
        ))}
      </ul>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={pageCount}
        containerClassName={classes.pagination}
        pageClassName={classes.pagination__page}
        activeClassName={classes.pagination__active}
        previousLabel={"<"}
        nextLabel={">"}
        previousClassName={classes.pagination__prev}
        nextClassName={classes.pagination__prev}
      />
    </div>
  );
};

export default Cards;
