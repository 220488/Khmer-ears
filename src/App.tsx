import React from 'react';
import InputBox from './components/inputBox';
import './App.css';
import OutputBox from './components/outputBox';
import ActionButton from './components/actionButton';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <img src={logo} height={300}></img>
      <div className='transfer-language-row'>
        <div>Khmer</div>
        <div>English</div>
      </div>
      <div className="text-box-row">
        <InputBox></InputBox>
        <OutputBox></OutputBox>
      </div>
      <ActionButton/>
    </div>
  );
}

export default App;
