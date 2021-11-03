import classes from "./IngridientSearchBar.module.css";
import { useState, useContext } from 'react';
import SearchAddBtn from "./SearchAddBtn";
import SearchContext from '../MainContext/main-context';
const IngridientSearchBar = () => {
  const [input, setInput] = useState("");
  const {addIngredients, setAddIngredients} = useContext(SearchContext);
  const [tags, setTags] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  
  const buttonClick = (e) => {
      e.preventDefault();
        const trimmedInput = input.trim();
        setTags(prevState => [...prevState, trimmedInput]);
        setAddIngredients(prevState => [...prevState, trimmedInput]);
        setInput('');
    
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
    setAddIngredients(prevState => prevState.filter((tag, i) => i !== index));
    console.log(tags);
    console.log(addIngredients)
  }
  return (
    <div className={classes.ingredients_sb}>
      <div className={classes.tags}>
        {tags.map((tag, index) => (
          <div  key={index} className={classes.tag}>{tag} <button className={classes['tag-btn']} onClick={() => deleteTag(index)}>x</button></div>
         
        ))}
      </div>
      <form className={classes.searchform} action="/" method="get">
        <label htmlFor="search-bar">
          <span className={classes.search__label}>Search Ingredients</span>
        </label>
        <input
          className={classes.searchform__input}
          type="text"
          placeholder="Search ingredients"
          value={input}
          onChange={onChange}
        />
        <button className={classes.searchbtn} onClick={buttonClick}>
          <SearchAddBtn />
        </button>
      </form>
    </div>
  );
};

export default IngridientSearchBar;
