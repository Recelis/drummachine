import React, { Component } from "react"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const DrumPad = (props)=> {
    // console.log(onClick);
    return (
        <Grid item xs={4} className="drum-pad">
            {(props.onStatus)?
            <Button variant="outlined" className={props.buttonStatus} onClick = {props.onClick}>
                {props.letter}
            </Button>:
            <Button variant="outlined" className={props.buttonStatus}>
                {props.letter}
            </Button>
            }
        </Grid>
    )
}

export default DrumPad;