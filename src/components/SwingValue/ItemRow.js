import React from "react";
import RowPrice from "../Generic/RowPrice";
import { formatRange } from "../../utility/display";

const SwingValueItemRow = ({ item, isPotentialDrop }) => {
  let name;
  if (isPotentialDrop) {
    name = (
      <React.Fragment>
        <td />
        <td>{item.name}</td>
      </React.Fragment>
    );
  } else if (item.dropTable) {
    name = <td colSpan="2">Random drop:</td>;
  } else {
    name = <td colSpan="2">{item.name}</td>;
  }

  let className = isPotentialDrop ? "item item-potential" : "item";
  let rows = [
    <tr key={0} className={className}>
      <td />
      {name}
      <td>{formatRange(item.min, item.max)}</td>
      <RowPrice item={item} />
    </tr>
  ];

  if (item.dropTable) {
    rows = rows.concat(
      item.dropTable.map((drop, idx) => (
        <SwingValueItemRow key={idx + 1} item={drop} isPotentialDrop={true} />
      ))
    );
  }

  return rows;
};

export default SwingValueItemRow;
