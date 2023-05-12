const without = function (source, itemsToRemove) {
  const result = [];
  for (let j = 0; j < source.length; j++) {
    if (!(itemsToRemove.includes(source[j]))) {
      result.push(source[j]);
    }
  }
  return result;
};
module.exports = without;
