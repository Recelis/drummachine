import React, { Component } from 'react';
import './App.css';


import KeyPad from "./presentational/keypad";
import Record from "./container/record";

class App extends Component {
  constructor(props){
    super(props);
    this.record = this.record.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  refresh(){
    console.log("refresh");
  }
  record(){
    console.log("recording");
  }
  render() {
    return (
      <div id="drum-machine">
        <header id = "sequence">
          <div id = "pattern">
          </div>
          <button onClick = {this.refresh}>refresh</button>
          <p id = "display"></p>
          <Record/>
        </header>

        <div id = "drumpads">
          <KeyPad />
        </div>
        <footer>
          <p>This project uses React, Redux, Sass for CSS variables or Material UI (styling typically comes last in the development process) and has been deliberately designed to do more than the User Stories required. It will have an option 
          for saving user inputs, and for automatic replaying. This will ensure that Redux will have to be used in this project.</p>
          <p>Copyright Jacky Lui 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
