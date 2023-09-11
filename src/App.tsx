import React from 'react';
import logo from './logo.svg';
import InputBox from './components/inputBox';
import './App.css';
import OutputBox from './components/outputBox';
import ActionButton from './components/actionButton';

function App() {
  return (
    <div className="App">
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
