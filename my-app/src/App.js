import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test React App
        </p>
        <Container>
        <Button>styled Button</Button>
        </Container>
      </header>
    </div>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;

const Container = styled.div`
  text-align: center;
`

export default App;
