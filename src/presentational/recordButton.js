import React from "react";
import Button from '@material-ui/core/Button';

const RecordButton = (props) =>{
    let recordClassName = "";
    if (props.recordStatus) recordClassName = "recordOn";
    else recordClassName = "recordOff";
    console.log(recordClassName);
    return <Button variant="outlined" className = {recordClassName} onClick = {props.toggleButton}>{props.text}</Button>
}

export default RecordButton;