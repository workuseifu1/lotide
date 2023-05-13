const findKeyByValue = function (obj, value) {
  let keys = "";
  for (const key in obj) {
    if (obj[key] === value) {
      keys = key;
      break;
    } else if (obj[key] !== value) {
      keys = undefined;
      break;
    }
  }
  return keys;
};
module.exports = findKeyByValue;
