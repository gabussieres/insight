import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../App/reducers";
import rootSaga from "../App/sagas";

const composeEnhancers = composeWithDevTools({
  actionsBlacklist: ["REDUX_STORAGE_SAVE"]
});

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../App/reducers", () => {
      const nextRootReducer = require("../App/reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
