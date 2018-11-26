import React from "react";
import Button from '@material-ui/core/Button';

const RecordButton = (props) =>{
    return <Button onClick = {props.toggleButton}>{props.text}</Button>
}

export default RecordButton;