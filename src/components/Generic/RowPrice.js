import React from "react";
import Aux from "react-aux";
import { formatPrice } from "../../utility/display";

const RowPrice = ({ item }) =>
  <Aux>
    <td>
      {formatPrice(item.minBuy)}
    </td>
    <td>
      {formatPrice(item.maxBuy)}
    </td>
    <td>
      {formatPrice(item.avgBuy)}
    </td>
    <td>
      {formatPrice(item.minSell)}
    </td>
    <td>
      {formatPrice(item.maxSell)}
    </td>
    <td>
      {formatPrice(item.avgSell)}
    </td>
  </Aux>;

export default RowPrice;
