import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';

class App extends Component {
  render() {
    return (
      <div>
          <CharacterCard value="h"/>
          <CharacterCard value="i"/>
      </div>
    );
  }
}

export default App;