import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Problem from "./component.js";
import problem from "./selectors.js";

import { toggleSolution, showNineDotProblem } from "./actions";

const selectors = { problem };
const actions = { toggleSolution, showNineDotProblem };

export default connect(createStructuredSelector(selectors), actions)(Problem);
