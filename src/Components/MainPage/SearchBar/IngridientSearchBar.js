import classes from "./IngridientSearchBar.module.css";
import { useState } from 'react';
import SearchAddBtn from "./SearchAddBtn";

const IngridientSearchBar = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
  
    if (key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput('');
    } 
    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
        e.preventDefault();
        const tagsCopy = [...tags];
        const poppedTag = tagsCopy.pop();
    
        setTags(tagsCopy);
        setInput(poppedTag);
      }
      setIsKeyReleased(false);
    
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  }
  
  const buttonClick = (e) => {
      e.preventDefault();
        const trimmedInput = input.trim();
        setTags(prevState => [...prevState, trimmedInput]);
        setInput('');
  }

  const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))

  }
  return (
    <div>
      <div className={classes.tags}>
        {tags.map((tag, index) => (
          <div className={classes.tag}>{tag} <button className={classes['tag-btn']} onClick={() => deleteTag(index)}>x</button></div>
         
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
          onKeyDown={onKeyDown}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <button className={classes.searchbtn} onClick={buttonClick}>
          <SearchAddBtn />
        </button>
      </form>
    </div>
  );
};

export default IngridientSearchBar;
