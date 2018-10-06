import { createStructuredSelector } from "reselect";

const titleSelector = state => state.problem.problemTitle;
const descriptionSelector = state => state.problem.problemDescription;
const solutionSelector = state => state.problem.problemSolution;
const showSolutionSelector = state => state.problem.showSolution;

export default createStructuredSelector({
  title: titleSelector,
  description: descriptionSelector,
  solution: solutionSelector,
  showSolution: showSolutionSelector
});
