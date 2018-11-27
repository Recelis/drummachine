import React from "react";
import Button from '@material-ui/core/Button';

const RefreshButton = (props) =>{
    return (
        <Button onClick = {props.clickedRefresh}>Refresh</Button>
    )
}

export default RefreshButton;