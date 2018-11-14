import React, { Component } from "react"

export default class DrumPad extends Component{
    render(){
        return(
            <button onkeypress={()=>console.log("key has been pressed")}>
                <audio>
                    <source src = {this.props.source}></source>
                </audio>
            </button>
        )
    }
}