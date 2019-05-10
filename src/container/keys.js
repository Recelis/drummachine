import { connect } from "react-redux";

import { addSound, clickedSound, unclickedSound } from "../actions"; 

import KeyPad from "../presentational/keypad";

const mapStateToProps = (state) =>{
    return {
        allowRecord:state.drumMachine.record,
        keyState:state.keyState
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addSoundToState:(key)=>{
            dispatch(addSound(key))
        },
        setClicked: (key) => {
            dispatch(clickedSound(key))
        },
        setUnclicked: (key) => {
            dispatch(unclickedSound(key))
        }
    }
}

const Keys = connect(mapStateToProps, mapDispatchToProps)(KeyPad);

export default Keys;