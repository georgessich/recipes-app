import classes from "./CardsMenuFilters.module.css";

const CardsMenuFilters = (props) => {
  const cuisines = [
    "american",
    "chinese",
    "european",
    "greek",
    "italian",
    "japanese",
    "mexican",
  ];
  const courses = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ];
  const intolerances = [
    "dairy",
    "egg",
    "gluten",
    "grain",
    "peanut",
    "seafood",
    "soy",
    "wheat",
  ];
  const diets = ["ketogenic", "vegetarian", "vegan", "paleo"];
  const resetInputs = () => {
    props.setCourse("");
    props.setCuisine("");
    props.setDiet("");
    props.setIntolerance("");
    props.setMinCalories("");
    props.setMaxCalories("");
  }
  return (
    <form className={classes.cardsmenufilters} style={props.style}>
      <div className={classes["cardsmenufilters-buttons"]}>
        <div >
          <span className={classes.cardsmenufilters_title}>Course</span>
          {courses.map((course, i) => (
            <div className={classes.cardsmenufilters_container}>
              <input value={course} onChange={(e) => props.setCourse(e.target.value)} type="radio" name="group1" id={`radio-t${i}`} />
              <label
                className={classes.cardsmenufilters_label_inp}
                htmlFor={`radio-t${i}`}
              >
                <span>{course}</span>
              </label>
            </div>
          ))}
        </div>
        <div>
        <span className={classes.cardsmenufilters_title}>Cuisine</span>
          {cuisines.map((cuisine, i) => (
            <div className={classes.cardsmenufilters_container}>
              <input value={cuisine} onChange={(e) => props.setCuisine(e.target.value)} type="radio" name="group2" id={`radio-c${i}`} />
              <label
                className={classes.cardsmenufilters_label_inp}
                htmlFor={`radio-c${i}`}
              >
                <span>{cuisine}</span>
              </label>
            </div>
          ))}
        </div>
        <div>
        <span className={classes.cardsmenufilters_title}>Intolerances</span>
          {intolerances.map((intolerance, i) => (
            <div className={classes.cardsmenufilters_container}>
              <input value={intolerance} onChange={(e) => props.setIntolerance(e.target.value)} type="radio" name="group3" id={`radio-i${i}`} />
              <label
                className={classes.cardsmenufilters_label_inp}
                htmlFor={`radio-i${i}`}
              >
                <span>{intolerance}</span>
              </label>
            </div>
          ))}
        </div>
        <div>
        <span className={classes.cardsmenufilters_title}>Diet</span>
          {diets.map((diet, i) => (
            <div className={classes.cardsmenufilters_container}>
              <input value={diet} onChange={(e) => props.setDiet(e.target.value)} type="radio" name="group4" id={`radio-d${i}`} />
              <label
                className={classes.cardsmenufilters_label_inp}
                htmlFor={`radio-d${i}`}
              >
                <span>{diet}</span>
              </label>
            </div>
          ))}
        </div>
        <div className={classes.cardsmenufilters_title}>
          Calories
          <div className={classes.cardsmenufilters_calor}>
            <label className={classes.cardsmenufilters_label} htmlFor="from">
              from
            </label>
            <input
              className={classes.cardsmenufilters_number}
              type="number"
              name="group5"
              id="from"
              value={props.minCalories}
              onInput={(e) => props.setMinCalories(e.target.value)}
            />
          </div>
          <div className={classes.cardsmenufilters_calor}>
            <label className={classes.cardsmenufilters_label} htmlFor="to">
              to
            </label>
            <input
              className={classes.cardsmenufilters_number}
              type="number"
              name="group6"
              id="to"
              value={props.maxCalories}
              onInput={(e) => props.setMaxCalories(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.cardsmenufilters_title}>
          Sort by
          <div>
            <input type="radio" name="group7" id="popularity" checked value={props.sortButton} onChange={(e) => props.setSortButton(e.target.value)}/>
            <label className={classes.cardsmenufilters_label} htmlFor="popularity">
              Popularity
            </label>
          </div>
          <div>
            <input type="radio" name="group7" id="healthiness"  value={props.sortButton} onChange={(e) => props.setSortButton(e.target.value)}/>
            <label className={classes.cardsmenufilters_label} htmlFor="healthiness">
              Healthiness
            </label>
          </div>
          <div>
            <input type="radio" name="group7" id="time"  value={props.sortButton} onChange={(e) => props.setSortButton(e.target.value)}/>
            <label className={classes.cardsmenufilters_label} htmlFor="time">
              Time
            </label>
          </div>
        </div>
      </div>
      <button type="reset" onClick={resetInputs} className={classes["cardsmenufilters-reset"]}>&times; Clear All</button>
      <button type="submit" className={classes["cardsmenufilters-btn"]}>Apply</button>
    </form>
  );
};

export default CardsMenuFilters;
