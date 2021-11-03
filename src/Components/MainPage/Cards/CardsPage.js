import { useState } from "react";
import CardsMenu from "./CardsMenu";
import Cards from "./Cards";

const CardsPage = (props) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const courseSearch = new URLSearchParams(search).get("group1");
  const cuisineSearch = new URLSearchParams(search).get("group2");
  const intoleranceSearch = new URLSearchParams(search).get("group3");
  const dietSearch = new URLSearchParams(search).get("group4");
  const minCaloriesSearch = new URLSearchParams(search).get("group5");
  const maxCaloriesSearch = new URLSearchParams(search).get("group6");
  const sortBy = new URLSearchParams(search).get("group7"); 
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [course, setCourse] = useState(courseSearch || "");
  const [cuisine, setCuisine] = useState(cuisineSearch || "");
  const [intolerance, setIntolerance] = useState(intoleranceSearch || "");
  const [diet, setDiet] = useState(dietSearch || "");
  const [minCalories, setMinCalories] = useState(minCaloriesSearch || "");
  const [maxCalories, setMaxCalories] = useState(maxCaloriesSearch || "");
  const [sortButton, setSortButton] = useState(sortBy || "popularity");
  return (
    <section >
      <CardsMenu
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        course={course}
        setCourse={setCourse}
        cuisine={cuisine}
        setCuisine={setCuisine}
        intolerance={intolerance}
        setIntolerance={setIntolerance}
        diet={diet}
        setDiet={setDiet}
        minCalories={minCalories}
        setMinCalories={setMinCalories}
        maxCalories={maxCalories}
        setMaxCalories={setMaxCalories}
        sortButton={sortButton}
        setSortButton={setSortButton}
      />
      <Cards
        pageId={props.pageId}
        setPageId={props.setPageId}
        searchQuery={searchQuery}
        course={course}
        cuisine={cuisine}
        intolerance={intolerance}
        diet={diet}
        minCalories={minCalories}
        maxCalories={maxCalories}
        sortButton={sortButton}
        addFavs={props.addFavs}
      />
    </section>
  );
};

export default CardsPage;
