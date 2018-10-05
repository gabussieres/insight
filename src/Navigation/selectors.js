import { createStructuredSelector, createSelector } from "reselect";

const selectedState = state => state;

export default createStructuredSelector({
  state: selectedState
});
