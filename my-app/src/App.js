import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import { RenderLogo } from './Logo.js';
import { makeFoodRequest } from './APIFood.js';
import { makeRecipeRequest } from './APIRecipe.js';
import { FoodCards } from './FoodCards.js';
import { RecipeCards } from './RecipeCards.js';

function App() {
  const [InputFoodValue, setInputFoodValue] = useState('');
  const [InputRecipeValue, setInputRecipeValue] = useState('');
  const [FoodResponseData, setFoodResponseData] = useState(null);
  const [RecipeResponseData, setRecipeResponseData] = useState(null);
  const [count, setCount] = React.useState(1);

  // Handles search button click
  // Stores the response data, when there is data renders the FoodCards component
  const handleClick1 = () => {
    makeFoodRequest(InputFoodValue)
      .then(response => {
        setFoodResponseData(response);
        console.log("Ingredient Data: ");
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Handles recipe button click
  // Can use saved ingredient
  const handleClick2 = () => {
    makeRecipeRequest(InputRecipeValue)
      .then(response => {
        setRecipeResponseData(response);
        console.log("Recipe Data: ");
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Handles quantity counter, if blank the value is 0
  // Only allows integers to be entered
  function handleCountChange(event) {
    const input = event.target.value;
    if (input === '') {
      setCount(0);
    } else if (/^\d+$/.test(input)) {
      const parsedValue = parseInt(input);
      const count = Math.min(parsedValue, 999999999);
      setCount(count);
    }
  }

  return (
    <BackGround>
      <Header>
      <RenderLogo size={300}/>
        <LogoText>
          Food & Recipe Search
        </LogoText>
        <RegularText>
          <div>
          <SearchingSpan>
            Search for ingredients:
            <ValueInput placeholder="apple" value={InputFoodValue} onChange={(e) => setInputFoodValue(e.target.value)}/>
          </SearchingSpan>
          </div>
          <div>
          <SearchingSpan>
            Search for recipes:
            <ValueInput placeholder="apple pie" value={InputRecipeValue} onChange={(e) => setInputRecipeValue(e.target.value)}/>
          </SearchingSpan>
          </div>

          <div>
            <SearchingSpan>
              Quantity:
              <ValueInput placeholder="1" value={count} onChange={handleCountChange} />
              <Button onClick={() => {handleClick1(InputFoodValue)}}>Search Ingredients</Button>
              <Button onClick={() => {handleClick2(InputRecipeValue)}}>Search Recipes</Button>
              <div>
                Saved Ingredient: {InputRecipeValue}
              </div>
            </SearchingSpan>
          </div>
          
        </RegularText>
      </Header>

        <SearchingSpan>
          <CardsWrapper>
            {FoodResponseData && <FoodCards FoodResponseData={FoodResponseData} amount={count} onSelectLabel={setInputRecipeValue}/>}
            {RecipeResponseData && <RecipeCards FoodResponseData={RecipeResponseData} amount={count} />}
          </CardsWrapper>
        </SearchingSpan>
      
    </BackGround>
  );
}

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const BackGround = styled.div`
  background: linear-gradient(to bottom, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #4f9b7b;
  min-width: 800px;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
`

const LogoText = styled.p`
  color: white;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding-left: 10px;
`

const RegularText = styled.p`
color: white;
font-size: 20px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
`

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 50px;
`;

const SearchingSpan = styled.span`
display: inline-block;
padding-left: 10px;
`

const ValueInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1.2em",
}))`
  font-size: 16px;
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export default App;