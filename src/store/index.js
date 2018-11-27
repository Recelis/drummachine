import drumApp from "../reducers";
import { createStore, compose } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(drumApp, composeWithDevTools());