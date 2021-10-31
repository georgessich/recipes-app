import classes from "./Favourites.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Favourites = (props) => {
  const FavMenu = () => {
    return (
      <nav className={classes["favourites__menu"]}>
        <ul>
          <li className={classes["favourites__link-active"]}>Favourites</li>
        </ul>
      </nav>
    );
  };
  const FavCard = (fav) => {
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    const showBtnHandler = () => {
      setShowCloseBtn(true);
    };
    const closeBtnHandler = () => {
      setShowCloseBtn(false);
    };
    return (
      <div className={classes["favourites__cards"]}>
        <div
          className={classes["favourites__card"]}
          onMouseEnter={showBtnHandler}
          onMouseLeave={closeBtnHandler}
        >
          <img src={fav.img} className={classes["favourites__card-img"]} />
          <Link
            to={`/recipeapp/recipes/${fav.id}`}
            onClick={() => props.setPageId(fav.id)}
            className={classes["favourites__card-title"]}
          >
            {fav.title}
          </Link>
          {showCloseBtn && (
            <button
              className={classes["favourites__card-btn"]}
              onClick={() => props.removeFavs(fav.fav)}
            >
              &#10006;
            </button>
          )}
        </div>
      </div>
    );
  };
  return (
    <section>
      <div className={classes["favourites__title-frame"]}>
        <span className={classes.favourites__title}>User Area</span>
      </div>
      <div className={classes["favourites__disp"]}>
        <FavMenu />
        <div className={classes["favoutites__disp-container"]}>
          {props.favs == 0 ? <p>You don't add anything so far..</p> : props.favs.map((fav) => (
            <FavCard img={fav.img} title={fav.title} fav={fav} id={fav.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
