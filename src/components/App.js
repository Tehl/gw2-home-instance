import React from "react";
import NodeValue from "./NodeValue/Container";
import SwingValue from "./SwingValue/Container";

const App = () =>
  <div className="row">
    <div className="col col-8 push-center">
      <NodeValue />
      <SwingValue />
    </div>
  </div>;

export default App;
