import React, { Component } from "react";
import DrumPad from "./drumPad";

import Grid from '@material-ui/core/Grid';
import { audioObj } from '../audioclip';

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
        this.state = {
            Q: "unclicked",
            W: "unclicked",
            E: "unclicked",
            A: "unclicked",
            S: "unclicked",
            D: "unclicked",
            Z: "unclicked",
            X: "unclicked",
            C: "unclicked"
        }
        // BINDINGS
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }
    buttonPress(key) {
        audioObj()[key].currentTime = 0; // resets sound so that you play from beginning
        audioObj()[key].play();
        this.props.addSoundToState(key.toLocaleUpperCase());
        // change colours on buttons

        // call an action
        let newKeyState = {};
        newKeyState[key] = "clicked";
        this.setState(newKeyState, () =>
            setTimeout(() => {
                newKeyState[key] = "unclicked";
                this.setState(newKeyState);
            }, 100)
        );
    }

    /* pass keyboard press to this.buttonPress */
    handleKeyPress(event) {
        // check that record button has been pressed
        if (!this.props.allowRecord) return;
        let keyPressed = event.key.toLocaleUpperCase();
        let importantKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        importantKeys.map(key => {
            if (key == keyPressed) this.buttonPress(keyPressed);
        })
        return;
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={0} justify="right">
                        <DrumPad
                            letter="Q"
                            onClick={() => this.buttonPress('Q')}
                            buttonStatus={this.state.Q}
                            onStatus={this.props.allowRecord}
                        />
                        <DrumPad
                            letter="W"
                            onClick={() => this.buttonPress('W')}
                            buttonStatus={this.state.W}
                            onStatus={this.props.allowRecord}
                        />
                        <DrumPad
                            letter="E"
                            onClick={() => this.buttonPress('E')}
                            buttonStatus={this.state.E}
                            onStatus={this.props.allowRecord}
                        />
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <DrumPad
                            letter="A"
                            onClick={() => this.buttonPress('A')}
                            buttonStatus={this.state.A}
                            onStatus={this.props.allowRecord}
                        />
                        <DrumPad
                            letter="S"
                            onClick={() => this.buttonPress('S')}
                            buttonStatus={this.state.S}
                            onStatus={this.props.allowRecord}
                        />
                        <DrumPad
                            letter="D"
                            onClick={() => this.buttonPress('D')}
                            buttonStatus={this.state.D}
                            onStatus={this.props.allowRecord}
                        />
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <DrumPad
                            letter="Z"
                            onClick={() => this.buttonPress('Z')}
                            buttonStatus={this.state.Z}
                            onStatus={this.props.allowRecord}
                        />
                        <DrumPad
                            letter="X"
                            onClick={() => this.buttonPress('X')}
                            buttonStatus={this.state.X}
                            onStatus={this.props.allowRecord}
                        />
                        <DrumPad
                            letter="C"
                            onClick={() => this.buttonPress('C')}
                            buttonStatus={this.state.C}
                            onStatus={this.props.allowRecord}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
