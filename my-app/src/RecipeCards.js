import styled from 'styled-components';
import React, { useState } from "react";
import HoveredRecipeDetails from "./HoveredRecipeDetails";

const SAVE_KEY = "savedRecipes";

/**
 * This component renders the array of hints passed from the APIRecipe functions
 * Takes the response data from APIRecipe, the amount from app.js quantity, and can return the label of the card that was pressed
 * The number of calories is multiplied by the quantity
 * Uses the index to sort the cards
 * hoveredSavedRecipe is used to store the data of the card being hovered over
 * Those details are passed to the HoveredRecipeDetails component
 * showSavedRecipes is a toggleable state to show the list of saved recipes
 * Uses the hints in the same way as the food card component with respect to the new API..
 * to display relevant details about the recipe that was searched for, either by entering in the search bar...
 * or by the search recieps button on the food card component
 */
export function RecipeCards({ recipes, amount, savedRecipes, setSavedRecipes }) {
  const [hoveredRecipe, setHoveredRecipe] = useState(null);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);

  // Saves the label and URL of the recipe card clicked
  const handleSaveClick = (recipe) => {
    const newSavedRecipes = { ...savedRecipes, [recipe.uri]: {url: recipe.url, label: recipe.label} };
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSavedRecipes));
    setSavedRecipes(newSavedRecipes);
  };
  // Toggles show saved recipes on
  const handleShowSavedClick = () => {
    setShowSavedRecipes(true);
  };
  // Toggles show saved recipes off
  const handleHideSavedClick = () => {
    setShowSavedRecipes(false);
  };
  // Deletes the saved recipes (resets to default)
  const handleResetSavedClick = () => {
    localStorage.removeItem(SAVE_KEY);
    setSavedRecipes({});
  }
  
  // HTML list used to save the recipe labels and URLs
  const savedRecipeLinks = Object.entries(savedRecipes).map(([uri, {url, label}]) => (
    <li key={uri}>
      <div>{label}</div>
      <a href={url}>{uri}</a>
    </li>
  ));

  return (
    <div>
        <Button onClick={handleShowSavedClick}>Show Saved Recipes</Button>
        {showSavedRecipes && (
        <div>
          <Button onClick={handleHideSavedClick}>Hide Saved Recipes</Button>
          <ul>{savedRecipeLinks}</ul>
          <Button onClick={handleResetSavedClick}>Reset Saved Recipes</Button>
        </div>
      )}
      <FlexContainer>
        {Array.isArray(recipes) &&
          recipes.map((recipe, index) => (
            recipe && recipe.dishType && recipe.cuisineType &&
            <CardContainer key={index} onMouseEnter={() => setHoveredRecipe(recipe)} onMouseLeave={() => setHoveredRecipe(null)}>
              <RecipeCard>
                <CardHeader>{recipe.label}</CardHeader>
                <CardImage src={recipe.image} alt={recipe.label} />
                <CardText>Calories: {(amount * recipe.calories).toFixed(2)}</CardText>
                <CardText>Cuisine Type: {recipe.cuisineType.join(", ")}</CardText>
                <CardText>Dish Type: {recipe.dishType.join(", ")}</CardText>
                <CardText>Total Time: {recipe.totalTime} minutes</CardText>
                <CardText>Health Labels: {recipe.healthLabels.join(", ")}</CardText> 
                {recipe.cautions.length > 0 && (
                  <CardText>Caution, contains: {recipe.cautions.join(", ")}</CardText>
                )}
                <CardText>
                  <a href={recipe.url}>Link to recipe</a>
                </CardText>
                <Button onClick={() => handleSaveClick(recipe)}>Save Recipe</Button>
              </RecipeCard>
              <DetailContainer>
                {hoveredRecipe === recipe && <HoveredRecipeDetails recipe={recipe} amount={amount}/>}
              </DetailContainer>
            </CardContainer>
          ))}
      </FlexContainer>
    </div>
  );
};

const CardHeader = styled.header`
  font-size: 40px;
  font-weight: bold;
  padding-left: 30px;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 23px;
  padding-left: 30px;
`;

const CardContainer = styled.div`
  background-color: #FED8D0;
  position: relative;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 8px solid black;
  border-radius: 40px;
  margin-right: 20px;
  margin-left: 10px;
  padding-right: 40px;
  min-width: 200px;
  max-width: 350px;
  transition: box-shadow 0.3s ease-in-out; 
  box-shadow: none; 
  
  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3); 
  }
`;

const RecipeCard = styled.div`
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 20px;
  border-radius: 30px;
  border: 6px solid black;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DetailContainer = styled.div`
  position: absolute;
  left: -350px; 
  bottom: 200px;
  width: 350px; 
  height: 80%;
  pointer-events: none; 
  z-index: 9999;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  margin-left: 50px;
  margin-top: 10px;
`;