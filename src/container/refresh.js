import { connect } from "react-redux";

import { refreshSequence } from "../actions";

import RefreshButton from "../presentational/refreshButton";

const mapDispatchToProps = (dispatch) =>{
    return{
        clickedRefresh:()=>{
            dispatch(refreshSequence())
        }
    }
}

// null is needed for first argument if mapStateToProps is not needed
const Refresh = connect(null, mapDispatchToProps)(RefreshButton);

export default Refresh;