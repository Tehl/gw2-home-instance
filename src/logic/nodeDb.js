function expandDropTable(itemDb, item) {
  const sumBuyPrice = (sum, o) => sum + itemDb[o.id].buy;
  const sumSellPrice = (sum, o) => sum + itemDb[o.id].sell;
  const sortBuyPrice = (a, b) => itemDb[b.id].buy - itemDb[a.id].buy;
  const sortSellPrice = (a, b) => itemDb[b.id].sell - itemDb[a.id].sell;

  let dropTable = item.dropTable.map(inner => expandItem(itemDb, inner));

  let buyTable = [...dropTable].sort(sortBuyPrice);
  let sellTable = [...dropTable].sort(sortSellPrice);

  let result = {
    ...item,
    dropTable: dropTable
  };

  result.minBuy = buyTable.slice(0, item.min).reduce(sumBuyPrice, 0);
  result.maxBuy = buyTable.slice(0, item.max).reduce(sumBuyPrice, 0);
  result.avgBuy = (result.minBuy + result.maxBuy) / 2;

  result.minSell = sellTable.slice(0, item.min).reduce(sumSellPrice, 0);
  result.maxSell = sellTable.slice(0, item.max).reduce(sumSellPrice, 0);
  result.avgSell = (result.minSell + result.maxSell) / 2;

  return result;
}

function expandItem(itemDb, item) {
  if (item.dropTable) {
    return expandDropTable(itemDb, item);
  }

  if (!item.id) {
    return { ...item };
  }

  let dbEntry = itemDb[item.id];
  if (!dbEntry) {
    return { ...item };
  }

  let result = {
    ...item,
    name: dbEntry.name,
    minBuy: dbEntry.buy * item.min,
    maxBuy: dbEntry.buy * item.max,
    minSell: dbEntry.sell * item.min,
    maxSell: dbEntry.sell * item.max
  };

  result.avgBuy = (result.minBuy + result.maxBuy) / 2;
  result.avgSell = (result.minSell + result.maxSell) / 2;

  return result;
}

function expandNode(itemDb, node) {
  let result = {
    ...node,
    drops: node.drops.map(item => expandItem(itemDb, item))
  };

  let minBuy = 0;
  let maxBuy = 0;
  let avgBuy = 0;
  let minSell = 0;
  let maxSell = 0;
  let avgSell = 0;

  result.drops.forEach(node => {
    minBuy += node.minBuy;
    maxBuy += node.maxBuy;
    avgBuy += node.avgBuy;
    minSell += node.minSell;
    maxSell += node.maxSell;
    avgSell += node.avgSell;
  });

  result.minBuy = minBuy * node.swings;
  result.maxBuy = maxBuy * node.swings;
  result.avgBuy = avgBuy * node.swings;
  result.minSell = minSell * node.swings;
  result.maxSell = maxSell * node.swings;
  result.avgSell = avgSell * node.swings;

  return result;
}

function buildNodeDb(itemDb, nodes) {
  return nodes.map(node => expandNode(itemDb, node));
}

export { buildNodeDb };
