import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import configureStore from "./store/configureStore.js";

import App from "./Pages/App";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      store={store}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
