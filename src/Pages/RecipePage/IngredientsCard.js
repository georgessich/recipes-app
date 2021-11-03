import classes from "./IngredientsCard.module.css";
import { useState, useRef } from "react";
import ButtonArrowDown from './ButtonArrows/ButtonArrowDown';
const IngredientsCard = (props) => {
  const [openFullList, setOpenFullList] = useState("");
  const [heightIncrease, setHeightIncrease] = useState("110px");
  const [buttonTitle, setButtonTitle] = useState("Show Full List");
  const [buttonPosition, setButtonPosition] = useState('80%');
  const [rotate, setRotate] = useState('rotate(0deg)');
  const content = useRef(null)
  function openIngrList() {
    setOpenFullList(openFullList === "" ? "active" : "");
    setHeightIncrease(openFullList === 'active' ? '110px' : `${content.current.scrollHeight + 100}px`);
    setButtonTitle(
      openFullList === "active" ? "Show Full List" : "Hide Full List"
    );
    setButtonPosition(
        openFullList === "active" ? "80%" : "92%"
    );
    setRotate (
        openFullList === 'active' ? 'rotate(0deg)' : 'rotate(180deg)'
    )
  }
  return (
    <div className={classes['ingregients-container']}>
       
      <div
        className={classes.ingredientscard}
       
        style={{ height: `${heightIncrease}` }}
      >
        <span className={classes["ingredientscard-title"]}>Ingredients</span>
        <ul className={classes["ingredientscard-ingr"]} ref={content}>
          {props.ingredients.map((ingredient) => (
            <li className={classes["ingredientscard-text"]}>
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={openIngrList} className={classes["ingredientscard-btn"]} style={{top: `${buttonPosition}`}}>
        {buttonTitle}<ButtonArrowDown style={{transform: `${rotate}`}}/>
      </button>
    </div>
  );
};

export default IngredientsCard;
