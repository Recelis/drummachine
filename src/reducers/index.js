import {
  ADD_SOUND,
  TOGGLE_RECORD,
  DELETE_SOUND,
  REFRESH_SEQUENCE,
  READY_TO_DELETE,
  DRUM_MACHINE_OFF,
  DRUM_MACHINE_ON,
  CLOSED_TO_DELETE,
  OPEN_TO_DELETE,
  CLICKED_SOUND,
  UNCLICKED_SOUND
} from "../actions/index";

import { combineReducers } from "redux";

// const initialState = {
//     sequence:[],
//     record:false
// }

function drumSounds(state = [], action) {
  switch (action.type) {
    case ADD_SOUND:
      let newSound = {};
      newSound[action.sound] = CLOSED_TO_DELETE;
      return state.concat(newSound);
    case DELETE_SOUND:
      console.log(state.slice(0, action.index));
      console.log(state.slice(action.index + 1));
      let newState = state
        .slice(0, action.index)
        .concat(state.slice(action.index + 1));
      return newState;
    case REFRESH_SEQUENCE:
      return [];
    case READY_TO_DELETE:
      let input = state.slice();
      if (input.length > 0) {
        if (input[action.index][action.sound] === CLOSED_TO_DELETE) {
          input[action.index][action.sound] = OPEN_TO_DELETE;
        } else {
          input[action.index][action.sound] = CLOSED_TO_DELETE;
        }
      }
      return input;
    default:
      return state;
  }
}

const initialState = {
  record: DRUM_MACHINE_OFF,
  text: "START RECORDING"
};

function drumMachine(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_RECORD:
      if (state.record)
        return Object.assign({}, state, {
          record: DRUM_MACHINE_OFF,
          text: "START RECORDING"
        });
      else
        return Object.assign({}, state, {
          record: DRUM_MACHINE_ON,
          text: "STOP RECORDING"
        });
    default:
      return state;
  }
}

let initialSounds = {
  Q: "unclicked",
  W: "unclicked",
  E: "unclicked",
  A: "unclicked",
  S: "unclicked",
  D: "unclicked",
  Z: "unclicked",
  X: "unclicked",
  C: "unclicked"
};
function keyState(state = initialSounds, action) {
  switch (action.type) {
    case CLICKED_SOUND:
      console.log(action.key);
      let clickedObj = {};
      clickedObj[action.key] = "clicked";
      return Object.assign({}, state, clickedObj);
    case UNCLICKED_SOUND:
      console.log(action.key);
      let unclickObj = {};
      unclickObj[action.key] = "unclicked";
      return Object.assign({}, state, unclickObj);
    default:
      return state;
  }
}

const drumApp = combineReducers({
  drumMachine,
  drumSounds,
  keyState
});

export default drumApp;
