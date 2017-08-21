import { distinct, flatten } from "../utility/array";
import { nodeDbLoaded } from "../actions/nodeDb";
import { buildItemDb } from "./itemDb";
import { buildNodeDb } from "./nodeDb";

function getItemIds(item) {
  if (item.id) {
    return [item.id];
  }
  if (item.dropTable) {
    return flatten(item.dropTable.map(getItemIds));
  }
  return [];
}

function initialize(dispatch, nodes, dataService) {
  var itemIds = distinct(
    flatten(
      nodes.map(node => flatten(node.drops.map(drop => getItemIds(drop))))
    )
  );

  return buildItemDb(itemIds, dataService)
    .then(itemDb => {
      return buildNodeDb(itemDb, nodes);
    })
    .then(nodeDb => {
      dispatch(nodeDbLoaded(nodeDb));
    });
}

export default initialize;
