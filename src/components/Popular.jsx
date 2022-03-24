
import React, { useEffect, useState } from "react";

function Popular() {

    // const apiKey = process.env.REACT_APP_API_KEY;

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);


    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json(); 
        console.log(data);
        setPopular(data.recipes);

    }

    return (
        <div>Popular

            {popular.map((recipe) => {
                return (
                    <div key={recipe.id} >
                        <p>{recipe.title}</p>
                       
                    </div>
                )
            })}



        </div>
    )
}

export default Popular