import { Route, Switch } from 'react-router-dom';
// import { useState } from 'react';
import Layout from './Components/Layout';
import './App.css';
import MainPage from './Pages/MainPage';
import RecipePageTest from './Pages/RecipePage/RecipePageTest';
import Blog from './Pages/Blog/Blog';
function App() {

  // const [pageId, setPageId] = useState('');
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/recipeapp/blog"><Blog /></Route>
        <Route path="/recipeapp/help"><RecipePageTest /></Route>
        {/* <Route path="recipeapp/recipes/:id" pageId={pageId} component={RecipePage} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
