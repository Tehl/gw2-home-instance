function formatPrice(price) {
  let gold = Math.floor(price / 10000);
  let remainder = price - gold * 10000;

  let silver = Math.floor(remainder / 100);
  let copper = remainder - silver * 100;

  let result = copper + "c";

  if (silver || gold) {
    result = silver + "s " + result;
  }

  if (gold) {
    result = gold + "g " + result;
  }

  return result;
}

function formatRange(min, max) {
  if (min === max) {
    return min;
  }

  return min + " to " + max;
}

export { formatPrice, formatRange };
