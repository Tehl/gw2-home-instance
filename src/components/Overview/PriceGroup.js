import React from "react";
import { formatPrice } from "../../utility/display";

import "./PriceGroup.less";

const PriceGroup = ({ label, minValue, maxValue, avgValue }) =>
  <table className="bordered price-group">
    <thead>
      <tr>
        <th colSpan="2" className="header">
          {label}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th colSpan="2" className="value-label">
          Average
        </th>
      </tr>
      <tr>
        <td colSpan="2" className="value avg-value">
          {formatPrice(avgValue)}
        </td>
      </tr>
      <tr>
        <th className="value-label">Min</th>
        <th className="value-label">Max</th>
      </tr>
      <tr>
        <td className="value">
          {formatPrice(minValue)}
        </td>
        <td className="value">
          {formatPrice(maxValue)}
        </td>
      </tr>
    </tbody>
  </table>;

export default PriceGroup;
