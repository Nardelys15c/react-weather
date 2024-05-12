import React from 'react';
import './App.css';

import Weather from "./Weather";

export default function App() {
  return( 
    <div className="App">
      <div className="container">
    
     <Weather/>
     <footer>
      This project was coded by Nardelys Caraballo and is   
      <a href="https://github.com/Nardelys15c/react-weather.git" target="_blank" rel="noreferrer"> open-sourced in Github
      </a>
     </footer>
     </div>
    </div>
);
}
