import classes from "./CardsMenu.module.css";
import CardsMenuSearchBar from "./CardsMenuSearchBar";
import CardsMenuFilters from "./CardsMenuFilters";
import { useState } from "react";
const CardsMenu = (props) => {
  const [showFilters, setShowFilters] = useState("");
  const [displayFilters, setDisplayFilters] = useState("0px");
  const [opacity, setOpacity] = useState("0");
  const [paddingBottom, setPaddingBottom] = useState("0px");
  const showFiltersHandler = () => {
    setShowFilters(showFilters === "" ? "active" : "");
    setDisplayFilters(showFilters === "active" ? "auto" : "0px");
    setOpacity(showFilters === "active" ? "1" : "0");
    setPaddingBottom(showFilters === "active" ? "40px" : "0px");
  };
  return (
    <div>
      <div className={classes.cardsmenu}>
        <CardsMenuSearchBar
          searchQuery={props.searchQuery}
          setSearchQuery={props.setSearchQuery}
        />
        <button className={classes.cardsmenu_btn} onClick={showFiltersHandler}>Filter</button>
      </div>
      <CardsMenuFilters
        course={props.course}
        setCourse={props.setCourse}
        cuisine={props.cuisine}
        setCuisine={props.setCuisine}
        intolerance={props.intolerance}
        setIntolerance={props.setIntolerance}
        diet={props.diet}
        setDiet={props.setDiet}
        minCalories={props.minCalories}
        setMinCalories={props.setMinCalories}
        maxCalories={props.maxCalories}
        setMaxCalories={props.setMaxCalories}
        sortButton={props.sortButton}
        setSortButton={props.setSortButton}
        style={{
          height: `${displayFilters}`,
          opacity: `${opacity}`,
          paddingBottom: `${paddingBottom}`,
        }}
      />
    </div>
  );
};

export default CardsMenu;
