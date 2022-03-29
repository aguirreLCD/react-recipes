 import React, { useEffect, useState } from 'react';
 import styled from "styled-components";
//  import {motion} from "framer-motion"; 
 import { Link, useParams } from "react-router-dom";
 
 function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async (name) => {

        const check = localStorage.getItem(`${name}`);

        if (check) {
            // console.log(check);
            console.log(JSON.parse(check));
            setCuisine(JSON.parse(check));

        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=5&cuisine=${name}`);
            
            const recipes = await data.json();
            
            console.log(recipes);

            console.log(recipes.results);

            localStorage.setItem(`${name}`, JSON.stringify(recipes.results));

            setCuisine(recipes.results);
        }
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

   return (
     <Grid>
         {cuisine.map((item) => {
             return (
                 <Card key={item.id}>
                     <Link to={`/recipe/${item.id}`}>
                     <img src={item.image} alt={item.title} />
                     <h4>{item.title}</h4>
                     </Link>
                 </Card>
             );
         })}
     </Grid>
   )
 }

 const Grid = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 3rem;
 `;

 const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    } 
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }

 `;
 
 export default Cuisine;