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

export default class KeyPad extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
       
    }
    render() {
        const amazonURL = "https://s3.amazonaws.com/freecodecamp/drums/";
        return (
            <Grid>
                <Grid item xs={12}>
                    <DrumPad
                        letter="Q"
                        clip={amazonURL +audioclip.Q + ".mp3"}
                        clipName={audioclip.Q}
                    />
                    <DrumPad
                        letter="W"
                        clip={amazonURL +audioclip.W + ".mp3"}
                        clipName={audioclip.W}
                        
                    />
                    <DrumPad
                        letter="E"
                        clip={amazonURL +audioclip.E + ".mp3"}
                        clipName={audioclip.E}
                    />
                    <DrumPad
                        letter="A"
                        clip={amazonURL +audioclip.A + ".mp3"}
                        clipName={audioclip.A}
                    />
                    <DrumPad
                        letter="S"
                        clip={amazonURL +audioclip.S + ".mp3"}
                        clipName={audioclip.S}
                    />
                    <DrumPad
                        letter="D"
                        clip={amazonURL +audioclip.D + ".mp3"}
                        clipName={audioclip.D}
                    />
                    <DrumPad
                        letter="Z"
                        clip={amazonURL +audioclip.Z + ".mp3"}
                        clipName={audioclip.Z}
                    />
                    <DrumPad
                        letter="X"
                        clip={amazonURL +audioclip.X + ".mp3"}
                        clipName={audioclip.X}
                    />
                    <DrumPad
                        letter="C"
                        clip={amazonURL +audioclip.C + ".mp3"}
                        clipName={audioclip.C}
                    />
                </Grid>
                <TextField
                    autoFocus
                    onKeyPress={(ev) => {
                        console.log(`Pressed keyCode ${ev.key}`);
                        this.buttonPress();
                        if (ev.key === 'Enter') {
                            // Do code here
                            ev.preventDefault();
                        }
                    }}
                />
            </Grid>
        )
    }
}