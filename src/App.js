import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Layout from './Components/Layout';
import './App.css';
import MainPage from './Pages/MainPage';
import RecipePageTest from './Pages/RecipePage/RecipePageTest';
import Blog from './Pages/Blog/Blog';
import Help from './Pages/Help/Help';
function App() {

  const [pageId, setPageId] = useState('');
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MainPage  pageId={pageId} setPageId={setPageId}/>
        </Route>
        <Route path="/recipeapp/blog"><Blog /></Route>
        <Route path="/recipeapp/help/"><Help /></Route>
        <Route path="/recipeapp/recipes/:id"><RecipePageTest  pageId={pageId}/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
