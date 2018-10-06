import * as problemAction from "./actions";
import { nineDotProblem, dunckerRadiationTask } from "./allProblems";

const InitialState = {
  ...nineDotProblem,
  showSolution: false
};

export function problem(state = InitialState, action) {
  switch (action.type) {
    case problemAction.TOGGLE_SOLUTION: {
      return {
        ...state,
        showSolution: !state.showSolution
      };
    }
    case problemAction.SHOW_NINE_DOT_PROBLEM: {
      return {
        ...state,
        ...nineDotProblem
      };
    }
    case problemAction.SHOW_DUNCKER_RADIATION_TASK: {
      return {
        ...state,
        ...dunckerRadiationTask
      };
    }
    default: {
      return state;
    }
  }
}
