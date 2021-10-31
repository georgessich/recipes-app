import { useEffect, useState, useContext } from "react";
import classes from "./Cards.module.css";
import Card from "./Card";
import ReactPaginate from "react-paginate";
import SearchContext from '../MainContext/main-context';
const Cards = (props) => {
  let numOfRecipes = 12;
  const [recipes, setRecipes] = useState([]);
  const [httpError, setHttpError] = useState();
  const [amount, setTotalAmount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const { addIngredients } = useContext(SearchContext);
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${props.searchQuery}&type=${props.course}&includeIngredients=${addIngredients.toString()}&cuisine=${props.cuisine}&intolerances=${props.intolerance}&diet=${props.diet}&sort=${props.sortButton}&number=12&offset=0&addRecipeInformation=true&apiKey=00963ead543544ac90beddb936f6a7ac`
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

      console.log(results);
      console.log(responseData);

      console.log(pageCount);
      console.log(amount);
      console.log(props.course);
    };
    getRecipes().catch((error) => {
      setHttpError(error.message);
    });
  }, [amount, addIngredients, pageCount, props.searchQuery, props.course, props.cuisine, props.diet, props.intolerance, props.sortButton]);

  const fetchRecipes = async (currentPage) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${props.searchQuery}&type=${props.course}&includeIngredients=${addIngredients.toString()}&cuisine=${props.cuisine}&intolerances=${props.intolerance}&diet=${props.diet}&sort=${props.sortButton}&number=12&offset=${currentPage}&addRecipeInformation=true&apiKey=00963ead543544ac90beddb936f6a7ac`
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

  if(amount === 0) {
    return <section>
      <p>Can't find anything</p>
    </section>
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <div className={classes.cards}>
      <ul className={classes.cards_recipes}>
        {recipes.map((recipe) => (
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
