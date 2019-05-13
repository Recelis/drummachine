import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Sound extends Component {
  render() {
    console.log("are you rerunning this?");
    let sound = this.props.sound;
    let index = this.props.index;
    return (
        sound[Object.keys(sound)] === "closed" ? (
          <Button
          onClick={() => this.props.prepareToDelete(Object.keys(sound), index)}
        >
          {Object.keys(sound)}
        </Button>
        ) : (
          <span>
            <Button
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
        )
    );
  }
}
export default Sound;
