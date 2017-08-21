function nodeDbLoaded(nodeDb) {
  return {
    type: "NODE_DB_LOADED",
    nodeDb: nodeDb
  };
}

export { nodeDbLoaded };
