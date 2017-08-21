function buildItemDb(itemIds, dataService) {
  return Promise.all([
    dataService.getItems(itemIds),
    dataService.getPrices(itemIds)
  ]).then(res => {
    let itemDb = {};

    res[0].forEach(
      item => (itemDb[item.id] = { id: item.id, name: item.name })
    );

    res[1].forEach(
      item =>
        (itemDb[item.id] = {
          ...itemDb[item.id],
          buy: item.buys.unit_price,
          sell: item.sells.unit_price
        })
    );

    return itemDb;
  });
}

export { buildItemDb };
