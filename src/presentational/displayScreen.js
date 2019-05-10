import React from "react";

import Button from '@material-ui/core/Button';

 const DisplayScreen = (props)=>{
    let sequence = props.sequence.map((sound, index)=>
        (sound[Object.keys(sound)] === "closed") ?
        <li key = {index}><Button onClick = {()=>props.prepareToDelete(Object.keys(sound),index)}>{Object.keys(sound)}</Button></li>
        :
        <li key = {index}>
            <Button onClick = {()=>props.prepareToDelete(Object.keys(sound),index)}>{Object.keys(sound)}</Button> 
            <Button onClick = {()=>props.deleteThisSound(index)}>X</Button>

        </li>
    );
    return(
        <ul>{sequence}</ul>
    )
}

export default DisplayScreen;