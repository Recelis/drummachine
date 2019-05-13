import React, { Component } from "react";
import Sound from "./sound";

class DisplayScreen extends Component {
  render() {
    console.log(this.props.sequence);
    let sequence = this.props.sequence.map((sound, index) => (
      <Sound sound={sound} index={index} key = {index}
      prepareToDelete = {this.props.prepareToDelete}
      deleteThisSound = {this.props.deleteThisSound}
      />
    ));
    return <div className="Display-pattern">{sequence}</div>;
  }
}

export default DisplayScreen;
