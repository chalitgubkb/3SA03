import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard.js';


class App extends Component {
  render() {
    return (
    
    
      <div className="App">
       <WordCard value=""/>
       <h3>✍️ข้อ1 ประเทศไทยภาษาอังกฤษเขียนอย่างไรให้ถูกต้อง</h3>
       <WordCard value="thailand"/>
       <h3>✍️ข้อ2 พัดลมภาษาอังกฤษเขียนอย่างไรให้ถูกต้อง</h3>
       <WordCard value="Fan"/>
       <h3>✍️ข้อ3 คอมพิวเตอร์ภาษาอังกฤษเขียนอย่างไรให้ถูกต้อง</h3>
        <WordCard value="computer"/>
    </div>
    );
  }
}

export default App;