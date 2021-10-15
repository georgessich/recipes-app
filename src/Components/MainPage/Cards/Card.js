import classes from "./Card.module.css";
import { Link } from 'react-router-dom';
import IconDairy from './Icons/IconDairy';
import IconGluten from './Icons/IconGluten';
import IconHealth from './Icons/IconHealth';
import IconVegan from './Icons/IconVegan';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.cardimg} src={props.img} />
  <Link to={`/recipeapp/recipes/${props.id}`} onClick={() => props.setPageId(props.id)} className={classes.cardtitle}>{props.title}</Link>
      <span>prep.time: {props.readyInMinutes}min</span>
      <div className={classes.cardicons}>
        {props.vegan && <IconVegan />}
        {props.healthScore > 90 && <IconHealth />}
        {props.dairyFree && <IconDairy />}
        {props.glutenFree && <IconGluten />}
      </div>
    </div>
  );
};

export default Card;
