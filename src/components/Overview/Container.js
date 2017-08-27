import { connect } from "react-redux";
import PriceSummary from "./PriceSummary";

const mapStateToProps = state => {
  let minBuy = 0;
  let maxBuy = 0;
  let avgBuy = 0;

  let minSell = 0;
  let maxSell = 0;
  let avgSell = 0;

  state.nodeDb.forEach(node => {
    minBuy += node.nodeValue.minBuy;
    maxBuy += node.nodeValue.maxBuy;
    avgBuy += node.nodeValue.avgBuy;

    minSell += node.nodeValue.minSell;
    maxSell += node.nodeValue.maxSell;
    avgSell += node.nodeValue.avgSell;
  });

  return {
    buyValue: {
      minValue: minBuy,
      maxValue: maxBuy,
      avgValue: avgBuy
    },
    sellValue: {
      minValue: minSell,
      maxValue: maxSell,
      avgValue: avgSell
    }
  };
};

const OverviewContainer = connect(mapStateToProps)(PriceSummary);

export default OverviewContainer;
