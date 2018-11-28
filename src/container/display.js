import { connect } from "react-redux";

import { deleteSound, readyToDelete } from "../actions";

import DisplayScreen from "../presentational/displayScreen";

const mapStateToProps = (state) =>{
    return {
        sequence:state.drumSounds
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        prepareToDelete:(sound,index)=>{
            dispatch(readyToDelete(sound,index));
        },
        deleteThisSound:(index) =>{
            dispatch(deleteSound(index));
        }
    }
}

const Display = connect(mapStateToProps,mapDispatchToProps)(DisplayScreen);

export default Display;