import React, { Component } from "react"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props
        }
    }
    render() {
        return (
            <div className="drum-pad">
                <Button variant="outlined" className={this.state.classes.button} onClick = {this.props.buttonPress(this.props.letter)}>
                    <audio>
                        <source src={this.props.clip}></source>
                    </audio>
                    {this.props.letter}
                </Button>
            </div>

        )
    }
}