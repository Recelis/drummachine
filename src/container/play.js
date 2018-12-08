import { connect } from "react-redux";

import PlayButton from "../presentational/playbutton";

const mapStateToProps = (state) => {
    return {
        sequence:state.drumSounds
    }
}

const Play = connect(mapStateToProps, null)(PlayButton);

export default Play;