import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import App from "./component.js";
import app from "./selectors.js";

import { actionOne } from "./actions";

const selectors = { app };
const actions = {
  actionOne
};

export default connect(createStructuredSelector(selectors), actions)(App);
