export const ADD_SOUND = "ADD_SOUND";
export const TOGGLE_RECORD = "TOGGLE_RECORD";
export const DELETE_SOUND = "DELETE_SOUND";
export const REFRESH_SEQUENCE = "REFRESH_SEQUENCE";

export const DRUM_MACHINE_OFF = false;
export const DRUM_MACHINE_ON = true;


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

export function deleteSound(deleteID){
    return{
        type:DELETE_SOUND,
        id:deleteID
    }
}

export function refreshSequence(){
    return{
        type:REFRESH_SEQUENCE
    }
}