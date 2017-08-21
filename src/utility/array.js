function distinct(arr) {
  return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

function flatten(arr) {
  return arr.reduce((sum, local) => [...sum, ...local], []);
}

export { distinct, flatten };
