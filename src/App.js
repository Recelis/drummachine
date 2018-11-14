import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DrumPad from "./presentational/drumPad"

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <header id = "sequence">
          <div id = "pattern">
          </div>
          <button>refresh</button>
        </header>
        <div id = "drumpads">
          <DrumPad />
        </div>
        <footer>
          <p>This project uses React, Redux, Sass for CSS variables and has been deliberately designed to do more than the User Stories required. It will have an option 
          for saving user inputs, and for automatic replaying. This will ensure that Redux will have to be used in this project.</p>
          <p>Copyright Jacky Lui 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
