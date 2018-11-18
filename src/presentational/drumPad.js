import React, { Component } from "react"


export default class DrumPad extends Component{
    render(){
        return(
            <div className = "drum-pad">
                <button onkeypress={()=>console.log("key has been pressed")}>
                    <audio>
                        <source src = {this.props.clip}></source>
                    </audio>
                    {this.props.letter}
                </button>
            </div>
            
        )
    }
}