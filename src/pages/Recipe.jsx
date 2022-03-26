import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  
  const [recipeDetails, setRecipeDetails] = useState({});
  
  let params = useParams();

  const fetchRecipeDetails = async () => {

    const check = localStorage.getItem(`${params.name}`);

    if (check) {
      // console.log(check);
      console.log(JSON.parse(check));
      setRecipeDetails(JSON.parse(check));

    } else {

      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

      const detailsData = await data.json();

      localStorage.setItem(`${params.name}`, JSON.stringify(detailsData));

      setRecipeDetails(detailsData);

      console.log(detailsData);

    }

  }

  useEffect(() => {
    fetchRecipeDetails(params.name);
  }, [params.name]);


  return (
    <div>{recipeDetails.title}</div>

  )
}

export default Recipe