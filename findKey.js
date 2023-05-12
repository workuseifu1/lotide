const findKey = function (object, callback) {
  let results = "";
  for (const key in object) {
    let keys = object[key];
    if (callback(keys)) {
      results += key;
      break;
    }
  }
  return results;
};
module.exports = findKey;
