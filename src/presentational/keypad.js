import React, { Component } from "react";
import DrumPad from "./drumPad"

import Grid from '@material-ui/core/Grid';

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
    Q:"Header-1",
    W:"Header-2",
    E:"Header-3",
    A:"Header-4",
    S:"Header-6",
    D:"Dsc_Oh",
    Z:"Kick_n_Hat",
    X:"RP4_KICK_1",
    C:"Csv_H2"
}

export default class KeyPad extends Component{
    render(){
        return(
            <Grid>
                <Grid item xs={12}>
                    <DrumPad
                        letter = "Q"
                        clip = ""
                        clipName = {audioclip.Q}
                    />
                    <DrumPad
                        letter = "W"
                        clip = ""
                        clipName = {audioclip.W}
                    />
                    <DrumPad
                        letter = "E"
                        clip = ""
                        clipName = {audioclip.E}
                    />
                    <DrumPad
                        letter = "A"
                        clip = ""
                        clipName = {audioclip.A}
                    />
                    <DrumPad
                        letter = "S"
                        clip = ""
                        clipName = {audioclip.S}
                    />
                    <DrumPad
                        letter = "D"
                        clip = ""
                        clipName = {audioclip.D}
                    />
                    <DrumPad
                        letter = "Z"
                        clip = ""
                        clipName = {audioclip.Z}
                    />
                    <DrumPad
                        letter = "X"
                        clip = ""
                        clipName = {audioclip.X}
                    />
                    <DrumPad
                        letter = "C"
                        clip = ""
                        clipName = {audioclip.C}
                    />
                </Grid>
            </Grid>
        )
    }
}