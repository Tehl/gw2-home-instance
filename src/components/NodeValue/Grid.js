import React from "react";
import NodeRow from "./NodeRow";

import "./Grid.less";

const NodeValueGrid = ({ nodes }) => (
  <table className="striped node-value-grid">
    <thead>
      <tr>
        <th>Node</th>
        <th>Per Swing</th>
        <th>Swings</th>
        <th>Buy (min)</th>
        <th>Buy (max)</th>
        <th>Buy (avg)</th>
        <th>Sell (min)</th>
        <th>Sell (max)</th>
        <th>Sell (avg)</th>
      </tr>
    </thead>
    <tbody>{nodes.map((node, i) => <NodeRow key={i} node={node} />)}</tbody>
  </table>
);

export default NodeValueGrid;
