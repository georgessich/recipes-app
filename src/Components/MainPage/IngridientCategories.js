import IngridientCategory from "./IngridientCategory";
import classes from "./IngridientCategories.module.css";
import Chevron from '../Chevron';
import { useState, useRef } from "react";
const IngridientCategories = () => {
  const [showAccordeon, setShowAccordeon] = useState("");
  const [heightIncrease, setHeightIncrease] = useState("0px");
  const [ opacityNum, setOpacityNum ] = useState('0');
    const [rotate, setRotate] = useState('rotate(0deg)');
  const content = useRef(null);

  function toggleAccordeon () {
      setShowAccordeon(showAccordeon === '' ? 'active' : '');
      setHeightIncrease(
          showAccordeon === 'active' ? '0px' : `${content.current.scrollHeight}px`
      )
      setOpacityNum(
        showAccordeon === 'active' ? '0' : '1'
      )
      setRotate (
          showAccordeon === 'active' ? 'rotate(0deg)' : 'rotate(180deg)'
      ) 
  }
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

  return (
    <div>
      
      <ul className={classes.categories} ref={content} style={{ maxHeight: `${heightIncrease}`}}>
          <div><span className={classes.categories__btn} onClick={toggleAccordeon}>Cousine <Chevron style={{transform: `${rotate}`}}/></span></div>
      
        {types.map((type) => (
          <IngridientCategory style={{opacity: `${opacityNum}`}} type={type} />
        ))}
      </ul>
    </div>
  );
};

export default IngridientCategories;
