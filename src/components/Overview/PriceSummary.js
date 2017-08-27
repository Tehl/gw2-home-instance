import React from "react";
import PriceGroup from "./PriceGroup";

const PriceSummary = ({ buyValue, sellValue }) =>
  <div className="node-summary row">
    <div className="col col-4 offset-1">
      <PriceGroup label="Buy Price" {...buyValue} />
    </div>
    <div className="col col-4 offset-2">
      <PriceGroup label="Sell Price" {...sellValue} />
    </div>
  </div>;

export default PriceSummary;
