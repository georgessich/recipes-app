import classes from './MainPage.module.css';
import Ingridients from '../Components/MainPage/Ingridients';
import CardsPage from '../Components/MainPage/Cards/CardsPage';
const MainPage = () => {
    return (
        <div className={classes.mainpage}>
            <Ingridients />
            <CardsPage/>
        </div>
    )
}

export default MainPage;