import { Route, Switch } from "react-router-dom";
import { useState, useContext, useMemo } from "react";
import Layout from "./Components/Layout";
import "./App.css";
import MainPage from "./Pages/MainPage";
import RecipePageTest from "./Pages/RecipePage/RecipePageTest";
import Blog from "./Pages/Blog/Blog";
import Help from "./Pages/Help/Help";
import PostPage from "./Pages/Blog/PostPage";
import BlogContext from "./Pages/Blog/BlogContext/blog-context";
function App() {
  const [pageId, setPageId] = useState("");
  const [postPageId, setPostPageId] = useState("");
  const [blogPage, setBlogPage] = useState([]);
  const value = useMemo(
    () => ({ blogPage, setBlogPage }),
    [blogPage]
  )
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainPage pageId={pageId} setPageId={setPageId} />
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
