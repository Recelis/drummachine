import drumApp from "../reducers";
import { createStore, compose } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

// const enhancers = compose(
//     window.devToolsExtension ? window.devTools() : f=>f
// );

export const store = createStore(drumApp, composeWithDevTools());