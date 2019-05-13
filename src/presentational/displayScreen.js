import React, { Component } from "react";
import Sound from "./sound";
import { audioclip } from "../audioclip";

class DisplayScreen extends Component {
  render() {
    let lastValue = "";
    if (this.props.sequence.length !== 0) {
      let soundKey = Object.keys(
        this.props.sequence[this.props.sequence.length - 1]
      )[0];
      lastValue = audioclip[soundKey];
    }

    console.log(lastValue);
    let sequence = this.props.sequence.map((sound, index) => (
      <Sound
        sound={sound}
        index={index}
        key={index}
        prepareToDelete={this.props.prepareToDelete}
        deleteThisSound={this.props.deleteThisSound}
      />
    ));
    return (
      <div className="Display-pattern">
        <p id="display">{lastValue}</p>
        {sequence}
      </div>
    );
  }
}

export default DisplayScreen;
