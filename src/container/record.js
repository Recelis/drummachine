import { connect } from "react-redux"
import RecordButton from "../presentational/recordButton";

import { toggleRecord } from "../actions";

const mapStateToProps = (state) => {
    return { 
        text: state.drumMachine.text,
        recordStatus: state.drumMachine.record 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleButton: (message) => {
            dispatch(toggleRecord(message))
        }
    }
};

const Record = connect(mapStateToProps, mapDispatchToProps)(RecordButton);

export default Record;