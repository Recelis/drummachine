import React, { Component } from "react";


import { DragDropContextProvider, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Sound from "./sound";

class DisplayScreen extends Component {

    moveSound = () =>{
        console.log('drop sound');
    }
  render() {
    console.log(this.props.sequence);
    let sequence = this.props.sequence.map((sound, index) =>
      <Sound 
        sound = {sound}
        index = {index}
        handleDrop = {(id) => this.moveSound(id)}
      />
    );
    return (
      <div>
        {sequence}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DisplayScreen);
