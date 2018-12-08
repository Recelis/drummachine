import React, { Component } from "react";

import Button from '@material-ui/core/Button';

export default class PlayButton extends Component {
    constructor(props){
        super(props);
        this.playSequence = this.playSequence.bind(this);
        this.stopSequence = this.stopSequence.bind(this);
    }
    playSequence(){
        console.log(this.props.sequence);
        // pass to local values
        let seq = this.props.sequence;
        let seqLen = seq.length;
        // if empty return 
        if (seqLen === 0) return;
        // extract from array ( really stupid code )
        let sequenceKeys = [];
        for (let ii =0; ii < seqLen; ii ++) {
            sequenceKeys.push(...Object.keys(seq[ii]));
        }
        // play sequence
            

        console.log(sequenceKeys);
        // 
    }
    stopSequence(){

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