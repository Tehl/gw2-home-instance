const nodeDb = (state = {}, action) => {
  switch (action.type) {
    case "NODE_DB_LOADED":
      return { ...action.nodeDb };

    default:
      return state;
  }
};

export default nodeDb;
