import styled from 'styled-components';
import React, { useState } from "react";
import HoveredRecipeDetails from "./HoveredRecipeDetails";

export function RecipeCards({ recipes }) {
  const [hoveredRecipe, setHoveredRecipe] = useState(null);

  return (
    <FlexContainer>
      {Array.isArray(recipes) &&
        recipes.map((recipe, index) => (
          <CardContainer key={index} onMouseEnter={() => setHoveredRecipe(recipe)} onMouseLeave={() => setHoveredRecipe(null)}>
            <RecipeCard>
              <CardHeader>{recipe.label}</CardHeader>
              <CardImage src={recipe.image} alt={recipe.label} />
              <CardText>Calories: {recipe.calories.toFixed(2)}</CardText>
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
            </RecipeCard>
            <DetailContainer>
              {hoveredRecipe === recipe && <HoveredRecipeDetails recipe={recipe} />}
            </DetailContainer>
          </CardContainer>
        ))}
    </FlexContainer>
  );
};

const CardHeader = styled.header`
  font-size: 40px;
  font-weight: bold;
  padding-left: 30px;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 20px;
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
  max-width: 300px;
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