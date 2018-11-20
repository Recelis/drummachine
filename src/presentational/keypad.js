import React, { Component } from "react";
import DrumPad from "./drumPad"

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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

        }
        const objectKeys = Object.keys(audioclip);
        this.audioObj = {};
        objectKeys.map(key=>{
            this.audioObj[key] = new Audio(amazonURL +audioclip[key] + ".mp3")    
        });
        
        this.buttonPress = this.buttonPress.bind(this);
        this.handleKeyBoard = this.handleKeyBoard.bind(this);
    }
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyBoard, false);
      }
      componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyBoard, false);
      }
    buttonPress(key) {
        console.log("buttonPress here " + key);
        console.log(this.audioObj[key]);
        this.audioObj[key].play()
    }
    handleKeyBoard(event){
        console.log(`Pressed keyCode ${event.key}`);
        let keyPressed = event.key.toLocaleUpperCase();
        if (keyPressed=== 'Q' || keyPressed === 'W' || keyPressed === 'E' 
        || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D'
        || keyPressed === 'Z' || keyPressed === 'X' || keyPressed === 'C'
        ){
            this.buttonPress(keyPressed);
        } return;
    }
    render() {
        return (
            <Grid>
                <Grid item xs={12}>
                    <DrumPad
                        letter="Q"
                        clip={amazonURL +audioclip.Q + ".mp3"}
                        clipName={audioclip.Q}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="W"
                        clip={amazonURL +audioclip.W + ".mp3"}
                        clipName={audioclip.W}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="E"
                        clip={amazonURL +audioclip.E + ".mp3"}
                        clipName={audioclip.E}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="A"
                        clip={amazonURL +audioclip.A + ".mp3"}
                        clipName={audioclip.A}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="S"
                        clip={amazonURL +audioclip.S + ".mp3"}
                        clipName={audioclip.S}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="D"
                        clip={amazonURL +audioclip.D + ".mp3"}
                        clipName={audioclip.D}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="Z"
                        clip={amazonURL +audioclip.Z + ".mp3"}
                        clipName={audioclip.Z}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="X"
                        clip={amazonURL +audioclip.X + ".mp3"}
                        clipName={audioclip.X}
                        buttonPress = {this.buttonPress}
                    />
                    <DrumPad
                        letter="C"
                        clip={amazonURL +audioclip.C + ".mp3"}
                        clipName={audioclip.C}
                        buttonPress = {this.buttonPress}
                    />
                </Grid>
            </Grid>
        )
    }
}