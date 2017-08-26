import React from "react";
import Aux from "react-aux";
import ItemRow from "./ItemRow";
import RowPrice from "../Generic/RowPrice";

const SwingValueNodeRow = ({ node }) =>
  <Aux>
    <tr className="node">
      <td>
        {node.name}
      </td>
      <td colSpan="2" />
      <td />
      <RowPrice item={node.swingValue} />
    </tr>
    {node.drops.map((item, i) => <ItemRow key={i} item={item} />)}
  </Aux>;

export default SwingValueNodeRow;
