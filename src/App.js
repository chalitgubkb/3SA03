import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard.js';


class App extends Component {
  render() {
    return (
    
    
      <div className="App">
       กรุณาจัดคำต่อไปนี้ให้สมบูรณ์
       <WordCard value=""/>
       ข้อ1 ประเทศไทยภาษาอังกฤษเขียนอย่างไรให้ถูกต้อง
       <WordCard value="thailand"/>
       ข้อ2 พัดลมภาษาอังกฤษเขียนอย่างไรให้ถูกต้อง
       <WordCard value="Fan"/>
       ข้อ3 คอมพิวเตอร์ภาษาอังกฤษเขียนอย่างไรให้ถูกต้อง
        <WordCard value="computer"/>
    </div>
    );
  }
}

export default App;