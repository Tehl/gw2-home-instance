import React from "react";
import { formatPrice } from "../../utility/display";

const RowPrice = ({ item }) => (
  <React.Fragment>
    <td>{formatPrice(item.minBuy)}</td>
    <td>{formatPrice(item.maxBuy)}</td>
    <td>{formatPrice(item.avgBuy)}</td>
    <td>{formatPrice(item.minSell)}</td>
    <td>{formatPrice(item.maxSell)}</td>
    <td>{formatPrice(item.avgSell)}</td>
  </React.Fragment>
);

export default RowPrice;
