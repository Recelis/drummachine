export const ADD_SOUND = "ADD_SOUND";
export const TOGGLE_RECORD = "TOGGLE_RECORD";
export const DELETE_SOUND = "DELETE_SOUND";
export const REFRESH_SEQUENCE = "REFRESH_SEQUENCE";
export const READY_TO_DELETE = "READY_TO_DELETE";

export const DRUM_MACHINE_OFF = false;
export const DRUM_MACHINE_ON = true;

export const CLOSED_TO_DELETE = "closed";
export const OPEN_TO_DELETE = "open";


// action creators
export function addSound(sound){
    return{
        type:ADD_SOUND,
        sound
    }
}

export function toggleRecord(){
    return{
        type:TOGGLE_RECORD
    }
}

export function readyToDelete(sound,index){
    return{
        type:READY_TO_DELETE,
        sound,
        index
    }
}

export function deleteSound(index){
    return{
        type:DELETE_SOUND,
        index
    }
}

export function refreshSequence(){
    return{
        type:REFRESH_SEQUENCE
    }
}


