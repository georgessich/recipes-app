import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import './App.css';
import MainPage from './Pages/MainPage';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" >
          <MainPage />
        </Route>
        <Route path="/recipeapp/blog"></Route>
        <Route path="recipeapp/help"></Route>
      </Switch>
    </Layout>
  );
}

export default App;
