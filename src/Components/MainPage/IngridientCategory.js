import classes from './IngridientCategory.module.css'

const IngridientCategory = (props) => {
    return (
        <li style={props.style} className={classes.category}>
            {props.type}
        </li>
    )
}

export default IngridientCategory;