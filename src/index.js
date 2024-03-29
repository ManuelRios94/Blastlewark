import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./redux/reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

//Notification
import Notification from "./components/shared/Notification/NotificationComponent";

import "./index.css";

import AppRoutes from "./routes";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger, thunk));
const store = createStore(reducers, enhancer);

render(
  <Provider store={store}>
    <Notification />
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
