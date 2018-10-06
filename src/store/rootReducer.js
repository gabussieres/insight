import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import { problem } from "../Problem/reducers";

const rootReducer = combineReducers({
  problem,
  routing
});

export default rootReducer;
