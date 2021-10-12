import classes from './CardsMenu.module.css';
import CardsMenuSearchBar from './CardsMenuSearchBar';
const CardsMenu = (props) => {
    return (
        <div className={classes.cardsmenu}>
            <CardsMenuSearchBar searchQuery={props.searchQuery}
            setSearchQuery={props.setSearchQuery}/>
        </div>
    )
}

export default CardsMenu;