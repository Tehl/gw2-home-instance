import React from "react";
import RowPrice from "../Generic/RowPrice";
import { formatRange, formatPrice } from "../../utility/display";

const NodeValueRow = ({ node }) => (
  <tr className="node">
    <td>{node.name}</td>
    <td className="swing-range">
      <span>{formatPrice(node.swingValue.minBuy)}</span>
      <span className="separator"> to </span>
      <span>{formatPrice(node.swingValue.maxSell)}</span>
    </td>
    <td>{node.swings}</td>
    <RowPrice item={node.nodeValue} />
  </tr>
);

export default NodeValueRow;
