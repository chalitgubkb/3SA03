import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <WordCard value="hello"/>
    </div>
    );
  }
}

export default App;