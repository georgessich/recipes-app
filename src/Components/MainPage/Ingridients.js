import { useState } from "react";
import IngridientSearchBar from "./SearchBar/IngridientSearchBar";
import classes from "./Ingridients.module.css";
import MediaQuery from "react-responsive";
const Ingridients = () => {
  const [showIngredientsCard, setShowIngredientsCard] = useState("0px");
  const toggleCardHandler = () => {
    setShowIngredientsCard(showIngredientsCard === "0px" ? "80vh" : "0px");
  };
  return (
    <div>
      <MediaQuery minWidth={445}>
        <div
          className={classes.ingridients}
        >
          <div
            className={classes.ingridients__header}
          >
            <h3>Your Ingredients</h3>
          </div>
          <IngridientSearchBar />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={440}>
        <div
          className={classes.ingridients}
          style={{ height: `${showIngredientsCard}` }}
        >
          <div
            className={classes.ingridients__header}
            onClick={toggleCardHandler}
          >
            <h3>Your Ingredients</h3>
          </div>
          <IngridientSearchBar />
        </div>
      </MediaQuery>
    </div>
  );
};

export default Ingridients;
