
import {
    ADD_SOUND, 
    TOGGLE_RECORD,
    DELETE_SOUND,
    REFRESH_SEQUENCE,
    DRUM_MACHINE_OFF,
    DRUM_MACHINE_ON,
} from "../actions/index";

import { combineReducers } from "redux";

// const initialState = {
//     sequence:[],
//     record:false
// }

function drumSounds(state = [], action){
    switch(action.type){
        case ADD_SOUND:
            return state.concat(action.sound);
        case DELETE_SOUND:
            return [

            ]
        case REFRESH_SEQUENCE:
            return []
        default:
            return state;
    }
}

const initialState = {
    record:DRUM_MACHINE_OFF,
    text:"START RECORDING"
}

function drumMachine(state = initialState, action){
    switch(action.type){
        case TOGGLE_RECORD:
                if (state.record) 
                    return Object.assign({}, state,{
                        record:DRUM_MACHINE_OFF,
                        text:"START RECORDING"
                    });
                else return Object.assign({}, state,{
                    record:DRUM_MACHINE_ON,
                    text:"STOP RECORDING"
                }) 
        default:
            return state;
    }
}

const drumApp = combineReducers({
    drumMachine,
    drumSounds
});

export default drumApp;