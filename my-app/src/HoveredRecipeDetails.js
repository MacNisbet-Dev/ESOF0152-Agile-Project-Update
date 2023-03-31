import React from "react";
import styled from "styled-components";

const HoveredRecipeDetails = ({ recipe }) => (
    <RecipeDetails>
      <h3>{recipe.label}</h3>
      <CardText>Ingredients: {recipe.ingredientLines.join(", ")}</CardText> 
    </RecipeDetails>
  );
  
  const RecipeDetails = styled.div`
    background-color: #FED8D0;
    padding: 10px;
    border: 8px solid black;
    border-radius: 40px;
    margin: 1em 1em;
  `;
  
  const CardText = styled.p`
    font-size: 20px;
  `;

export default HoveredRecipeDetails;

