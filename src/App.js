import { Route, Switch } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import Layout from "./Components/Layout";
import "./App.css";
import MainPage from "./Pages/MainPage";
import RecipePageTest from "./Pages/RecipePage/RecipePageTest";
import Blog from "./Pages/Blog/Blog";
import Help from "./Pages/Help/Help";
import PostPage from "./Pages/Blog/PostPage";
import Favourites from "./Pages/Favourites/Favourites";
import BlogContext from "./Pages/Blog/BlogContext/blog-context";
function App() {
  const [pageId, setPageId] = useState("");
  const [postPageId, setPostPageId] = useState("");
  const [blogPage, setBlogPage] = useState([]);
  const value = useMemo(() => ({ blogPage, setBlogPage }), [blogPage]);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  useEffect(() => {
    const favRecipes = JSON.parse(localStorage.getItem("recipe-fav"));
    setFavouriteRecipes(favRecipes);
  }, []);
  const addToLocalStorage = (recipes) => {
    localStorage.setItem("recipe-fav", JSON.stringify(recipes));
  };
  const addRecipeToFavs = (recipe) => {
    let newFavs = [...(favouriteRecipes || []), recipe];
    let uniqueFavs = [...new Set(newFavs)];
    setFavouriteRecipes(uniqueFavs);
    addToLocalStorage(uniqueFavs);
  };

  const removeRecipeFromFavs = (recipe) => {
    let newFavs = favouriteRecipes.filter(
      (favouriteRecipe) => favouriteRecipe.id !== recipe.id
    );
    setFavouriteRecipes(newFavs);
    addToLocalStorage(newFavs);
    console.log(newFavs);
  };
  return (
    <Layout>
      <Switch>
        <Route path="/recipes-app/" exact>
          <MainPage
            pageId={pageId}
            setPageId={setPageId}
            addFavs={addRecipeToFavs}
          />
        </Route>
        <Route path="/recipeapp/favourites/">
          <Favourites
            favs={favouriteRecipes}
            setPageId={setPageId}
            removeFavs={removeRecipeFromFavs}
          />
        </Route>

        <Route path="/recipeapp/help/">
          <Help />
        </Route>
        <Route path="/recipeapp/recipes/:id">
          <RecipePageTest pageId={pageId} />
        </Route>
        <BlogContext.Provider value={value}>
          <Route path="/recipeapp/blog" exact>
            <Blog postPageId={postPageId} setPostPageId={setPostPageId} />
          </Route>
          <Route path="/recipeapp/blog/:id">
            <PostPage postPageId={postPageId} />
          </Route>
        </BlogContext.Provider>
      </Switch>
    </Layout>
  );
}

export default App;
