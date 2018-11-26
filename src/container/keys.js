import { connect } from "react-redux";

import { addSound } from "../actions"; 

import KeyPad from "../presentational/keypad";

const mapStateToProps = (state) =>{
    return {
        allowRecord:state.drumMachine.record
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addSoundToState:(key)=>{
            dispatch(addSound(key))
        }
    }
}

const Keys = connect(mapStateToProps, mapDispatchToProps)(KeyPad);

export default Keys;