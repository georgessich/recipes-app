import { useEffect, useState } from 'react';
import classes from './Cards.module.css';
import Card from './Card';
const Cards = () => {

    const [ recipes, setRecipes ] = useState([]);
    const [ httpError, setHttpError ] = useState();
    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&addRecipeInformation=true&sort=time&number=8&apiKey=00963ead543544ac90beddb936f6a7ac`);
            if(!response.ok) {
                throw new Error ('Ooops!');
            }

            const responseData = await response.json();
            const loadedRecipes = [];
            const results = responseData.results;
            for(const key in results) {
                
                loadedRecipes.push({
                    id:results[key].id,
                    title:results[key].title,
                    img:results[key].image,
                    readyInMinutes:results[key].readyInMinutes,
                    vegan: results[key].vegan,
                    healthScore: results[key].healthScore,
                    glutenFree: results[key].glutenFree,
                    dairyFree:results[key].dairyFree

                })
            }
            setRecipes(loadedRecipes);
            console.log(results);
            console.log(responseData);

        }
        fetchRecipes().catch((error) => {
            setHttpError(error.message);
        })
    }, [])

    if(httpError) {
        return <section>
            <p>{httpError}</p>
        </section>
    }
    return (
        <div className={classes.cards}>
            <ul className={classes.cards_recipes}>
            {recipes.map((recipe) => (
                <Card
                key={recipe.id}
                id={recipe.id}
                img={recipe.img}
                title={recipe.title}
                readyInMinutes={recipe.readyInMinutes}
                vegan={recipe.vegan}
                healthScore={recipe.healthScore}
                dairyFree={recipe.dairyFree}
                glutenFree={recipe.glutenFree} />
            ))}
            </ul>
        </div>
    )
}

export default Cards;