const ACTION_ONE = "ACTION_ONE";

function actionOne() {
  return { type: ACTION_ONE };
}

module.exports = {
  ...ACTION_ONE,
  ...actionOne
};
