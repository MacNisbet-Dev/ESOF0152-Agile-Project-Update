import styled from 'styled-components';
import React from "react";

// Renders full array of returned results
// Trying to figure out how to use the measures values to calculate certain amounts
export function RecipeCards({ recipes }){
  return (
    <RecipeCard>
      <CardContainer>
        {Array.isArray(recipes) && recipes.map((recipe, index) => (
          <RecipeItem key={index}>
            <CardHeader>{recipe.label}</CardHeader>
            <CardImage src={recipe.image} alt={recipe.label} />
            <CardText>Calories: {recipe.calories.toFixed(2)}</CardText>
            <CardText>Cuisine Type: {recipe.cuisineType.join(', ')}</CardText>
            <CardText><a href={recipe.url}>Link to recipe</a></CardText>
            
          </RecipeItem>
        ))}
      </CardContainer>
    </RecipeCard>
  );
};
const CardHeader = styled.header`
  font-size: 40px;
  font-weight: bold;
  padding-left: 30px;
  margin-bottom: 10px;
`

const CardText = styled.p`
  font-size: 20px;
  padding-left: 30px;
`

const CardContainer = styled.div`
  background-color: #e8efe6;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  border: 8px solid black;
  border-radius: 40px;
  margin-right: 150px;
  margin-left: 10px;
  min-width: 200px;
  max-width: 300px;
`
const RecipeItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
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
`