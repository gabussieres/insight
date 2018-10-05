import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import * as appActions from "./actions";

const InitialState = {
  psych: "is awesome",
  cs: "too"
};

export function mode(state = InitialState, action) {
  switch (action.type) {
    case appActions.ACTION_ONE: {
      return {
        ...state,
        cs: 2
      };
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  mode,
  routing
});

export default rootReducer;
