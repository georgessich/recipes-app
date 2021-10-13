import classes from './MainPage.module.css';
import Ingridients from '../Components/MainPage/Ingridients';
import CardsPage from '../Components/MainPage/Cards/CardsPage';
const MainPage = (props) => {
    return (
        <div className={classes.mainpage}>
            <Ingridients />
            <CardsPage pageId={props.pageId} setPageId={props.setPageId}/>
        </div>
    )
}

export default MainPage;