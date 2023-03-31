import React from "react";
import styled from "styled-components";

const HoveredRecipeDetails = ({ recipe, amount }) => (
  <RecipeDetails>
    <h3>{recipe.label}</h3>
    <CardText>Ingredients: {recipe.ingredientLines.join(", ")}</CardText> 
    <table>
      <tbody>
        {recipe.digest.map((nutrient, index) => (
          <tr key={index}>
            <td>{nutrient.label}</td>
            <td>{(amount * nutrient.total).toFixed(2)} {nutrient.unit}</td>
            <td>{(amount * nutrient.daily).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </RecipeDetails>
);

  const RecipeDetails = styled.div`
    background-color: #FED8D0;
    padding: 10px;
    border: 8px solid black;
    border-radius: 40px;
    margin: 0 1em;
  `;
  
  const CardText = styled.p`
    font-size: 20px;
  `;

export default HoveredRecipeDetails;

