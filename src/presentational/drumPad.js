import React, { Component } from "react"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const DrumPad = (props)=> {
    // console.log(onClick);
    return (
        <Grid item xs={4} className="drum-pad">
            <Button variant="outlined" className={'button'} onClick = {props.onClick}>
                <audio>
                    <source src={props.clip}></source>
                </audio>
                {props.letter}
            </Button>
        </Grid>
    )
}

export default DrumPad;