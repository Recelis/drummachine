import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Sound extends Component {
  render() {
    let sound = this.props.sound;
    let index = this.props.index;
    return sound[Object.keys(sound)] === "closed" ? (
      <Button
        className="Display-sounds"
        onClick={() => this.props.prepareToDelete(Object.keys(sound), index)}
      >
        {Object.keys(sound)}
      </Button>
    ) : (
      <span>
        <Button
          className="Display-sounds"
          onClick={() => this.props.prepareToDelete(Object.keys(sound), index)}
        >
          {Object.keys(sound)}
        </Button>
        <sup>
          <button
            className="Display-tinyX"
            onClick={() => this.props.deleteThisSound(index)}
          >
            X
          </button>
        </sup>
      </span>
    );
  }
}
export default Sound;
