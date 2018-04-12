import * as gems from "data/dropTables/gems";

export default [
  {
    name: "Copper Vein",
    swings: 3,
    drops: [
      { id: 19697, min: 1, max: 2 }, // Copper Ore
      {
        dropTable: gems.tier1,
        min: 0,
        max: 1
      }
    ]
  },
  {
    name: "Silver Vein",
    swings: 3,
    drops: [
      { id: 19703, min: 1, max: 2 }, // Silver Ore
      {
        dropTable: gems.tier2,
        min: 0,
        max: 1
      }
    ]
  },
  {
    name: "Gold Vein",
    swings: 3,
    drops: [
      { id: 19698, min: 1, max: 2 }, // Gold Ore
      {
        dropTable: gems.tier3,
        min: 0,
        max: 1
      }
    ]
  },
  {
    name: "Iron Vein",
    swings: 3,
    drops: [
      { id: 19699, min: 1, max: 2 }, // Iron Ore
      {
        dropTable: gems.tier3,
        min: 0,
        max: 1
      }
    ]
  },
  {
    name: "Platinum Vein",
    swings: 3,
    drops: [
      { id: 19702, min: 1, max: 2 }, // Platinum Ore
      {
        dropTable: gems.tier4,
        min: 0,
        max: 1
      }
    ]
  },
  {
    name: "Mithril Vein",
    swings: 3,
    drops: [
      { id: 19700, min: 1, max: 2 }, // Mithril Ore
      {
        dropTable: gems.tier5,
        min: 0,
        max: 1
      }
    ]
  },
  {
    name: "Orichalcum Vein",
    swings: 3,
    drops: [
      { id: 19701, min: 1, max: 2 }, // Orichalcum Ore
      {
        dropTable: gems.tier6,
        min: 0,
        max: 1
      }
    ]
  }
];
