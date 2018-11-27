import React, { Component } from "react";
import DrumPad from "./drumPad";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { store } from "../store";
import { addSound } from "../actions/index";

/* 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' */

const audioclip = {
    Q: "Heater-1",
    W: "Heater-2",
    E: "Heater-3",
    A: "Heater-4_1",
    S: "Heater-6",
    D: "Dsc_Oh",
    Z: "Kick_n_Hat",
    X: "RP4_KICK_1",
    C: "Cev_H2"
}

const amazonURL = "https://s3.amazonaws.com/freecodecamp/drums/";

export default class KeyPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Q:"unclicked",
            W:"unclicked",
            E:"unclicked",
            A:"unclicked",
            S:"unclicked",
            D:"unclicked",
            Z:"unclicked",
            X:"unclicked",
            C:"unclicked"
        }
        // Audio Setup
        const objectKeys = Object.keys(audioclip);
        this.audioObj = {};
        objectKeys.map(key=>{
            this.audioObj[key] = new Audio(amazonURL +audioclip[key] + ".mp3")    
        });
        // BINDINGS
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress, false);
      }
    buttonPress(key) {
        console.log("buttonPress here " + key);
        console.log(this.audioObj[key]);
        this.audioObj[key].currentTime = 0; // resets sound so that you play from beginning
        this.audioObj[key].play();
        this.props.addSoundToState(key.toLocaleUpperCase());
        // change colours on buttons
        let newKeyState = {};
        newKeyState[key] = "clicked";
        this.setState(newKeyState, ()=>
            setTimeout(()=>{
            newKeyState[key] = "unclicked";
            this.setState(newKeyState);
        },100)
        );
    }

    /* pass keyboard press to this.buttonPress */
    handleKeyPress(event){
        // check that record button has been pressed
        if (!this.props.allowRecord) return; 
        let keyPressed = event.key.toLocaleUpperCase();
        if (keyPressed=== 'Q' || keyPressed === 'W' || keyPressed === 'E' 
        || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D'
        || keyPressed === 'Z' || keyPressed === 'X' || keyPressed === 'C'
        ) this.buttonPress(keyPressed); 
        return;
    }

    render() {
        return (
            <Grid container>
                <Grid item xs = {12}>
                    <Grid container spacing={0} justify="right">
                        <DrumPad
                            letter="Q"
                            clip={amazonURL +audioclip.Q + ".mp3"}
                            clipName={audioclip.Q}
                            onClick = {()=>this.buttonPress('Q')}
                            buttonStatus = {this.state.Q}
                            onStatus = {this.props.allowRecord}
                        />
                        <DrumPad
                            letter="W"
                            clip={amazonURL +audioclip.W + ".mp3"}
                            clipName={audioclip.W}
                            onClick = {()=>this.buttonPress('W')}
                            buttonStatus = {this.state.W}
                            onStatus = {this.props.allowRecord}
                        />
                        <DrumPad
                            letter="E"
                            clip={amazonURL +audioclip.E + ".mp3"}
                            clipName={audioclip.E}
                            onClick = {()=>this.buttonPress('E')}
                            buttonStatus = {this.state.E}
                            onStatus = {this.props.allowRecord}
                        />
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <DrumPad
                            letter="A"
                            clip={amazonURL +audioclip.A + ".mp3"}
                            clipName={audioclip.A}
                            onClick = {()=>this.buttonPress('A')}
                            buttonStatus = {this.state.A}
                            onStatus = {this.props.allowRecord}
                        />
                        <DrumPad
                            letter="S"
                            clip={amazonURL +audioclip.S + ".mp3"}
                            clipName={audioclip.S}
                            onClick = {()=>this.buttonPress('S')}
                            buttonStatus = {this.state.S}
                            onStatus = {this.props.allowRecord}
                        />
                        <DrumPad
                            letter="D"
                            clip={amazonURL +audioclip.D + ".mp3"}
                            clipName={audioclip.D}
                            onClick = {()=>this.buttonPress('D')}
                            buttonStatus = {this.state.D}
                            onStatus = {this.props.allowRecord}
                        />
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <DrumPad
                            letter="Z"
                            clip={amazonURL +audioclip.Z + ".mp3"}
                            clipName={audioclip.Z}
                            onClick = {()=>this.buttonPress('Z')}
                            buttonStatus = {this.state.Z}
                            onStatus = {this.props.allowRecord}
                        />
                        <DrumPad
                            letter="X"
                            clip={amazonURL +audioclip.X + ".mp3"}
                            clipName={audioclip.X}
                            onClick = {()=>this.buttonPress('X')}
                            buttonStatus = {this.state.X}
                            onStatus = {this.props.allowRecord}
                        />
                        <DrumPad
                            letter="C"
                            clip={amazonURL +audioclip.C + ".mp3"}
                            clipName={audioclip.C}
                            onClick = {()=>this.buttonPress('C')}
                            buttonStatus = {this.state.C}
                            onStatus = {this.props.allowRecord}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
