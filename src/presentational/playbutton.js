import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import { audioclip} from '../audioclip';
import { amazonURL } from '../audioclip';
import { audioObj } from '../audioclip';
let playback = {};

export default class PlayButton extends Component {
    constructor(props){
        super(props);
        this.playSequence = this.playSequence.bind(this);
        this.stopSequence = this.stopSequence.bind(this);
    }
    playSequence(){
        // pass to local values
        let seq = this.props.sequence;
        let seqLen = seq.length;
        // if empty return 
        if (seqLen === 0) return;
        // extract from array ( really stupid code )
        let sequenceKeys = [];
        for (let ii =0; ii < seqLen; ii ++) {
            sequenceKeys.push(...Object.keys(seq[ii])); // should change this data structure so that key isn't button
        }
        let ii = 0;
        playback = setInterval(()=>{
            audioObj()[sequenceKeys[ii]].currentTime = 0;
            audioObj()[sequenceKeys[ii]].play();
            ii++;
            if (ii >= seqLen) clearInterval(playback);
        }, 500);
    }
    stopSequence(){
        console.log('stopping playback');
        clearInterval(playback);
    }
    render(){
        return (
            <div>
                <Button id = "play" onClick = {this.playSequence}>play</Button>
                <Button id = "play" onClick = {this.stopSequence}>stop</Button>
            </div>
        )
    }
}