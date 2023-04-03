import React from "react";
import styled from "styled-components";

/**
 * Hovered recipe details is an extension of the recipe cards component
 * Holds the specific recipe that is being hovered over and is passed the quantity from app.js
 * Uses the intredients portion of the recipe to display all the used ingredients
 * Uses the nutrient daily/total to display the amount of micronutrients from the quantity of servings
 * Is set to hidden again after it's no longer being hovered over
 */
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

