import classes from "./MainPage.module.css";
import Ingridients from "../Components/MainPage/Ingridients";
import CardsPage from "../Components/MainPage/Cards/CardsPage";
import SearchContext from "../Components/MainPage/MainContext/main-context";
const MainPage = (props) => {
  return (
    <SearchContext.Provider>
      <div className={classes.mainpage}>
        <Ingridients />
        <CardsPage pageId={props.pageId} setPageId={props.setPageId} />
      </div>
    </SearchContext.Provider>
  );
};

export default MainPage;
