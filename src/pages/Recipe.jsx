import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions"); 

  let params = useParams();

  const fetchRecipeDetails = async () => {
    const check = localStorage.getItem(`${params.name}`);

    if (check) {
      // console.log(check);
      console.log(JSON.parse(check));
      setRecipeDetails(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );

      const detailsData = await data.json();

      localStorage.setItem(`${params.name}`, JSON.stringify(detailsData));

      console.log(detailsData);

      setRecipeDetails(detailsData);

      console.log(detailsData);
    }
  }

  useEffect(() => {
    console.log(params.name);
    fetchRecipeDetails(params.name);

  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
        {/* <h2>{recipeDetails.id}</h2> */}
        <h3>Ready in {recipeDetails.readyInMinutes} minutes</h3>
      </div>
      <Info>
        <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
        >
            Instructions
        </Button>
    
        <Button 
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}

        >
            Ingredients
        </Button>

        {activeTab === "instructions" && (
            <div>
                <h3 dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></h3>
            </div>
        )}

         {activeTab === "ingredients" && (
            
            <ul>
                {recipeDetails.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  h3{
    font-size: 1rem;
  }
  li{
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.div`

  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 1rem;
  margin-right: 2rem;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;


