import styled from 'styled-components';
import React from "react";
import CaloriesIcon from "./NutrientIcons/Calories.png"
import CarbsIcon from "./NutrientIcons/Carbs.png"
import FatIcon from "./NutrientIcons/Fats.png"
import ProteinIcon from "./NutrientIcons/Protein.png"
import {RenderIcon} from './RenderIcon.js';

// Renders full array of returned results
// Trying to figure out how to use the measures values to calculate certain amounts
export function FoodCards({ FoodResponseData, amount, onSelectLabel }) {
  return (
    <FlexContainer>
      {FoodResponseData.hints.map((hint, index) => {
        const measuresWithQuantity = hint.measures.map(measure => ({
          ...measure,
          quantity: `${(amount / measure.weight).toFixed(5)} ${measure.label}`
        }));

        return (
          <CardContainer key={index}>
            <RecipeCard>
              <CardHeader>{hint.food.label}</CardHeader>
              <CardImage
                src={
                  hint.food.image ||
                  'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
                }
                alt={hint.food.label}
          />
          <CardText>
          <table>
            <thead>
                  <tr>
                    <th></th>
                    <th>Nutrient</th>
                    <th>Amount</th>
                  </tr>
            </thead>
              <tbody>
                <tr>
                  <td><RenderIcon image={CaloriesIcon} size={30}/></td>
                  <td>Calories</td>
                  <td>{Math.round(amount * hint.food.nutrients.ENERC_KCAL * 100) / 100} kcal</td>
                </tr>
                <tr>
                  <td><RenderIcon image={FatIcon} size={30}/></td>
                  <td>Fat</td>
                  <td>{Math.round(amount * hint.food.nutrients.FAT * 100) / 100} grams</td>
                </tr>
                <tr>
                  <td><RenderIcon image={ProteinIcon} size={30}/></td>
                  <td>Protein</td>
                  <td>{Math.round(amount * hint.food.nutrients.PROCNT * 100) / 100} grams</td>
                </tr>
                <tr>
                  <td><RenderIcon image={CarbsIcon} size={30}/></td>
                  <td>Carbs</td>
                  <td>{Math.round(amount * hint.food.nutrients.CHOCDF * 100) / 100} grams</td>
                </tr>
              </tbody>
              </table>
              <Button onClick={() => onSelectLabel(hint.food.label)}>Search Recipes</Button>
              <CardMeasure>Serving Quantity Measure</CardMeasure>
                    {measuresWithQuantity.map((measure, index) => (
                              <li key={index}>
                                {measure.label}: {measure.quantity} {measure.unit}
                              </li>
                            ))}
                  </CardText>
                </RecipeCard>
              </CardContainer> 
          );
        })}
     </FlexContainer>
  );
}

const CardHeader = styled.header`
  font-size: 40px;
  font-weight: bold;
  padding-left: 30px;
  margin-bottom: 10px;
`

const CardText = styled.p`
  font-size: 23px;
  padding-left: 25px;
`
const CardMeasure = styled.p`
  font-size: 20px;
  font-weight: bold;
`

const CardContainer = styled.div`
  background-color: #e8efe6;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 8px solid black;
  border-radius: 40px;
  margin-right: 20px;
  margin-left: 10px;
  padding-right: 40px;
  min-width: 200px;
  max-width: 330px;
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
`

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

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-right: 10px solid #4f9b7b;
`