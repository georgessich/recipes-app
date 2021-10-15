
const RecipeSteps = (props) => {
    return <div>
        <ul>
            {props.steps.map((step) => (
                <li>{step.step}</li>
            ))}
        </ul>
    </div>
}

export default RecipeSteps;