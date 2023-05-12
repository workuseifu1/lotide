const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;

