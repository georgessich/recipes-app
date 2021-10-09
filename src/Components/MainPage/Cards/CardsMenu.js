import classes from './CardsMenu.module.css';
import CardsMenuSearchBar from './CardsMenuSearchBar';
const CardsMenu = () => {
    return (
        <div className={classes.cardsmenu}>
            <CardsMenuSearchBar />
        </div>
    )
}

export default CardsMenu;