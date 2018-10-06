export const TOGGLE_SOLUTION = "TOGGLE_SOLUTION";
export const SHOW_NINE_DOT_PROBLEM = "SHOW_NINE_DOT_PROBLEM";
export const SHOW_DUNCKER_RADIATION_TASK = "SHOW_DUNCKER_RADIATION_TASK";

export function toggleSolution() {
  return { type: TOGGLE_SOLUTION };
}

export function showNineDotProblem() {
  return { type: SHOW_NINE_DOT_PROBLEM };
}

export function showDunckerRadiationTask() {
  return { type: SHOW_DUNCKER_RADIATION_TASK };
}
