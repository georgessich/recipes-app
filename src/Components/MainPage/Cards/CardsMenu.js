import classes from './CardsMenu.module.css';
import CardsMenuSearchBar from './CardsMenuSearchBar';
import CardsMenuFilters from './CardsMenuFilters';
const CardsMenu = (props) => {
    return (
        <div className={classes.cardsmenu}>
            <CardsMenuSearchBar searchQuery={props.searchQuery}
            setSearchQuery={props.setSearchQuery}/>
            <CardsMenuFilters />
        </div>
    )
}

export default CardsMenu;