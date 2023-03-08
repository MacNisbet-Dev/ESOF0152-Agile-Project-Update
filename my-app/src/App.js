import React from 'react';
import {useState} from 'react';
import styled from 'styled-components'
import { RenderLogo } from './Logo.js'
import { makeRequest } from './APIRecipe'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [updatedRecipe, setUpdatedRecipe] = useState('');

  const handleClick = () => {
    setUpdatedRecipe(inputValue);
    makeRequest(updatedRecipe);
  }

  return (
    <BackGround>
      <Header>
      <RenderLogo size={100}/>
        <Paragraph>
          Recipe Getter
        </Paragraph>

        <RecipeInput placeholder="apple" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <span>Searching: {inputValue}</span>

        <Container>
        <Button onClick={handleClick}>Get Results</Button>
        </Container>


      </Header>
    </BackGround>
  );
}

const BackGround = styled.div`
background: blue;
width: 500px;
height: 500px;
`

const Header = styled.header`
  background: green;
`

const Paragraph = styled.p`
  color: white;
  font-size: 20;
`

const Button = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;

const Container = styled.div`
  text-align: center;
`

const RecipeInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export default App;
