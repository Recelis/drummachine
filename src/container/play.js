import { connect } from "react-redux";
import { clickedSound, unclickedSound } from "../actions/index";
import PlayButton from "../presentational/playbutton";

const mapStateToProps = (state) => {
    return {
        sequence:state.drumSounds
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setClicked: (key) => {
            dispatch(clickedSound(key))
        },
        setUnclicked: (key) => {
            dispatch(unclickedSound(key))
        }
    }
}

const Play = connect(mapStateToProps, mapDispatchToProps)(PlayButton);

export default Play;