import React, { Component } from "react";
import DrumPad from "./drumPad";

import Grid from "@material-ui/core/Grid";
import { audioObj, playSound } from "../audioclip";

/* 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' */

export default class KeyPad extends Component {
  constructor(props) {
    super(props);
    // BINDINGS
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  /* pass keyboard press to this.buttonPress */
  handleKeyPress(event) {
    // check that record button has been pressed
    if (!this.props.allowRecord) return;
    let keyPressed = event.key.toLocaleUpperCase();
    let importantKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    importantKeys.map(key => {
      if (key == keyPressed) {
        this.keyActivity(key);
      }
    });
  }

  keyActivity(key) {
    playSound(key);
    this.props.addSoundToState(key.toLocaleUpperCase());
    // call an action
    let newKeyState = {};
    newKeyState[key] = "clicked";
    this.props.setClicked(key);
    setTimeout(()=>{
        this.props.setUnclicked(key);
    },100);
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={0} justify="right">
            <DrumPad
              letter="Q"
              onClick={() => this.keyActivity("Q")}
              buttonStatus={this.props.keyState.Q}
              onStatus={this.props.allowRecord}
            />
            <DrumPad
              letter="W"
              onClick={() => this.keyActivity("W")}
              buttonStatus={this.props.keyState.W}
              onStatus={this.props.allowRecord}
            />
            <DrumPad
              letter="E"
              onClick={() => this.keyActivity("E")}
              buttonStatus={this.props.keyState.E}
              onStatus={this.props.allowRecord}
            />
          </Grid>
          <Grid container spacing={0} justify="center">
            <DrumPad
              letter="A"
              onClick={() => this.keyActivity("A")}
              buttonStatus={this.props.keyState.A}
              onStatus={this.props.allowRecord}
            />
            <DrumPad
              letter="S"
              onClick={() => this.keyActivity("S")}
              buttonStatus={this.props.keyState.S}
              onStatus={this.props.allowRecord}
            />
            <DrumPad
              letter="D"
              onClick={() => this.keyActivity("D")}
              buttonStatus={this.props.keyState.D}
              onStatus={this.props.allowRecord}
            />
          </Grid>
          <Grid container spacing={0} justify="center">
            <DrumPad
              letter="Z"
              onClick={() => this.keyActivity("Z")}
              buttonStatus={this.props.keyState.Z}
              onStatus={this.props.allowRecord}
            />
            <DrumPad
              letter="X"
              onClick={() => this.keyActivity("X")}
              buttonStatus={this.props.keyState.X}
              onStatus={this.props.allowRecord}
            />
            <DrumPad
              letter="C"
              onClick={() => this.keyActivity("C")}
              buttonStatus={this.props.keyState.C}
              onStatus={this.props.allowRecord}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
