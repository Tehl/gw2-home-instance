import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "./components/App";
import gw2Api from "./services/gw2Api";
import nodes from "./data/nodes";
import initialize from "./logic/initialize";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

initialize(store.dispatch, nodes, gw2Api);
