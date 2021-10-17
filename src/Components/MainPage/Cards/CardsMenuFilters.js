import classes from "./CardsMenuFilters.module.css";

const CardsMenuFilters = () => {
  const cuisines = [
    "american",
    "chinese",
    "european",
    "greek",
    "italian",
    "japanese",
    "mexican",
  ];
  const types = [
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
  return (
    <div className={classes.cardsmenufilters}>
      <div>
        Course
        {types.map((type, i) => (
          <div>
            <input type="radio" name="group1" id={`radio-${i}`} />
            <label for={`radio-${i}`}>{type}</label>
          </div>
        ))}
      </div>
      <div>
        Cuisine
        {cuisines.map((cuisine, i) => (
          <div>
            <input type="radio" name="group2" id={`radio-${i}`} />
            <label for={`radio-${i}`}>{cuisine}</label>
          </div>
        ))}
      </div>
      <div>
        Intolerances
        {intolerances.map((intolerance, i) => (
          <div>
            <input type="radio" name="group3" id={`radio-${i}`} />
            <label for={`radio-${i}`}>{intolerance}</label>
          </div>
        ))}
      </div>
      <div>
        Diet
        {diets.map((diet, i) => (
          <div>
            <input type="radio" name="group4" id={`radio-${i}`} />
            <label for={`radio-${i}`}>{diet}</label>
          </div>
        ))}
      </div>
      <div>
        Calories
        <div>
          <label for="from">From</label>
          <input type="number" name="group6" id="from" />
        </div>
        <div>
          <label for="to">To</label>
          <input type="number" name="group6" id="to" />
        </div>
      </div>
      <div>
        Sort by
        <div>
          <input type="radio" name="group5" id="popularity" />
          <label for="popularity">Popularity</label>
        </div>
        <div>
          <input type="radio" name="group5" id="healthiness" />
          <label for="healthiness">Healthiness</label>
        </div>
        <div>
          <input type="radio" name="group5" id="time" />
          <label for="time">Time</label>
        </div>
      </div>
    </div>
  );
};

export default CardsMenuFilters;
