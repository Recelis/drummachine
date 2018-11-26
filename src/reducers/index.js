
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
            console.log("changing sound!");
            return [
                ...state,
                {   
                    id:state.length,
                    sound:action.sound
                }
            ]
        case DELETE_SOUND:
            return [

            ]
        case REFRESH_SEQUENCE:
            return []
        default:
            return state;
    }
}

function drumMachine(state = DRUM_MACHINE_OFF, action){
    switch(action.type){
        case TOGGLE_RECORD:
            return !state; 
        default:
            return state;
    }
}

const drumApp = combineReducers({
    drumMachine,
    drumSounds
});

export default drumApp;