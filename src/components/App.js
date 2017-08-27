import React from "react";
import Overview from "./Overview/Container";
import NodeValue from "./NodeValue/Container";
import SwingValue from "./SwingValue/Container";

const App = () =>
  <div className="row">
    <div className="col col-8 push-center">
      <Overview />
      <NodeValue />
      <SwingValue />
    </div>
  </div>;

export default App;
