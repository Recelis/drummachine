import React, { Component } from "react"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props
        }
    }
    
    render() {
        return (
            <Grid item xs={4} className="drum-pad">
                <Button variant="outlined" className={this.state.classes.button} onClick = {this.props.buttonPress.bind(this,this.props.letter)}>
                    <audio>
                        <source src={this.props.clip}></source>
                    </audio>
                    {this.props.letter}
                </Button>
            </Grid>
        )
    }
}